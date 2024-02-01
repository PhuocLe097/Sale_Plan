import React from 'react';
import { Button, Col, Layout, Row, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { NavLink } from 'react-router-dom';
import './index.css';

interface DataType {
  key: string;
  action: string;
  customerName: string;
  DtCode: string;
  customerAgency: string;
  warehouse: boolean;
  completionLevel: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    // render: (item) => <Button type="primary">Xem OB</Button>,
    render: (_, record) => (
      <Space size="middle">
        <NavLink
          to={{
            pathname: `/original-Budget/detail/${record.key}`,
            state: `original-detail - ${record.customerName} - ${record.warehouse ? 'Có kho đối tác' : 'Không có kho đối tác'} `,
          }}
        >
          <Button type="primary">Xem OB</Button>
        </NavLink>
      </Space>
    ),
  },
  {
    title: 'Tên khách hàng',
    dataIndex: 'customerName',
    key: 'customerName',
  },
  {
    title: 'Mã DT',
    dataIndex: 'DtCode',
    key: 'DtCode',
  },
  {
    title: 'hạng đại lý',
    dataIndex: 'customerAgency',
    key: 'customerAgency',
  },
  {
    title: 'Kho đối tác',
    dataIndex: 'warehouse',
    key: 'warehouse',
    render: (color: boolean) => (
      <Tag color={color == true ? 'green' : 'gold'}>{color == true ? 'Có' : 'Không'}</Tag>
    ),
  },
  {
    title: 'Mức độ hoàn thành (%) Actual/OB',
    dataIndex: 'completionLevel',
    key: 'completionLevel',
  },
];

const data: DataType[] = [
  {
    key: '1',
    action: 'action',
    customerName: 'Đại lý 1',
    DtCode: 'DT1783',
    customerAgency: 'A',
    warehouse: true,
    completionLevel: '80%',
  },
  {
    key: '2',
    action: 'action',
    customerName: 'Đại lý 2',
    DtCode: 'DT1784',
    customerAgency: 'B',
    warehouse: false,
    completionLevel: '70%',
  },
  {
    key: '3',
    action: 'action',
    customerName: 'Đại lý 3',
    DtCode: 'DT1785',
    customerAgency: 'c',
    warehouse: true,
    completionLevel: '60%',
  },
];

const originalBudget: React.FC = () => (
  <Layout className="originalBudget">
    <Row>
      <Col span={24}>
        {' '}
        <Table columns={columns} dataSource={data} bordered={false} scroll={{ x: 500 }} />
      </Col>
    </Row>
  </Layout>
);

export default originalBudget;
