import { Col, Descriptions, Layout, Row, Table, TableColumnsType } from 'antd';
import React, { useState } from 'react';
import GenericTable from '../../../components/Table';

const columnsTableChillren: TableColumnsType<any> = [
  {
    title: '',
    dataIndex: 'name',
    key: 'name',
    // fixed: 'left',
    // render: (data: string) => (
    //   <span>
    //     <b>{data}</b>
    //   </span>
    // ),
  },
  {
    title: <p className="table-title">Actual MTD</p>,
    dataIndex: 'actualMtd',
    key: 'actualMtd',
  },
  {
    title: <p className="table-title">OB this month</p>,
    dataIndex: 'obThisMonth',
    key: 'obThisMonth',
  },
  {
    title: <p className="table-title">Target WS</p>,
    dataIndex: 'targetWs',
    key: 'targetWs',
  },
  {
    title: <p className="table-title">Forecast WS</p>,
    dataIndex: 'forecasrtWs',
    key: 'forecasrtWs',
  },
  {
    title: <p className="table-title">Actual QTD</p>,
    dataIndex: 'actualQtd',
    key: 'actualQtd',
  },
  {
    title: <p className="table-title">OB this quarter</p>,
    dataIndex: 'obThisQuarter',
    key: 'obThisQuarter',
  },
  {
    title: <p className="table-title">Target WS</p>,
    dataIndex: 'targetWs3Month',
    key: 'targetWs3Month',
  },
];

const columnsTable: TableColumnsType<any> = [
  {
    title: '',
    dataIndex: 'name',
    key: 'name',
    // width: 200,
    // fixed: 'left',
    // render: (data: string) => (
    //     data
    // ),
  },
  {
    title: 'Tháng',
    children: [
      {
        title: <p className="table-title">Actual MTD</p>,
        dataIndex: 'actualMtd',
        key: 'actualMtd',
      },
      {
        title: <p className="table-title">OB this month</p>,
        dataIndex: 'obThisMonth',
        key: 'obThisMonth',
      },
      {
        title: <p className="table-title">Target WS</p>,
        dataIndex: 'targetWs',
        key: 'targetWs',
      },
      {
        title: <p className="table-title">Forecast WS</p>,
        dataIndex: 'forecasrtWs',
        key: 'forecasrtWs',
      },
    ],
  },
  {
    title: 'Quý',
    children: [
      {
        title: <p className="table-title">Actual QTD</p>,
        dataIndex: 'actualQtd',
        key: 'actualQtd',
      },
      {
        title: <p className="table-title">OB this quarter</p>,
        dataIndex: 'obThisQuarter',
        key: 'obThisQuarter',
      },
      {
        title: <p className="table-title">Target WS</p>,
        dataIndex: 'targetWs3Month',
        key: 'targetWs3Month',
      },
    ],
  },
];

interface DataTypeTable {
  key: React.Key;
  name: string;
  actualMtd: string;
  obThisMonth: string;
  targetWs: string;
  forecasrtWs: string;
  actualQtd: string;
  obThisQuarter: string;
  targetWs3Month: string;
  dataChildren?: DataTypeTable[];
}
const dataTable1: DataTypeTable[] = [
  {
    key: '1',
    name: 'Total Amount (VNĐ)',
    actualMtd: '',
    obThisMonth: '',
    targetWs: '',
    forecasrtWs: '',
    actualQtd: '',
    obThisQuarter: '',
    targetWs3Month: '',
  },
];

const dataTable2: DataTypeTable[] = [
  {
    key: '1',
    name: 'Camera hành trình',
    actualMtd: '',
    obThisMonth: '',
    targetWs: '',
    forecasrtWs: '',
    actualQtd: '',
    obThisQuarter: '',
    targetWs3Month: '',
  },
  {
    key: '2',
    name: 'HUD',
    actualMtd: '',
    obThisMonth: '',
    targetWs: '',
    forecasrtWs: '',
    actualQtd: '',
    obThisQuarter: '',
    targetWs3Month: '',
    dataChildren: [
      {
        key: '1',
        name: 'Hud H1N',
        actualMtd: '',
        obThisMonth: '',
        targetWs: '',
        forecasrtWs: '',
        actualQtd: '',
        obThisQuarter: '',
        targetWs3Month: '',
        dataChildren: [
          {
            key: '1',
            name: 'Total Amount (VNĐ)',
            actualMtd: '',
            obThisMonth: '',
            targetWs: '',
            forecasrtWs: '',
            actualQtd: '',
            obThisQuarter: '',
            targetWs3Month: '',
          },
          {
            key: '2',
            name: 'Total volume',
            actualMtd: '',
            obThisMonth: '',
            targetWs: '',
            forecasrtWs: '',
            actualQtd: '',
            obThisQuarter: '',
            targetWs3Month: '',
          },
        ],
      },
      {
        key: '2',
        name: 'Hud H1N',
        actualMtd: '',
        obThisMonth: '',
        targetWs: '',
        forecasrtWs: '',
        actualQtd: '',
        obThisQuarter: '',
        targetWs3Month: '',
        dataChildren: [
          {
            key: '1',
            name: 'Total Amount (VNĐ)',
            actualMtd: '',
            obThisMonth: '',
            targetWs: '',
            forecasrtWs: '',
            actualQtd: '',
            obThisQuarter: '',
            targetWs3Month: '',
          },
          {
            key: '2',
            name: 'Total volume',
            actualMtd: '',
            obThisMonth: '',
            targetWs: '',
            forecasrtWs: '',
            actualQtd: '',
            obThisQuarter: '',
            targetWs3Month: '',
          },
        ],
      },
      {
        key: '3',
        name: 'Thiết bị cảm biến áp xuất lốp, H2AS HUD',
        actualMtd: '',
        obThisMonth: '',
        targetWs: '',
        forecasrtWs: '',
        actualQtd: '',
        obThisQuarter: '',
        targetWs3Month: '',
        dataChildren: [
          {
            key: '1',
            name: 'Total Amount (VNĐ)',
            actualMtd: '',
            obThisMonth: '',
            targetWs: '',
            forecasrtWs: '',
            actualQtd: '',
            obThisQuarter: '',
            targetWs3Month: '',
          },
          {
            key: '2',
            name: 'Total volume',
            actualMtd: '',
            obThisMonth: '',
            targetWs: '',
            forecasrtWs: '',
            actualQtd: '',
            obThisQuarter: '',
            targetWs3Month: '',
          },
        ],
      },
    ],
  },
  {
    key: '3',
    name: 'Android box',
    actualMtd: '',
    obThisMonth: '',
    targetWs: '',
    forecasrtWs: '',
    actualQtd: '',
    obThisQuarter: '',
    targetWs3Month: '',
    dataChildren: [
      {
        key: '1',
        name: 'Hud H1N',
        actualMtd: '',
        obThisMonth: '',
        targetWs: '',
        forecasrtWs: '',
        actualQtd: '',
        obThisQuarter: '',
        targetWs3Month: '',
      },
      {
        key: '2',
        name: 'Hud H1N',
        actualMtd: '',
        obThisMonth: '',
        targetWs: '',
        forecasrtWs: '',
        actualQtd: '',
        obThisQuarter: '',
        targetWs3Month: '',
      },
      {
        key: '3',
        name: 'Thiết bị cảm biến áp xuất lốp, H2AS HUD',
        actualMtd: '',
        obThisMonth: '',
        targetWs: '',
        forecasrtWs: '',
        actualQtd: '',
        obThisQuarter: '',
        targetWs3Month: '',
      },
    ],
  },
  {
    key: '4',
    name: 'Bơm lốp - kích bình',
    actualMtd: '',
    obThisMonth: '',
    targetWs: '',
    forecasrtWs: '',
    actualQtd: '',
    obThisQuarter: '',
    targetWs3Month: '',
  },
];
const Overview = () => {
  const numberColumn = 100 / columnsTableChillren.length + '%';
  const columnsTableChillren1 = columnsTableChillren?.map((item: any) => ({
    ...item,
    width: numberColumn,
  }));

  return (
    <Layout className="salePlan-Detail-Overview">
      <Row>
        <Col span={24}>
          <h3 className="salePlan-Detail-Title">
            Bảng theo dõi mức độ hoàn thành (tất cả sản phẩm và tất cả khách hàng)
          </h3>
        </Col>
        <Col className="salePlan-Detail-Table" span={24}>
          <Table
            columns={columnsTable}
            dataSource={dataTable1}
            bordered={true}
            pagination={false}
            scroll={{ x: 500 }}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h3 className="salePlan-Detail-Title">
            Bảng theo dõi mức độ hoàn thành (theo mã sản phẩm)
          </h3>
        </Col>
        <Col className="salePlan-Detail-Table" span={24}>
          {/* <Table
            columns={columnsTable}
            dataSource={dataTable2}
            rowClassName='salePlan-Detail-Table-row'  
            bordered={true}
            pagination={false}
            scroll={{ x: 500 }}
            expandable={{
              expandedRowRender: (record) => (
                <Table
                  columns={columnsTableChillren1}
                  // showHeader={false}
                  rowClassName='salePlan-Detail-Table-row-chillren'
                  bordered
                  dataSource={record.dataChildren}
                  pagination={false}                  
                  expandable={{                                        
                    expandedRowRender: (record) => (
                      <Table
                        columns={columnsTableChillren1}
                        showHeader={false}
                        bordered
                        dataSource={record.dataChildren}
                        pagination={false}                    
                      />
                    ),
                  }}
                />
              ),
            }}
          /> */}
          <GenericTable
            dataTable={dataTable1}
            columnsTable={columnsTable}
            // columnsTableChildren={columnsTableChillren1}
            // dataSearch={dataSearch}
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default Overview;
