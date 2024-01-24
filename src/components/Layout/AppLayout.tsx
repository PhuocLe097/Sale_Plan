import './AppLayout.css';
import * as React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Footer from '../../components/Footer';
import { Layout } from 'antd';
import ProtectedRoute from '../Router/ProtectedRoute';
import SiderMenu from '../../components/SiderMenu';
import { appRouters } from '../Router/router.config';
import utils from '../../utils/utils';
import NotFoundRoute from '../Router/NotFoundRoute';
import Header from '../Header';

const { Content } = Layout;

const AppLayout = React.memo((props: any) => {
    const { history, location: { pathname } } = props;
    const { path } = props.match;
    const [collapsed, setCollapsed] = React.useState(true);

    const onToggle = () => setCollapsed((prevCollapsed) => !prevCollapsed);
    const onCollapse = () => setCollapsed(!collapsed);

    const renderLayout = () => {
        return (
          <Layout className="root-layout" style={{ minHeight: '100vh', height:'100vh' }}>
            <SiderMenu
              path={path}
              onCollapse={onCollapse}
              history={history}
              collapsed={collapsed}
            />
            <Layout className="app-layout">
              <Layout.Header
                style={{ background: '#fff', minHeight: 52, padding: 0 }}
                className="l-header"
              >
                <Header collapsed={collapsed} toggle={onToggle} />
              </Layout.Header>

              <Layout.Content className="l-content" >
                <Switch>
                  {pathname === '/' && <Redirect from="/" to="/home" />}
                  {appRouters
                    .filter((item: any) => !item.isLayout)
                    .map((route: any, index: number) => {
                      return (
                        <Route
                          key={index}
                          exact
                          path={route.path}
                          render={(props) => (
                            <ProtectedRoute
                              component={route.component}
                              permission={route.permission}
                            />
                          )}
                        />
                      );
                    })}
                  {pathname !== '/' && <NotFoundRoute />}
                </Switch>
              </Layout.Content>
              {/* <Content className="l-content" style={{ margin: 20 }}></Content> */}
              <Footer />
            </Layout>
          </Layout>
        );
    }
    return <DocumentTitle title={utils.getPageTitle(pathname)}>{renderLayout()}</DocumentTitle>;
})

export default AppLayout;
