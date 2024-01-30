import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Col, Layout, Menu, Image } from 'antd';
// import type { MenuProps } from 'antd';
import * as React from 'react';
import { L, isGranted } from '../../lib/abpUtility';
import utils from '../../utils/utils';
import { appRouters } from '../Router/router.config';
import './index.css';
const { Sider } = Layout;

export interface ISiderMenuProps {
  path: any;
  history: any;
}

const SiderMenu = (props: ISiderMenuProps) => {
  const { history } = props;
  const currentRoute = utils.getRoute(history.location.pathname);
  const [collapsed, setCollapsed] = React.useState(true);

  const onCollapse = () => setCollapsed(!collapsed);
  React.useEffect(() => {}, []);

  const getIndex = appRouters
    .filter((item: any) => !item.isLayout && item.showInMenu)
    .find((route: any, index: number) => {
      if (route.permission && !isGranted(route.permission)) return null;
      if (currentRoute.path === route.path) {
        route.index = index;
        return route;
      }
    });

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      {collapsed ? (
        <Col style={{ textAlign: 'center', marginTop: 15, marginBottom: 20 }}>
          <Image
            width={50}
            src="https://minio.vietmap.vn/platform-testing/logo-2.png"
            preview={false}
          />
        </Col>
      ) : (
        <Col style={{ textAlign: 'center', marginTop: 15, marginBottom: 20 }}>
          <Image
            width={150}
            src="https://minio.vietmap.vn/platform-testing/logo-1.png"
            preview={false}
          />
        </Col>
      )}
      <Menu theme="dark" defaultSelectedKeys={[getIndex ? `${getIndex.index}` : '0']} mode="inline">
        {appRouters
          .filter((item: any) => !item.isLayout && item.showInMenu)
          .map((route: any, index: number) => {
            if (route.permission && !isGranted(route.permission)) return null;
            return (
              <Menu.Item
                key={index}
                onClick={() => history.push(route.path)}
                title={L(route.title)}
                style={{ marginTop: '20px' }}
              >
                <route.icon style={{ fontSize: '20px' }} /> <span>{L(route.title)}</span>
              </Menu.Item>
            );
          })}
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
