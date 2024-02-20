import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './index.css';
import type { TableProps } from 'antd';
import ModalChar from '../components/modalChar';
import { Button, Col, Descriptions, Layout, Row, Space, Table, Tag } from 'antd';
import type { DescriptionsProps } from 'antd';
import { inject, observer } from 'mobx-react';
import Stores from '../../../stores/storeIdentifier';
import titleStore from '../../../stores/titleStore';


interface DataType {
  key: string;
  precious: string;
  precious1: string;
  precious2: string;
  precious3: string;
  precious4: string;
}
interface DataTypeMonth {
  key: string;
  month: string;
  january: string;
  february: string;
  march: string;
  april: string;
  may: string;
  june: string;
  july: string;
  august: string;
  september: string;
  october: string;
  november: string;
  december: string;
}

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Stock đầu kỳ:',
    children: 'Not data',
    span: 3,
  },
  {
    key: '2',
    label: 'WS - Tổng OB dự toán',
    children: 'Not data',
    span: 3,
  },
  {
    key: '3',
    label: 'RS - Tổng đại lý dự toán',
    children: 'Not data',
    span: 3,
  },
  {
    key: '4',
    label: 'Stock Tổng tồn dự toán',
    children: 'Not data',
    span: 3,
  },
];
const columnsPrecious: TableProps<DataType>['columns'] = [
  {
    title: 'Quý',
    dataIndex: 'precious',
    // dataIndex: 'precious',
    key: 'precious',
    render: (data: string) => (
      <span>
        <b>{data}</b>
      </span>
    ),
  },
  {
    title: 'Quý 1',
    dataIndex: 'precious1',
    key: 'precious1',
  },
  {
    title: 'Quý 2',
    dataIndex: 'precious2',
    key: 'precious3',
  },
  {
    title: 'Quý 3',
    dataIndex: 'precious3',
    key: 'precious3',
  },
  {
    title: 'Quý 4',
    dataIndex: 'precious4',
    key: 'precious4',
  },
];

const dataPrecious: DataType[] = [
  {
    key: '1',
    precious: 'OB (VNĐ)',
    precious1: '',
    precious2: '',
    precious3: '',
    precious4: '',
  },
  {
    key: '2',
    precious: 'Target (VNĐ)',
    precious1: '',
    precious2: '',
    precious3: '',
    precious4: '',
  },
  {
    key: '3',
    precious: 'Real WS (VNĐ)',
    precious1: '',
    precious2: '',
    precious3: '',
    precious4: '',
  },
  {
    key: '4',
    precious: 'OB dự toán - Stock (VNĐ)',
    precious1: '',
    precious2: '',
    precious3: '',
    precious4: '',
  },
];

const columnsMonth: TableProps<any>['columns'] = [
  {
    title: 'Tháng',
    dataIndex: 'month',
    // dataIndex: 'precious',
    key: 'month',
    render: (data: string) => (
      <span>
        <b>{data}</b>
      </span>
    ),
  },
  {
    title: 'Tháng 1',
    dataIndex: 'january',
    key: 'january',
  },
  {
    title: 'Tháng 2',
    dataIndex: 'february',
    key: 'february',
  },
  {
    title: 'Tháng 3',
    dataIndex: 'march',
    key: 'march',
  },
  {
    title: 'Tháng 4',
    dataIndex: 'april',
    key: 'april',
  },
  {
    title: 'Tháng 5',
    dataIndex: 'may',
    key: 'may',
  },
  {
    title: 'Tháng 6',
    dataIndex: 'june',
    key: 'june',
  },
  {
    title: 'Tháng 7',
    dataIndex: 'july',
    key: 'july',
  },
  {
    title: 'Tháng 8',
    dataIndex: 'august',
    key: 'august',
  },
  {
    title: 'Tháng 9',
    dataIndex: 'september',
    key: 'september',
  },
  {
    title: 'Tháng 10',
    dataIndex: 'october',
    key: 'october',
  },
  {
    title: 'Tháng 11',
    dataIndex: 'november',
    key: 'november',
  },
  {
    title: 'Tháng 12',
    dataIndex: 'december',
    key: 'december',
  },
];

const dataMonth: DataTypeMonth[] = [
  {
    key: '1',
    month: 'OB dự toán - WS (VNĐ)' ,
    january: '',
    february: '',
    march: '',
    april: '',
    may: '',
    june: '',
    july: '',
    august: '',
    september: '',
    october: '',
    november: '',
    december: '',
  },
  {
    key: '2',
    month: 'OB dự toán - RS' ,
    january: '',
    february: '',
    march: '',
    april: '',
    may: '',
    june: '',
    july: '',
    august: '',
    september: '',
    october: '',
    november: '',
    december: '',
  },
  {
    key: '3',
    month: 'OB dự toán - Stock (VNĐ)' ,
    january: '',
    february: '',
    march: '',
    april: '',
    may: '',
    june: '',
    july: '',
    august: '',
    september: '',
    october: '',
    november: '',
    december: '',
  }
];

const index = () => {
  useEffect(()=>{
    titleStore
  },[titleStore])
  return (
    <Layout className="originalBudget-Detail">
      <Row>
        <Col span={24}>
          <h3 className="originalBudget-Detail-Title">Bảng dự toán danh thu cả năm</h3>
        </Col>
        <Col className="originalBudget-Detail-Descriptions" span={24}>
          <Descriptions items={items} />
        </Col>
        <Col className="originalBudget-Detail-Table" span={24}>
          <Table
            columns={columnsPrecious}
            dataSource={dataPrecious}
            bordered={true}  
            pagination={false}
            scroll={{ x: 500 }}
          />
        </Col>
        <Col className="originalBudget-Detail-Table" span={24}>
          <Table
            columns={columnsMonth}
            dataSource={dataMonth}
            bordered={true}
            pagination={false}
            scroll={{ x: 500 }}
          />
        </Col>
        <Col>
          <ModalChar />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h3 className="originalBudget-Detail-Title">Bảng forecast</h3>
        </Col>
      </Row>
    </Layout>
  );
};

// export default index;
export default inject(Stores.TitleStore)(observer(index));
