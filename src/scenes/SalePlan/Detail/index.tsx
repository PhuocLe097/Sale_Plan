import React from 'react';
import { Tabs } from 'antd';
import './index.css';
import Overview from '../Components/overview';
import Target from '../Components/target';
import Forecast from '../Components/forecast';
import type { TabsProps } from 'antd';



const items: TabsProps['items'] = [
  {
    key: '1',
    // label: 'Tổng quan',
    // children: (<Overview/>),
    label: 'Forecast',
    children:  (<Forecast/>),
  },
  {
    key: '2',
    label: 'Target',
    children:  (<Target/>),
  },
  {
    key: '3',
    // label: 'Forecast',
    // children:  (<Forecast/>),
    label: 'Tổng quan',
    children: (<Overview/>),
  },
];

const index: React.FC = () => <Tabs defaultActiveKey="1" items={items}/>;

export default index;