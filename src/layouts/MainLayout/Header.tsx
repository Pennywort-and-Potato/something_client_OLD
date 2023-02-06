import React, { useState } from 'react';
import { Input } from 'antd'
import { error } from 'src/Utils';

interface account {
  username: string,
  password: string
}

function onSubmit(account: account) {
  const { username, password } = account
  if (!username || !password) {
    return error('Missing account or password!!')
  }

}

function Header() {

  const [ account, setAccount ] = useState({ username: '', password: '' })

  return <>
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
