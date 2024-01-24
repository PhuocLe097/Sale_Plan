import './App.css';
import * as React from 'react';
import Router from './components/Router';
import SessionStore from './stores/sessionStore';
import Stores from './stores/storeIdentifier';
import { inject, observer } from 'mobx-react';
import { ConfigProvider, theme, App as AntdApp } from 'antd';
declare var abp: any;
export interface IAppProps {
  sessionStore?: SessionStore;
}

const App: React.FC<IAppProps> = ({ sessionStore }) => {
  React.useEffect(() => {
    const fetchData = async () => {
      await sessionStore?.getCurrentLoginInformations();
    };
    fetchData();
  }, [sessionStore]);

  return (
    <ConfigProvider
      theme={{
        // algorithm: isDarkMode ? theme.darkAlgorithm : defaultAlgorithm,
        algorithm: theme.defaultAlgorithm,
        token: { colorPrimary: '#1890FF' },
      }}
    >
      <AntdApp>
        <Router />
      </AntdApp>
    </ConfigProvider>
  );
};

export default inject(Stores.SessionStore)(observer(App));
