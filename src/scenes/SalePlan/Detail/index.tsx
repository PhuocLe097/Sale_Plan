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
    label: 'Target',
    children:  (<Target/>),
  },
  {
    key: '2',
    // label: 'Target',
    // children:  (<Target/>),
    label: 'Tổng quan',
    children: (<Overview/>),
  },
  {
    key: '3',
    label: 'Forecast',
    children:  (<Forecast/>),
  },
];

const index: React.FC = () => <Tabs defaultActiveKey="1" items={items}/>;

export default index;