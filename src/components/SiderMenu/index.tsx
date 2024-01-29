import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Col, Layout, Menu, Image } from 'antd';
import type { MenuProps } from 'antd';
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

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode
  // children?: MenuItem[]
): MenuItem {
  return {
    label,
    key,
    icon,
    // children,
  } as MenuItem;
}

const SiderMenu = (props: ISiderMenuProps) => {
  const { history } = props;
  const currentRoute = utils.getRoute(history.location.pathname);
  const [collapsed, setCollapsed] = React.useState(true);

  const onToggle = () => setCollapsed((prevCollapsed) => !prevCollapsed);
  const onCollapse = () => setCollapsed(!collapsed);
  React.useEffect(() => {}, []);

  const items: MenuItem[] = appRouters
    .filter((item: any) => !item.isLayout && item.showInMenu)
    .map((route: any, index: number) => {
      if (route.permission && !isGranted(route.permission)) return null;

      return getItem(
        route.title,
        `${index}`,
        <route.icon onClick={() => history.push(route.path)} style={{ fontSize: '20px' }} />
      );
    });

  return (
    // <Sider className={'sidebar'} width={256} collapsed={collapsed} onCollapse={onCollapse}>
    //   {collapsed ? (
    //     <Col style={{ textAlign: 'center', marginTop: 15, marginBottom: 10 }}>
    //       <span className={'u_text_gateway u_text_gateway__collapsed'}>P</span>
    //     </Col>
    //   ) : (
    //     <Col style={{ textAlign: 'center', marginTop: 15, marginBottom: 10 }}>
    //       <span title="Configure an App Service app" className={'u_text_gateway'}>
    //         PROMOTION
    //       </span>
    //     </Col>
    //   )}

    //   <Menu
    //     key={'left-menu'}
    //     theme="dark"
    //     mode="inline"
    //     selectedKeys={[currentRoute ? currentRoute.path : '']}
    //   >
    //     {appRouters
    //       .filter((item: any) => !item.isLayout && item.showInMenu)
    //       .map((route: any, index: number) => {
    //         if (route.permission && !isGranted(route.permission)) return null;
    //         return (
    //           <Menu.Item
    //             key={index}
    //             onClick={() => history.push(route.path)}
    //             title={L(route.title)}
    //           >
    //             <route.icon /> <span>{L(route.title)}</span>
    //           </Menu.Item>
    //         );
    //       })}
    //   </Menu>
    //   <Col span={8}>
    //     {collapsed ? (
    //       <MenuUnfoldOutlined className="trigger" onClick={onToggle} />
    //     ) : (
    //       <MenuFoldOutlined className="trigger" onClick={onToggle} />
    //     )}
    //   </Col>
    // </Sider>

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
      <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={items} />
    </Sider>
  );
};

export default SiderMenu;
