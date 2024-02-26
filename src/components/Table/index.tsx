import { Table } from 'antd';
import React, { FC, useState } from 'react';
import type { TableColumnsType, TableProps } from 'antd';
import SelectSearch from '../SelectSearch';

type columnProps = {
  title: string | any;
  dataIndex: string;
  key: string;
  width?: number | string;
  fixed?: string;
  render?: any;
};
type searchProps = {
  label: string;
  value: string;
}[];
interface tableProps<T> {
  dataTable: T[] | undefined;
  columnsTable: TableColumnsType<columnProps>;
  columnsTableChildren?: TableColumnsType<columnProps>;
  // pagination?: (data: number) => void;
  pagination?: any;
  dataSearch?: searchProps;
  onSearch?: () => void;
  onOpenChart?: (id: string) => void;
  onClick?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
  style?: React.CSSProperties | undefined;
}

const GenericTable: FC<tableProps<any>> = ({
  dataTable: data,
  columnsTable,
  columnsTableChildren,
  pagination,
  dataSearch,
  onSearch,
  onOpenChart,
  style,
}) => {
  const [dataTable, setDataTable] = useState<Array<any> | undefined>(data);
  //// Phần table
  // Check xem data table có children không để hiện bảng con
  // + Data đang ở dạng array nên dùng `some`
  let isNotChildren =
    dataTable && dataTable.some((item: any) => !item.hasOwnProperty('dataChildren'));

  // Dùng TableProps của lib hỗ trợ đẻ đưa thông tin của expandable vào (nếu có)
  const expandableProp: TableProps<any> = isNotChildren
    ? {}
    : {
        expandable: {
          expandedRowRender: (record) => renderExpandedRow(record),
        },
      };

  // Hàm đệ quy dùng để check dữ liệu truyền vào có dataChildren không
  // + Nếu có thì tạo ra table con và gọi lại hàm đệ quy để kiểm tra lại
  // + Nếu ko thì set cho expandable không hiện bảng con và trả về null
  const renderExpandedRow = (record: any): React.ReactNode => {
    // Khởi tạo expandableProp với giá trị default
    // + Data đang ở dạng object nên dùng `record.dataChildren` chứ ko dùng some
    if (!record.dataChildren) {
      return null;
    }

    let expandableProp: TableProps<any> = {
      expandable: {
        expandedRowRender: (record) => renderExpandedRow(record), // Sử dụng đệ quy để tạo các expanded row
        rowExpandable: (record) => record.dataChildren, //nếu không có children thì ko hiện row
      },
    };

    return (
      <Table
        columns={columnsTableChildren ? columnsTableChildren : columnsTable}
        rowClassName="salePlan-Detail-Table-row-chillren"
        bordered
        dataSource={record.dataChildren}
        pagination={false}
        {...expandableProp}
      />
    );
  };

  // // Phần cho search
  const isShowSearch = !!dataSearch;

  const handleGetSearchValue = (keyword: string) => {
    if (keyword === undefined) {
      setDataTable(data);
      return;
    }

    let filteredData = dataTable?.find((product: any) =>
      product.dataChildren.find((item: any) => item.name === keyword)
    );
    setDataTable([filteredData]);
  };
  return (
    <div>
      {isShowSearch && (
        <SelectSearch
          SearchData={dataSearch}
          dataBack={handleGetSearchValue}
          style={{ width: '200px', marginBottom: 10 }}
          placeHolder="Tìm sản phẩm"
        />
      )}

      <Table
        columns={columnsTable}
        dataSource={dataTable}
        rowClassName="salePlan-Detail-Table-row"
        bordered={true}
        // pagination={false}
        scroll={{ x: 500 }}
        {...expandableProp}
      />
    </div>
  );
};

export default GenericTable;
