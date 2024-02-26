import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './index.css';
import type { TableProps } from 'antd';
import ModalChar from '../components/modalChar';
import { Button, Col, Descriptions, Layout, Row, Space, Table, Tag } from 'antd';
import type { DescriptionsProps } from 'antd';
import { columnsPrecious, dataPrecious, columnsMonth, dataMonth } from './tableTypes';
// const { id } = useParams<{ id: string }>();
// console.log("🚀 ~ id:", id

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

const OriginalDetail = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [elementWidth, setElementWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const newElementWidth = windowWidth * 0.9;
    setElementWidth(newElementWidth);
  }, [windowWidth]);

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
          <ModalChar chartWidth={elementWidth} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h3 className="originalBudget-Detail-Title">Bảng forecast</h3>
        </Col>
        <Col span={24}>
          {/* <Table
            className="reward-Table"
            loading={dataSource ? false : true}
            columns={columns}
            pagination={{ pageSize: 7 }}
            expandable={{
              expandedRowRender: (record) => (
                <Table
                  columns={columnsChilren}
                  dataSource={dataChilren(record.rewardColection)}
                  pagination={false}
                />
              ),
            }}
            dataSource={dataSource}
            scroll={{ x: 123.5 }}
          /> */}
        </Col>
      </Row>
    </Layout>
  );
};

export default OriginalDetail;
