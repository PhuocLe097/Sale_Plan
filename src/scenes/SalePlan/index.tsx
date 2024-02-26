import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { Badge, Dropdown, Space, Table } from 'antd';
import SelectSearch from '../../components/SelectSearch';
import GenericTable from '../../components/Table';
import PageHeading from '../../components/PageHeading';

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

interface ExpandedDataType {
  key: React.Key;
  date: string;
  name: string;
  upgradeNum: string;
}

const items = [
  { key: '1', label: 'Action 1' },
  { key: '2', label: 'Action 2' },
];

const SalePlan = () => {
  const expandedRowRender = () => {
    const columns: TableColumnsType<ExpandedDataType> = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      {
        title: 'Status',
        key: 'state',
        render: () => <Badge status="success" text="Finished" />,
      },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown menu={{ items }}>
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columnsTableChildren = [
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

  const columnsTable = [
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

  const dataTable: DataTypeTable[] = [
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
      dataChildren: [
        {
          key: '4',
          name: 'Camera H1N',
          actualMtd: '',
          obThisMonth: '',
          targetWs: '',
          forecasrtWs: '',
          actualQtd: '',
          obThisQuarter: '',
          targetWs3Month: '',
          dataChildren: [
            {
              key: '7',
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
              key: '8',
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
          key: '5',
          name: 'Camera SDF',
          actualMtd: '',
          obThisMonth: '',
          targetWs: '',
          forecasrtWs: '',
          actualQtd: '',
          obThisQuarter: '',
          targetWs3Month: '',
          dataChildren: [
            {
              key: '9',
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
              key: '10',
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
          key: '6',
          name: 'Thiết bị cảm biến áp xuất lốp, H2AS Camera',
          actualMtd: '',
          obThisMonth: '',
          targetWs: '',
          forecasrtWs: '',
          actualQtd: '',
          obThisQuarter: '',
          targetWs3Month: '',
          dataChildren: [
            {
              key: '11',
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
              key: '12',
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
          key: '13',
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
              key: '16',
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
              key: '17',
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
          key: '14',
          name: 'Hud SDF',
          actualMtd: '',
          obThisMonth: '',
          targetWs: '',
          forecasrtWs: '',
          actualQtd: '',
          obThisQuarter: '',
          targetWs3Month: '',
          dataChildren: [
            {
              key: '18',
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
              key: '19',
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
          key: '15',
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
              key: '20',
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
              key: '21',
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
          key: '23',
          name: 'Android box H1N',
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
          key: '24',
          name: 'Android box H2CV',
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
          key: '25',
          name: 'Thiết bị Android box',
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
      key: '4',
      name: 'Bơm lốp - kích bình',
      actualMtd: '',
      obThisMonth: '',
      targetWs: '',
      forecasrtWs: '',
      actualQtd: '',
      obThisQuarter: '',
      targetWs3Month: '',
      dataChildren: [
        {
          key: '26',
          name: 'Bơm lốp - kích bình H1N',
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
          key: '27',
          name: 'Bơm lốp - kích bình CTX',
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
          key: '28',
          name: 'Thiết bị Bơm lốp AAA',
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
  ];

  const dataSearch = [
    {
      value: 'Camera H1N',
      label: 'Camera H1N',
    },
    {
      value: 'Camera SDF',
      label: 'Camera SDF',
    },
    {
      value: 'Thiết bị cảm biến áp xuất lốp, H2AS Camera',
      label: 'H2AS Camera',
    },
    {
      value: 'Hud H1N',
      label: 'Hud H1N',
    },
    {
      value: 'Hud SDF',
      label: 'Hud SDF',
    },
    {
      value: 'Thiết bị cảm biến áp xuất lốp, H2AS HUD',
      label: 'H2AS HUD',
    },
    {
      value: 'Android box H1N',
      label: 'Android box H1N',
    },
    {
      value: 'Android box H2CV',
      label: 'Android box H2CV',
    },
    {
      value: 'Thiết bị Android box',
      label: 'Thiết bị Android box',
    },
    {
      value: 'Bơm lốp - kích bình H1N',
      label: 'Bơm lốp - kích bình H1N',
    },
    {
      value: 'Bơm lốp - kích bình CTX',
      label: 'Bơm lốp - kích bình CTX',
    },
    {
      value: 'Thiết bị Bơm lốp AAA',
      label: 'Thiết bị Bơm lốp AAA',
    },
  ];

  return (
    <>
      <PageHeading content="Bảng taget theo tháng theo số lượng của từng dòng sản phẩm" />
      <GenericTable
        dataTable={dataTable}
        columnsTable={columnsTable}
        columnsTableChildren={columnsTableChildren}
        dataSearch={dataSearch}
      />
    </>
  );
};

export default SalePlan;
