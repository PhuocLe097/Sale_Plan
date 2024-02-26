import { Button, Col, DescriptionsProps, Form, Input, Layout, Row, Table, Tag } from 'antd';
import type { GetRef } from 'antd';
import { TableProps } from 'antd/lib';
import React, { useContext, useEffect, useRef, useState } from 'react';
type InputRef = GetRef<typeof Input>;
type FormInstance<T> = GetRef<typeof Form<T>>;

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
  key: string;
  name: string;
  age: string;
  address: string;
}
interface EditableRowProps {
  index: number;
}
const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Item;
  record: Item;
  handleSave: (record: Item) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current!;
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();

      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

interface DataTypeEdit {
  key: React.Key;
  name: string;
  age: string;
  address: string;
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;
//-------------------------------------------------------------------------- data and column table -----------------------------------------------------------
interface DataType {
  key: string;
  name: string;
  precious1: string;
  precious2: string;
  precious3: string;
  precious4: string;
  preciousChillren?: DataType[];
}
interface DataTypeMonth {
  key: string;
  name: string;
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
  dataChillren?: DataTypeMonth[];
}
const dataTableMonth: DataTypeMonth[] = [
  {
    key: '1',
    name: 'Camera hành trình',
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
    name: 'HUD',
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
    dataChillren: [
      {
        key: '1',
        name: 'Hud H1N',
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
        dataChillren: [
          {
            key: '1',
            name: 'WS',
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
            name: 'RS',
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
            name: 'RSO',
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
            key: '4',
            name: 'Stock',
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
        ],
      },
      {
        key: '2',
        name: 'Hud H1N',
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
        dataChillren: [
          {
            key: '1',
            name: 'WS',
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
            name: 'RS',
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
            name: 'RSO',
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
            key: '4',
            name: 'Stock',
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
        ],
      },
      {
        key: '3',
        name: 'Thiết bị cảm biến áp xuất lốp, H2AS HUD',
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
        dataChillren: [
          {
            key: '1',
            name: 'WS',
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
            name: 'RS',
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
            name: 'RSO',
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
            key: '4',
            name: 'Stock',
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
        ],
      },
    ],
  },
  {
    key: '3',
    name: 'Android box',
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
    key: '4',
    name: 'Bơm lốp - kích bình',
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
const columnsMonth: TableProps<any>['columns'] = [
  {
    title: '',
    dataIndex: 'name',
    // dataIndex: 'precious',
    key: 'name',
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
const columnsPrecious: TableProps<DataType>['columns'] = [
  {
    title: '',
    dataIndex: 'name',
    key: 'name',
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
    name: 'Camera hành trình',
    precious1: '',
    precious2: '',
    precious3: '',
    precious4: '',
  },
  {
    key: '2',
    name: 'HUD',
    precious1: '',
    precious2: '',
    precious3: '',
    precious4: '',
    preciousChillren: [
      {
        key: '1',
        name: 'Hud H1N',
        precious1: '',
        precious2: '',
        precious3: '',
        precious4: '',
        preciousChillren: [
          {
            key: '1',
            name: 'WS',
            precious1: '',
            precious2: '',
            precious3: '',
            precious4: '',
          },
          {
            key: '2',
            name: 'RS',
            precious1: '',
            precious2: '',
            precious3: '',
            precious4: '',
          },
          {
            key: '3',
            name: 'RSO',
            precious1: '',
            precious2: '',
            precious3: '',
            precious4: '',
          },
          {
            key: '4',
            name: 'Stock',
            precious1: '',
            precious2: '',
            precious3: '',
            precious4: '',
          },
        ],
      },
      {
        key: '2',
        name: 'Hud H1x',
        precious1: '',
        precious2: '',
        precious3: '',
        precious4: '',
        preciousChillren: [
          {
            key: '1',
            name: 'WS',
            precious1: '',
            precious2: '',
            precious3: '',
            precious4: '',
          },
          {
            key: '2',
            name: 'RS',
            precious1: '',
            precious2: '',
            precious3: '',
            precious4: '',
          },
          {
            key: '3',
            name: 'RSO',
            precious1: '',
            precious2: '',
            precious3: '',
            precious4: '',
          },
          {
            key: '4',
            name: 'Stock',
            precious1: '',
            precious2: '',
            precious3: '',
            precious4: '',
          },
        ],
      },
      {
        key: '3',
        name: 'Thiết bị cảm biến áp suất lốp, H2AS HUD',
        precious1: '',
        precious2: '',
        precious3: '',
        precious4: '',
        preciousChillren: [
          {
            key: '1',
            name: 'WS',
            precious1: '',
            precious2: '',
            precious3: '',
            precious4: '',
          },
          {
            key: '2',
            name: 'RS',
            precious1: '',
            precious2: '',
            precious3: '',
            precious4: '',
          },
          {
            key: '3',
            name: 'RSO',
            precious1: '',
            precious2: '',
            precious3: '',
            precious4: '',
          },
          {
            key: '4',
            name: 'Stock',
            precious1: '',
            precious2: '',
            precious3: '',
            precious4: '',
          },
        ],
      },
      {
        key: '4',
        name: 'Hud H1AS (ngoài)',
        precious1: '',
        precious2: '',
        precious3: '',
        precious4: '',
        preciousChillren: [
          {
            key: '1',
            name: 'WS',
            precious1: '',
            precious2: '',
            precious3: '',
            precious4: '',
          },
          {
            key: '2',
            name: 'RS',
            precious1: '',
            precious2: '',
            precious3: '',
            precious4: '',
          },
          {
            key: '3',
            name: 'RSO',
            precious1: '',
            precious2: '',
            precious3: '',
            precious4: '',
          },
          {
            key: '4',
            name: 'Stock',
            precious1: '',
            precious2: '',
            precious3: '',
            precious4: '',
          },
        ],
      },
    ],
  },
  {
    key: '3',
    name: 'Android box',
    precious1: '',
    precious2: '',
    precious3: '',
    precious4: '',
  },
  {
    key: '4',
    name: 'Bơm lốp - kích bình',
    precious1: '',
    precious2: '',
    precious3: '',
    precious4: '',
  },
];
//-------------------------------------------------------------------------- data and column table -----------------------------------------------------------
const target = () => {
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: '1',
      name: 'Hud H1N',
      precious1: 'aaaa',
      precious2: '',
      precious3: '',
      precious4: '',
      preciousChillren: [
        {
          key: '1',
          name: 'WS',
          precious1: '',
          precious2: '',
          precious3: '',
          precious4: '',
        },
        {
          key: '2',
          name: 'RS',
          precious1: '',
          precious2: '',
          precious3: '',
          precious4: '',
        },
        {
          key: '3',
          name: 'RSO',
          precious1: '',
          precious2: '',
          precious3: '',
          precious4: '',
        },
        {
          key: '4',
          name: 'Stock',
          precious1: '',
          precious2: '',
          precious3: '',
          precious4: '',
        },
      ],
    },
    {
      key: '2',
      name: 'Hud H1x',
      precious1: '',
      precious2: '',
      precious3: '',
      precious4: '',
      preciousChillren: [
        {
          key: '1',
          name: 'WS',
          precious1: '',
          precious2: '',
          precious3: '',
          precious4: '',
        },
        {
          key: '2',
          name: 'RS',
          precious1: '',
          precious2: '',
          precious3: '',
          precious4: '',
        },
        {
          key: '3',
          name: 'RSO',
          precious1: '',
          precious2: '',
          precious3: '',
          precious4: '',
        },
        {
          key: '4',
          name: 'Stock',
          precious1: '',
          precious2: '',
          precious3: '',
          precious4: '',
        },
      ],
    },
    {
      key: '3',
      name: 'Thiết bị cảm biến áp suất lốp, H2AS HUD',
      precious1: '',
      precious2: '',
      precious3: '',
      precious4: '',
      preciousChillren: [
        {
          key: '1',
          name: 'WS',
          precious1: '',
          precious2: '',
          precious3: '',
          precious4: '',
        },
        {
          key: '2',
          name: 'RS',
          precious1: '',
          precious2: '',
          precious3: '',
          precious4: '',
        },
        {
          key: '3',
          name: 'RSO',
          precious1: '',
          precious2: '',
          precious3: '',
          precious4: '',
        },
        {
          key: '4',
          name: 'Stock',
          precious1: '',
          precious2: '',
          precious3: '',
          precious4: '',
        },
      ],
    },
    {
      key: '4',
      name: 'Hud H1AS (ngoài)',
      precious1: '',
      precious2: '',
      precious3: '',
      precious4: '',
      preciousChillren: [
        {
          key: '1',
          name: 'WS',
          precious1: '',
          precious2: '',
          precious3: '',
          precious4: '',
        },
        {
          key: '2',
          name: 'RS',
          precious1: '',
          precious2: '',
          precious3: '',
          precious4: '',
        },
        {
          key: '3',
          name: 'RSO',
          precious1: '',
          precious2: '',
          precious3: '',
          precious4: '',
        },
        {
          key: '4',
          name: 'Stock',
          precious1: '',
          precious2: '',
          precious3: '',
          precious4: '',
        },
      ],
    },
  ]);

  const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
      editable: true,
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
      editable: true,
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
  const handleSave = (row: DataType) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  //-------------------------------------------------------------------------- func table -----------------------------------------------------------

  const numberColumnMoth = 100 / columnsMonth.length + '%';
  const columnsTableChillren = columnsMonth?.map((item: any) => ({
    ...item,
    width: numberColumnMoth,
  }));
  const numberColumnPrecious = 100 / columnsPrecious.length + '%';
  const columnsTableChillrenPrecious = columnsPrecious?.map((item: any) => ({
    ...item,
    width: numberColumnPrecious,
  }));
  return (
    <Layout className="salePlan-Detail-Target">
      <Row className="salePlan-Detail-Target-header">
        <Col span={12} style={{ margin: 'auto' }}>
          <span>Status: </span>
          <Tag bordered={false} color="processing">
            Chưa duyệt
          </Tag>
        </Col>
        <Col span={12} className="salePlan-Detail-Target-header-btn">
          <Button className="salePlan-Detail-Target-header-btn-item Button-Save" type="primary">
            Lưu lại
          </Button>
          <Button className="salePlan-Detail-Target-header-btn-item" type="primary">
            yêu cầu duyệt
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h3 className="salePlan-Detail-Title">
            Bảng target theo tháng theo số lượng của từng dòng sản phẩm
          </h3>
        </Col>
        <Col className="salePlan-Detail-Table" span={24}>
          <Table
            columns={columnsMonth}
            dataSource={dataTableMonth}
            bordered={true}
            rowClassName="salePlan-Detail-Table-row"
            pagination={false}
            scroll={{ x: 500 }}
            expandable={{
              expandedRowRender: (record) => (
                <Table
                  columns={columnsTableChillren}
                  // showHeader={false}
                  rowClassName="salePlan-Detail-Table-row-chillren"
                  bordered
                  dataSource={record.dataChillren}
                  pagination={false}
                  expandable={{
                    expandedRowRender: (record) => (
                      <Table
                        columns={columnsTableChillren}
                        showHeader={false}
                        bordered
                        dataSource={record.dataChillren}
                        pagination={false}
                      />
                    ),
                  }}
                />
              ),
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h3 className="salePlan-Detail-Title">
            bảng target theo quý theo số lượng từng sản phẩm
          </h3>
        </Col>
        <Col className="salePlan-Detail-Table" span={24}>
          <Table
            columns={columnsTableChillrenPrecious}
            // dataSource={dataPrecious}
            dataSource={dataSource}
            bordered={true}
            pagination={false}
            rowClassName="salePlan-Detail-Table-row"
            scroll={{ x: 500 }}
            expandable={{
              expandedRowRender: (record) => (
                <Table
                  // columns={columnsTableChillrenPrecious}
                  // dataSource={record.preciousChillren}
                  components={components}
                  dataSource={record.preciousChillren}
                  columns={columns as ColumnTypes}
                  showHeader={false}
                  bordered
                  pagination={false}
                />
              ),
            }}
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default target;
