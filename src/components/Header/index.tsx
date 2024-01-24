import './index.less';
import * as React from 'react';
import { Avatar, Badge, Col, Dropdown, Typography, Row, Space } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined, InfoCircleOutlined, LockOutlined, SettingOutlined,UserOutlined } from '@ant-design/icons';
import { L } from '../../lib/abpUtility';
import { Link } from 'react-router-dom';
import profilePicture from '../../images/user.png';
import type { MenuProps } from 'antd';
import SessionStore from '../../stores/sessionStore';
import { inject, observer } from 'mobx-react';
import Stores from '../../stores/storeIdentifier';
import { GetCurrentLoginInformations } from '../../services/session/dto/getCurrentLoginInformations';
import { RouterPath } from '../Router/router.config';

const { Text } = Typography;
interface IHeaderProps {
    collapsed?: boolean;
    toggle: any;
    sessionStore?: SessionStore
}

const Header: React.FC<IHeaderProps> = ({ collapsed, toggle, sessionStore }) => {
    const [user, onSetUser] = React.useState(sessionStore?.currentLogin?.user)
    React.useEffect(() => {
        if (!user)
            getCurrentUser();
    }, [])

    const getCurrentUser = async () => {
        await sessionStore!.getCurrentLoginInformations((result: GetCurrentLoginInformations) => {
            if (!result)
                return;
            onSetUser(result.user)
        });
    };

    const renderProfile = () => {
        return user && <Space direction='vertical' size={-10}>
            <Text strong>{user?.name} {user?.surname}</Text>
            <Text italic>{user?.emailAddress}</Text>
        </Space>
    }

    const items: MenuProps['items'] = [
        {
            key: '0',
            label: renderProfile()
        },
        {
            type: 'divider',
        },
        {
            key: '1',
            label: <Link to="/">{L('Profile')}</Link>,
            icon: <InfoCircleOutlined />
        },
        {
            key: '2',
            label: <Link to="/">{L('ChangePassword')}</Link>,
            icon: <LockOutlined />
        },
        {
            key: '3',
            label: <Link to={RouterPath.Setting}>{L('Setting')}</Link>,
            icon: <SettingOutlined />
        },
        {
            type: 'divider',
        },
        {
            key: '99',
            label: <Link to="/logout">{L('Logout')}</Link>,
            icon: <LogoutOutlined />
        },
    ];

    return <Row className='header-container'>
        <Col span={8}>
            {collapsed
                ? <MenuUnfoldOutlined className="trigger" onClick={toggle} />
                : <MenuFoldOutlined className="trigger" onClick={toggle} />}
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'end', paddingRight: 24 }} span={8} offset={8}>
          
            <Dropdown menu={{ items }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Badge style={{}} >
                        <Avatar style={{ height: 36, width: 36 }} shape="circle" alt={'profile'} icon={<UserOutlined />} />
                    </Badge>
                </a>
            </Dropdown>
        </Col>
    </Row>
}

export default inject(Stores.SessionStore)(observer(Header));