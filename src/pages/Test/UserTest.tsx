import { Form, Input, Button, ConfigProvider } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { login, getUser } from '@/src/common/APIs';

import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import User from './TestComponents/User';
import { isEmpty } from 'lodash';

const { Item } = Form;

function onFailed(error: ValidateErrorEntity) {}

function RenderLoginForm(props: any) {
  const { onLogin } = props;

  const validateMessages = {
    required: "'${label}' is Required!",
  };

  return (
    <ConfigProvider form={{ validateMessages }}>
      <Form onFinish={onLogin} onFinishFailed={onFailed}>
        <Item name={'username'} label={'Username'} rules={[{ required: true }]}>
          <Input />
        </Item>
        <Item name={'password'} label={'Password'} rules={[{ required: true }]}>
          <Input />
        </Item>
        <Item>
          <Button htmlType="submit">Submit</Button>
        </Item>
      </Form>
    </ConfigProvider>
  );
}

function UserTest() {
  const [user, setUser] = useState<IUser | null | 'loading'>('loading');
  const [userToken, setUserToken] = useLocalStorage<string>('user_token', '');

  const loading = user == 'loading';

  useEffect(() => {
    const token = localStorage.getItem('user_token');
    if (token && !userToken) setUserToken(token);
  }, []);

  useEffect(() => {
    if (userToken && !isEmpty(userToken))
      getUser(userToken).then((res) => setUser(res.data));
    else setUser(null);
  }, [userToken]);

  function onLogin(values: IAccount) {
    login(values).then((res: any) => {
      setUserToken(res.jwt);
    });
  }

  return (
    <>
      {loading ? null : !user ? (
        <RenderLoginForm onLogin={onLogin} />
      ) : (
        <User user={user} setUserToken={setUserToken} userToken={userToken} />
      )}
    </>
  );
}

export default UserTest;
