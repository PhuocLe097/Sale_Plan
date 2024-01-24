import './index.css';
import * as React from 'react';
import { Col, Layout, Menu } from 'antd';
import { L, isGranted } from '../../lib/abpUtility';
import {  appRouters } from '../Router/router.config';
import utils from '../../utils/utils';
const { Sider } = Layout;

export interface ISiderMenuProps {
    path: any;
    collapsed: boolean;
    onCollapse: any;
    history: any;
}

const SiderMenu = (props: ISiderMenuProps) => {
    const { collapsed, history, onCollapse } = props;
    const currentRoute = utils.getRoute(history.location.pathname);
    React.useEffect(() => {
    }, [])

    return <Sider className={'sidebar'} width={256} collapsed={collapsed} onCollapse={onCollapse}>
        {collapsed
            ? <Col style={{ textAlign: 'center', marginTop: 15, marginBottom: 10 }}>
                <span className={'u_text_gateway u_text_gateway__collapsed'}>P</span>
            </Col>
            : <Col style={{ textAlign: 'center', marginTop: 15, marginBottom: 10 }}>
                <span title='Configure an App Service app' className={'u_text_gateway'}>PROMOTION</span>
            </Col>}

        <Menu key={'left-menu'} theme="dark" mode="inline" selectedKeys={[currentRoute ? currentRoute.path : '']}>
            {appRouters
                .filter((item: any) => !item.isLayout && item.showInMenu)
                .map((route: any, index: number) => {
                    if (route.permission && !isGranted(route.permission)) return null;
                        return <Menu.Item 
                                    key={index} 
                                    onClick={() => history.push(route.path)}
                                    title={L(route.title)} >
                            <route.icon /> <span>{L(route.title)}</span>
                        </Menu.Item>
                })}
        </Menu>
    </Sider>
};

export default SiderMenu;
