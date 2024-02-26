import { Button, Col, Form, GetRef, Input, Layout, Row, Table, Tag } from 'antd';
import { TableProps } from 'antd/lib';
import React, { useContext, useEffect, useRef, useState } from 'react';
type InputRef = GetRef<typeof Input>;
type FormInstance<T> = GetRef<typeof Form<T>>;

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
  key: string;
  chillrenEditname: string;
  chillrenEditprecious1: string;
  chillrenEditprecious2: string;
  chillrenEditprecious3: string;
  chillrenEditprecious4: string;
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

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;
//-------------------------------------------------------------------------- data and column table -----------------------------------------------------------
interface preciousChillrenEdit {
  key: string;
  idChillren?: string;
  chillrenEditname: string;
  chillrenEditprecious1: string;
  chillrenEditprecious2: string;
  chillrenEditprecious3: string;
  chillrenEditprecious4: string;
}
interface DataType {
  key: string;
  name: string;
  id?: string;
  precious1: string;
  precious2: string;
  precious3: string;
  precious4: string;
  preciousChillren?: DataType[];
  preciousChillrenEdit?: preciousChillrenEdit[];
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
//-------------------------------------------------------------------------- data and column table -----------------------------------------------------------
const target = () => {
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

  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: '1',
      name: 'Hud H1N',
      id: 'a',
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
      preciousChillrenEdit: [
        {
          key: '1',
          idChillren: 'kasdjhfkasj',
          chillrenEditname: 'WS',
          chillrenEditprecious1: 'quyen',
          chillrenEditprecious2: '1',
          chillrenEditprecious3: '1',
          chillrenEditprecious4: '1',
        },
        {
          key: '2',
          idChillren: 'kasdjhfkassssj',
          chillrenEditname: 'RS',
          chillrenEditprecious1: '',
          chillrenEditprecious2: '',
          chillrenEditprecious3: '',
          chillrenEditprecious4: '',
        },
        {
          key: '3',
          idChillren: 'kasdjhfkaahasj',
          chillrenEditname: 'RSO',
          chillrenEditprecious1: '',
          chillrenEditprecious2: '',
          chillrenEditprecious3: '',
          chillrenEditprecious4: '',
        },
        {
          key: '4',
          idChillren: 'kasdjhfskaahasj',
          chillrenEditname: 'Stock',
          chillrenEditprecious1: '',
          chillrenEditprecious2: '',
          chillrenEditprecious3: '',
          chillrenEditprecious4: '',
        },
      ],
    },
    {
      key: '2',
      name: 'Hud H1x',
      id: 'b',
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
      preciousChillrenEdit: [
        {
          key: '1',
          idChillren: 'kasdjhahasj',
          chillrenEditname: 'WS',
          chillrenEditprecious1: 'quyen',
          chillrenEditprecious2: '1',
          chillrenEditprecious3: '1',
          chillrenEditprecious4: '1',
        },
        {
          key: '2',
          idChillren: 'ksdjhfkaahasj',
          chillrenEditname: 'RS',
          chillrenEditprecious1: '',
          chillrenEditprecious2: '',
          chillrenEditprecious3: '',
          chillrenEditprecious4: '',
        },
        {
          key: '3',
          idChillren: 'kasdjhfsskaahasj',
          chillrenEditname: 'RSO',
          chillrenEditprecious1: '',
          chillrenEditprecious2: '',
          chillrenEditprecious3: '',
          chillrenEditprecious4: '',
        },
        {
          key: '4',
          idChillren: 'kasj',
          chillrenEditname: 'Stock',
          chillrenEditprecious1: '',
          chillrenEditprecious2: '',
          chillrenEditprecious3: '',
          chillrenEditprecious4: '',
        },
      ],
    },
    {
      key: '3',
      name: 'Thiết bị cảm biến áp suất lốp, H2AS HUD',
      id: 'c',
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
      preciousChillrenEdit: [
        {
          key: '1',
          idChillren: 'kasdjhfkaah',
          chillrenEditname: 'WS',
          chillrenEditprecious1: 'quyen',
          chillrenEditprecious2: '1',
          chillrenEditprecious3: '1',
          chillrenEditprecious4: '1',
        },
        {
          key: '2',
          idChillren: 'djhfkaahasj',
          chillrenEditname: 'RS',
          chillrenEditprecious1: '',
          chillrenEditprecious2: '',
          chillrenEditprecious3: '',
          chillrenEditprecious4: '',
        },
        {
          key: '3',
          idChillren: 'kasdjhfkasj',
          chillrenEditname: 'RSO',
          chillrenEditprecious1: '',
          chillrenEditprecious2: '',
          chillrenEditprecious3: '',
          chillrenEditprecious4: '',
        },
        {
          key: '4',
          idChillren: 'kasdjj',
          chillrenEditname: 'Stock',
          chillrenEditprecious1: '',
          chillrenEditprecious2: '',
          chillrenEditprecious3: '',
          chillrenEditprecious4: '',
        },
      ],
    },
    {
      key: '4',
      name: 'Hud H1AS (ngoài)',
      id: 'd',
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
      preciousChillrenEdit: [
        {
          key: '1',
          idChillren: 'khfkaahasj',
          chillrenEditname: 'WS',
          chillrenEditprecious1: 'quyen',
          chillrenEditprecious2: '1',
          chillrenEditprecious3: '1',
          chillrenEditprecious4: '1',
        },
        {
          key: '2',
          idChillren: 'kasdkaahasj',
          chillrenEditname: 'RS',
          chillrenEditprecious1: '',
          chillrenEditprecious2: '',
          chillrenEditprecious3: '',
          chillrenEditprecious4: '',
        },
        {
          key: '3',
          idChillren: 'kasdjhfppppasj',
          chillrenEditname: 'RSO',
          chillrenEditprecious1: '',
          chillrenEditprecious2: '',
          chillrenEditprecious3: '',
          chillrenEditprecious4: '',
        },
        {
          key: '4',
          idChillren: 'kasdjhfkaaj',
          chillrenEditname: 'Stock',
          chillrenEditprecious1: '',
          chillrenEditprecious2: '',
          chillrenEditprecious3: '',
          chillrenEditprecious4: '',
        },
      ],
    },
  ]);
  const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
    {
      title: 'chillrenEditname',
      dataIndex: 'chillrenEditname',
      width: numberColumnPrecious,
    },
    {
      title: 'Quý 1',
      dataIndex: 'chillrenEditprecious1',
      editable: true,
      width: numberColumnPrecious,
    },
    {
      title: 'Quý 2',
      dataIndex: 'chillrenEditprecious2',
      editable: true,
      width: numberColumnPrecious,
    },
    {
      title: 'Quý 3',
      dataIndex: 'chillrenEditprecious3',
      editable: true,
      width: numberColumnPrecious,
    },
    {
      title: 'Quý 4',
      dataIndex: 'chillrenEditprecious4',
      editable: true,
      width: numberColumnPrecious,
    },
  ];
  const handleSave = (row: preciousChillrenEdit) => {
    const newData: DataType[] = [...dataSource];

    newData.forEach((item: DataType) => {
      if (item.preciousChillrenEdit) {
        const preciousChillrenEdit: preciousChillrenEdit[] = [...item.preciousChillrenEdit];
        const index: number = preciousChillrenEdit.findIndex(
          (child: preciousChillrenEdit) => child.idChillren === row?.idChillren
        );
        if (index !== -1) {
          const updatedItem: preciousChillrenEdit = { ...preciousChillrenEdit[index], ...row };
          preciousChillrenEdit.splice(index, 1, updatedItem);
        }
        item.preciousChillrenEdit = preciousChillrenEdit;
      }
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
            Yêu cầu duyệt
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
            Bảng target theo quý theo số lượng từng sản phẩm
          </h3>
        </Col>
        <Col className="salePlan-Detail-Table" span={24}>
          <Table
            columns={columnsTableChillrenPrecious}
            dataSource={dataSource}
            bordered={true}
            pagination={false}
            rowClassName="salePlan-Detail-Table-row"
            scroll={{ x: 500 }}
            expandable={{
              expandedRowRender: (record) => (
                <Table
                  components={components}
                  dataSource={record.preciousChillrenEdit}
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
