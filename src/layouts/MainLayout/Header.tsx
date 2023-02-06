import React, { useState } from 'react';
import { Input, message } from 'antd'
import { login } from 'src/common/APIs'
import { NoticeType } from 'antd/es/message/interface';

interface Iaccount {
  username: string,
  password: string
}

function Header() {
  const [ api, context ] = message.useMessage()
  const [ account, setAccount ] = useState({ username: '', password: '' })

  const { username, password } = account

  const antdMessage = (type: NoticeType, content: string) => {
    api.open({
      type: type,
      content: content
    })
  }

  const onSubmit = (account: Iaccount) => {
    if (!username || !password) {
      return antdMessage('error', 'Missing account or password')
    }
    login(account).then(res => {
      if (res && res.error) antdMessage('error', res.detail)
      localStorage.setItem('user_token', res.jwt)
    })
  }

  return <>
    {context}
    <div>
      <Input 
        onChange={e => setAccount({ ...account, username: e.target.value })} 
        onPressEnter={() => onSubmit(account)}
      />
      <Input type='password' 
        onChange={e => setAccount({ ...account, password: e.target.value })}
        onPressEnter={() => onSubmit(account)}
      />
    </div>
  </>;
}

export default Header;
