import {
  InfoCircleOutlined,
  LockOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Badge, Col, Dropdown, Row, Space, Typography } from 'antd';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { L } from '../../lib/abpUtility';
import { GetCurrentLoginInformations } from '../../services/session/dto/getCurrentLoginInformations';
import SessionStore from '../../stores/sessionStore';
import Stores from '../../stores/storeIdentifier';
import './index.less';

const { Text } = Typography;
interface IHeaderProps {
  title?: string;
  sessionStore?: SessionStore;
}

const Header: React.FC<IHeaderProps> = ({ title, sessionStore }) => {
  const [user, onSetUser] = React.useState(sessionStore?.currentLogin?.user);
  React.useEffect(() => {
    if (!user) getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    await sessionStore!.getCurrentLoginInformations((result: GetCurrentLoginInformations) => {
      if (!result) return;
      onSetUser(result.user);
    });
  };

  const renderProfile = () => {
    return (
      user && (
        <Space direction="vertical" size={-10}>
          <Text strong>
            {user?.name} {user?.surname}
          </Text>
          <Text italic>{user?.emailAddress}</Text>
        </Space>
      )
    );
  };

  const items: MenuProps['items'] = [
    {
      key: '0',
      label: renderProfile(),
    },
    {
      type: 'divider',
    },
    // {
    //   key: '1',
    //   label: <Link to="/">{L('Profile')}</Link>,
    //   icon: <InfoCircleOutlined />,
    // },
    // {
    //   key: '2',
    //   label: <Link to="/">{L('ChangePassword')}</Link>,
    //   icon: <LockOutlined />,
    // },
    // {
    //   key: '3',
    //   label: <Link to={RouterPath.Setting}>{L('Setting')}</Link>,
    //   icon: <SettingOutlined />,
    // },
    // {
    //   type: 'divider',
    // },
    {
      key: '99',
      label: <Link to="/logout">{L('Logout')}</Link>,
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Row className="header-container">
      <Col span={8}>
        <p
          style={{ padding: '0 18px', margin: 0, fontSize: 22, fontWeight: 600, color: '#041529' }}
        >
          {title}
        </p>
      </Col>
      <Col style={{ display: 'flex', justifyContent: 'end', paddingRight: 24 }} span={8} offset={8}>
        <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Badge style={{}}>
              <Avatar
                style={{ height: 36, width: 36 }}
                shape="circle"
                alt={'profile'}
                icon={<UserOutlined />}
              />
            </Badge>
          </a>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default inject(Stores.SessionStore)(observer(Header));
