import './index.css';
import * as React from 'react';
import { Col, Row, Space, Typography, Anchor, Button, Divider, Input, List, Avatar } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined, UserAddOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { inject, observer } from 'mobx-react';
import Stores from '../../stores/storeIdentifier';
import SessionStore from '../../stores/sessionStore';
const { Title, Text } = Typography;

interface IMemberProps {
    sessionStore?: SessionStore
}

const Setting: React.FC<IMemberProps> = ({ sessionStore }) => {
    return <div>
        Setting
    </div>
}

export default inject(Stores.SessionStore)(observer(Setting));