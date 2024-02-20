import './index.css';

import * as React from 'react';

import { Button, Card,  Form, Input, Row, Space } from 'antd';
import {  KeyOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { inject, observer } from 'mobx-react';

import AccountStore from '../../stores/accountStore';
import AuthenticationStore from '../../stores/authenticationStore';
import { FormInstance } from 'antd/lib/form';
import { L } from '../../lib/abpUtility';
import { Redirect } from 'react-router-dom';
import SessionStore from '../../stores/sessionStore';
import Stores from '../../stores/storeIdentifier';
import rules from './index.validation';

const FormItem = Form.Item;
declare var abp: any;

export interface ILoginProps {
  authenticationStore?: AuthenticationStore;
  accountStore?: AccountStore;
  sessionStore?: SessionStore;
  history: any;
  location: any;
}

const Login: React.FC<ILoginProps> = ({ authenticationStore, accountStore, location }) => {
  const formRef = React.useRef<FormInstance>(null);

  const handleSubmit = async (values: any) => {
    await accountStore!.isTenantAvailable('Default');
    const { tenant } = accountStore!;
    console.log(tenant);
    abp.multiTenancy.setTenantIdCookie(tenant.tenantId);

    await authenticationStore!.login(values);
    const { state } = location;
    window.location = state ? state.from.pathname : '/dashboard';
  };

  const { from } = location.state || { from: { pathname: '/dashboard' } };
  if (authenticationStore!.isAuthenticated) return <Redirect to={from} />;

  return (
    <Form className="c_main_login" onFinish={handleSubmit} ref={formRef}>
      <Card className="login-block">
        <Space style={{ textAlign: 'center' }}>
          <h3>Login</h3>
        </Space>

        <FormItem name={'userNameOrEmailAddress'} rules={rules.userNameOrEmailAddress}>
          <Input
            placeholder='Username'
            prefix={<UserOutlined  style={{ color: 'rgba(0,0,0,.25)' }} />}
            size="large"
          />
        </FormItem>

        {/* <FormItem name={'password'} rules={rules.password}>
                <Input placeholder={'Password'} prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" size="large" />
        </FormItem> */}

        <Row justify="end">
          <Button htmlType={'submit'} type="primary" ghost>
            {L('LogIn')}
          </Button>
        </Row>
      </Card>
    </Form>
  );
};

export default inject(Stores.AuthenticationStore, Stores.AccountStore)(observer(Login));
