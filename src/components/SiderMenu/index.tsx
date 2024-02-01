import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Col, Layout, Menu, Image } from 'antd';
import * as React from 'react';
import { L, isGranted } from '../../lib/abpUtility';
import utils from '../../utils/utils';
import { appRouters } from '../Router/router.config';
import './index.css';
import { useLocation, useParams } from 'react-router-dom';
const { Sider } = Layout;

export interface ISiderMenuProps {
  path: any;
  history: any;
}

const SiderMenu = (props: ISiderMenuProps) => {
  const { history } = props;
  const currentRoute = utils.getRoute(history.location.pathname);
  let location = useLocation();
  const [collapsed, setCollapsed] = React.useState(true);

  const onCollapse = () => setCollapsed(!collapsed);
  React.useEffect(() => {}, []);
  const path:any = location.pathname.match(/[^/]+/g);
  const path2 = path[0]
  const getIndex = appRouters
    .filter((item: any) => !item.isLayout && item.showInMenu)
    .find((route: any, index: number) => {
      if (route.permission && !isGranted(route.permission)) return null;
      if (path2 === route.name) {
        route.index = index;
        return route;  
      }
    });
  // const path = currentRoute.path.match(/[^/]+/g);
  // console.log("🚀 ~ SiderMenu ~ path:", path[0],)
  // const getIndex = appRouters.filter((item: any)=>
  // !item.isLayout && item.showInMenu
  //     // console.log("🚀 ~ SiderMenu ~ item.name:", item.name ,path[0])
  //     // item.name == path[0]?index:0
  // ).find((route: any, index: number) => {
  //       if (route.permission && !isGranted(route.permission)) return null;
  //       if (currentRoute.name ===route.name) {  
  //         route.index = index;
  //         return route;
  //       }
  //     });

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
      <Menu theme="dark" 
      defaultSelectedKeys={[getIndex ? `${getIndex.index}` : '0']} 
      mode="inline">
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
