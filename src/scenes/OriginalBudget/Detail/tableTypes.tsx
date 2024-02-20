import type { TableProps } from 'antd';

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
    month: 'OB dự toán - WS (VNĐ)',
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
    month: 'OB dự toán - RS',
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
    month: 'OB dự toán - Stock (VNĐ)',
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
];

export { columnsPrecious, dataPrecious, columnsMonth, dataMonth };
