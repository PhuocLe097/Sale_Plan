import type { DatePickerProps } from 'antd';
import {
  Button,
  Col,
  DatePicker,
  Form,
  GetRef,
  Input,
  InputNumber,
  Layout,
  Row,
  Space,
  Table
} from 'antd';
import { TableProps } from 'antd/lib';
import moment from 'moment';
import React, { useContext, useEffect, useRef, useState } from 'react';
type InputRef = GetRef<typeof Input>;
type FormInstance<T> = GetRef<typeof Form<T>>;
const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
  key: string;
  name: string;
  decemberLastYearEdit?: number;
  januaryEdit: number;
  februaryEdit: number;
  marchEdit: number;
  aprilEdit: number;
  mayEdit: number;
  juneEdit: number;
  julyEdit: number;
  augustEdit: number;
  septemberEdit: number;
  octoberEdit: number;
  novemberEdit: number;
  decemberEdit: number;
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
  let monthNow =  moment().month()


  if (editable && (record.name == 'WS' || record.name == 'RS')) {
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
        <InputNumber
          style={{ width: '100%' }}
          formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
          ref={inputRef}
          onPressEnter={save}
          onBlur={save}
        />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24, paddingLeft: 0 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;
//-------------------------------------------------------------------------- data and column table -----------------------------------------------------------

interface dataChildrenEdit {
  key: string;
  name: string;
  idChillren?: string;
  decemberLastYearEdit?: number;
  januaryEdit: number;
  februaryEdit: number;
  marchEdit: number;
  aprilEdit: number;
  mayEdit: number;
  juneEdit: number;
  julyEdit: number;
  augustEdit: number;
  septemberEdit: number;
  octoberEdit: number;
  novemberEdit: number;
  decemberEdit: number;
}
interface DataTypeMonth {
  key: string;
  name: string;
  decemberLastYear?: number | string;
  january: number | string;
  february: number | string;
  march: number | string;
  april: number | string;
  may: number | string;
  june: number | string;
  july: number | string;
  august: number | string;
  september: number | string;
  october: number | string;
  november: number | string;
  december: number | string;
  dataChillren?: DataTypeMonth[];
  dataChildrenEdit?: dataChildrenEdit[];
}
const FormatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US').format(num);
};
const columnsMonth: TableProps<any>['columns'] = [
  {
    title: '',
    dataIndex: 'name',
    key: 'name',
    render: (data: number) => (
      <span>
        <b className="Table-columns-name">{data}</b>
      </span>
    ),
  },
  {
    title: 'WS Tháng 12 Last year',
    dataIndex: 'decemberLastYear',
    key: 'decemberLastYear',
    render: (data: number) => (
      <span>
        <b className="Table-valueColor"> {FormatNumber(data)}</b>
      </span>
    ),
  },
  {
    title: 'WS Tháng 1',
    dataIndex: 'january',
    key: 'january',
    render: (data: number) => (
      <span>
        <b className="Table-valueColor"> {FormatNumber(data)}</b>
      </span>
    ),
  },
  {
    title: 'WS Tháng 2',
    dataIndex: 'february',
    key: 'february',
    render: (data: number) => (
      <span>
        <b className="Table-valueColor"> {FormatNumber(data)}</b>
      </span>
    ),
  },
  {
    title: 'WS Tháng 3',
    dataIndex: 'march',
    key: 'march',
    render: (data: number) => (
      <span>
        <b className="Table-valueColor"> {FormatNumber(data)}</b>
      </span>
    ),
  },
  {
    title: 'WS Tháng 4',
    dataIndex: 'april',
    key: 'april',
    render: (data: number) => (
      <span>
        <b className="Table-valueColor"> {FormatNumber(data)}</b>
      </span>
    ),
  },
  {
    title: 'WS Tháng 5',
    dataIndex: 'may',
    key: 'may',
    render: (data: number) => (
      <span>
        <b className="Table-valueColor"> {FormatNumber(data)}</b>
      </span>
    ),
  },
  {
    title: 'WS Tháng 6',
    dataIndex: 'june',
    key: 'june',
    render: (data: number) => (
      <span>
        <b className="Table-valueColor"> {FormatNumber(data)}</b>
      </span>
    ),
  },
  {
    title: 'WS Tháng 7',
    dataIndex: 'july',
    key: 'july',
    render: (data: number) => (
      <span>
        <b className="Table-valueColor"> {FormatNumber(data)}</b>
      </span>
    ),
  },
  {
    title: 'WS Tháng 8',
    dataIndex: 'august',
    key: 'august',
    render: (data: number) => (
      <span>
        <b className="Table-valueColor"> {FormatNumber(data)}</b>
      </span>
    ),
  },
  {
    title: 'WS Tháng 9',
    dataIndex: 'september',
    key: 'september',
    render: (data: number) => (
      <span>
        <b className="Table-valueColor"> {FormatNumber(data)}</b>
      </span>
    ),
  },
  {
    title: 'WS Tháng 10',
    dataIndex: 'october',
    key: 'october',
    render: (data: number) => (
      <span>
        <b className="Table-valueColor"> {FormatNumber(data)}</b>
      </span>
    ),
  },
  {
    title: 'WS Tháng 11',
    dataIndex: 'november',
    key: 'november',
    render: (data: number) => (
      <span>
        <b className="Table-valueColor"> {FormatNumber(data)}</b>
      </span>
    ),
  },
  {
    title: 'WS Tháng 12',
    dataIndex: 'december',
    key: 'december',
    render: (data: number) => (
      <span>
        <b className="Table-valueColor"> {FormatNumber(data)}</b>
      </span>
    ),
  },
];

//-------------------------------------------------------------------------- data and column table -----------------------------------------------------------
const target = () => {
  const numberColumnMoth = 100 / columnsMonth.length + '%';
  const ColumnsMonthChilren = columnsMonth?.map((item: any) => ({
    ...item,
    width: numberColumnMoth, 
  }));
  let editableData = [];
  for (let index = moment().month(); index < 6; index++) {
    editableData.push(index)    
  }
  const [editable, setEditale] = useState<any>(editableData)
  const onChange: DatePickerProps['onChange'] = (date :any, dateString :any) => {
    let editableSetData=[]
    let numberDate = moment(dateString).month()
    let numberSetdate =  numberDate + 5
    for (numberDate; numberDate < numberSetdate; numberDate++) {
      editableSetData.push(numberDate)    
    }    
    setEditale(editableSetData)    
  };

  const [dataSource, setDataSource] = useState<DataTypeMonth[]>([
    {
      key: '1',
      name: 'Camera hành trình',
      decemberLastYear: 20000000,
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
      decemberLastYear: 18000000,
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
          decemberLastYear: '',
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
          dataChildrenEdit: [
            {
              key: '1',
              name: 'WS',
              idChillren: 'qeqweqweqw',
              decemberLastYearEdit: 0,
              januaryEdit: 0,
              februaryEdit: 0,
              marchEdit: 0,
              aprilEdit: 0,
              mayEdit: 0,
              juneEdit: 0,
              julyEdit: 0,
              augustEdit: 0,
              septemberEdit: 0,
              octoberEdit: 0,
              novemberEdit: 0,
              decemberEdit: 0,
            },
            {
              key: '2',
              name: 'RS',
              idChillren: 'qeqweqsweqw',
              decemberLastYearEdit: 0,
              januaryEdit: 0,
              februaryEdit: 0,
              marchEdit: 0,
              aprilEdit: 0,
              mayEdit: 0,
              juneEdit: 0,
              julyEdit: 0,
              augustEdit: 0,
              septemberEdit: 0,
              octoberEdit: 0,
              novemberEdit: 0,
              decemberEdit: 0,
            },
            {
              key: '3',
              name: 'RSO',
              idChillren: 'qeqweqkweqw',
              decemberLastYearEdit: 0,
              januaryEdit: 0,
              februaryEdit: 0,
              marchEdit: 0,
              aprilEdit: 0,
              mayEdit: 0,
              juneEdit: 0,
              julyEdit: 0,
              augustEdit: 0,
              septemberEdit: 0,
              octoberEdit: 0,
              novemberEdit: 0,
              decemberEdit: 0,
            },
            {
              key: '4',
              name: 'Stock',
              idChillren: 'qeqeqw',
              decemberLastYearEdit: 0,
              januaryEdit: 0,
              februaryEdit: 0,
              marchEdit: 0,
              aprilEdit: 0,
              mayEdit: 0,
              juneEdit: 0,
              julyEdit: 0,
              augustEdit: 0,
              septemberEdit: 0,
              octoberEdit: 0,
              novemberEdit: 0,
              decemberEdit: 0,
            },
          ],
        },
        {
          key: '2',
          name: 'Hud H1N',
          decemberLastYear: '',
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
          dataChildrenEdit: [
            {
              key: '1',
              name: 'WS',
              idChillren: 'qeasaaseqw',
              decemberLastYearEdit: 0,
              januaryEdit: 0,
              februaryEdit: 0,
              marchEdit: 0,
              aprilEdit: 0,
              mayEdit: 0,
              juneEdit: 0,
              julyEdit: 0,
              augustEdit: 0,
              septemberEdit: 0,
              octoberEdit: 0,
              novemberEdit: 0,
              decemberEdit: 0,
            },
            {
              key: '2',
              name: 'RS',
              idChillren: 'qeqwsssseqweqw',
              decemberLastYearEdit: 0,
              januaryEdit: 0,
              februaryEdit: 0,
              marchEdit: 0,
              aprilEdit: 0,
              mayEdit: 0,
              juneEdit: 0,
              julyEdit: 0,
              augustEdit: 0,
              septemberEdit: 0,
              octoberEdit: 0,
              novemberEdit: 0,
              decemberEdit: 0,
            },
            {
              key: '3',
              name: 'RSO',
              idChillren: 'czczczczc',
              decemberLastYearEdit: 0,
              januaryEdit: 0,
              februaryEdit: 0,
              marchEdit: 0,
              aprilEdit: 0,
              mayEdit: 0,
              juneEdit: 0,
              julyEdit: 0,
              augustEdit: 0,
              septemberEdit: 0,
              octoberEdit: 0,
              novemberEdit: 0,
              decemberEdit: 0,
            },
            {
              key: '4',
              name: 'Stock',
              idChillren: 'qeqwesssssqw',
              decemberLastYearEdit: 0,
              januaryEdit: 0,
              februaryEdit: 0,
              marchEdit: 0,
              aprilEdit: 0,
              mayEdit: 0,
              juneEdit: 0,
              julyEdit: 0,
              augustEdit: 0,
              septemberEdit: 0,
              octoberEdit: 0,
              novemberEdit: 0,
              decemberEdit: 0,
            },
          ],
        },
        {
          key: '3',
          name: 'Thiết bị cảm biến áp xuất lốp, H2AS HUD',
          decemberLastYear: '',
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
          dataChildrenEdit: [
            {
              key: '1',
              name: 'WS',
              idChillren: 'qessdjksweqw',
              decemberLastYearEdit: 0,
              januaryEdit: 0,
              februaryEdit: 0,
              marchEdit: 0,
              aprilEdit: 0,
              mayEdit: 0,
              juneEdit: 0,
              julyEdit: 0,
              augustEdit: 0,
              septemberEdit: 0,
              octoberEdit: 0,
              novemberEdit: 0,
              decemberEdit: 0,
            },
            {
              key: '2',
              name: 'RS',
              idChillren: 'qeqskladfjaeqw',
              decemberLastYearEdit: 0,
              januaryEdit: 0,
              februaryEdit: 0,
              marchEdit: 0,
              aprilEdit: 0,
              mayEdit: 0,
              juneEdit: 0,
              julyEdit: 0,
              augustEdit: 0,
              septemberEdit: 0,
              octoberEdit: 0,
              novemberEdit: 0,
              decemberEdit: 0,
            },
            {
              key: '3',
              name: 'RSO',
              idChillren: 'qieieqw',
              decemberLastYearEdit: 0,
              januaryEdit: 0,
              februaryEdit: 0,
              marchEdit: 0,
              aprilEdit: 0,
              mayEdit: 0,
              juneEdit: 0,
              julyEdit: 0,
              augustEdit: 0,
              septemberEdit: 0,
              octoberEdit: 0,
              novemberEdit: 0,
              decemberEdit: 0,
            },
            {
              key: '4',
              name: 'Stock',
              idChillren: 'qseqweqw',
              decemberLastYearEdit: 0,
              januaryEdit: 0,
              februaryEdit: 0,
              marchEdit: 0,
              aprilEdit: 0,
              mayEdit: 0,
              juneEdit: 0,
              julyEdit: 0,
              augustEdit: 0,
              septemberEdit: 0,
              octoberEdit: 0,
              novemberEdit: 0,
              decemberEdit: 0,
            },
          ],
        },
      ],
    },
    {
      key: '3',
      name: 'Android box',
      decemberLastYear: 22000000,
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
      decemberLastYear: 10000000,
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
  ]);
  const defaultColumns1: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
      width: numberColumnMoth,
      render: (data: number) => (
        <span>
          <b>{data}</b>
        </span>
      ),
    },
    {
      title: 'Tháng 12 Last year',
      dataIndex: 'decemberLastYearEdit',
      key: 0,
      width: numberColumnMoth,
      // editable: editable,
      render: (data: number) => <span>{FormatNumber(data)}</span>,
    },
    {
      title: 'WS Tháng 1',
      dataIndex: 'januaryEdit',
      key: 1,
      width: numberColumnMoth,
      // editable: editable,
      render: (data: number) => <span>{FormatNumber(data)}</span>,
    },
    {
      title: 'Tháng 2',
      dataIndex: 'februaryEdit',
      key: 2,
      width: numberColumnMoth,
      // editable: editable,
      render: (data: number) => <span>{FormatNumber(data)}</span>,
    },
    {
      title: 'Tháng 3',
      dataIndex: 'marchEdit',
      key: 3,
      width: numberColumnMoth,
      // editable: editable,
      render: (data: number) => <span>{FormatNumber(data)}</span>,
    },
    {
      title: 'Tháng 4',
      dataIndex: 'aprilEdit',
      key: 4,
      width: numberColumnMoth,
      // editable: editable,
      render: (data: number) => <span>{FormatNumber(data)}</span>,
    },
    {
      title: 'Tháng 5',
      dataIndex: 'mayEdit',
      key: 5,
      width: numberColumnMoth,
      // editable: editable,
      render: (data: number) => <span>{FormatNumber(data)}</span>,
    },
    {
      title: 'Tháng 6',
      dataIndex: 'juneEdit',
      key: 6,
      width: numberColumnMoth,
      // editable: editable,
      render: (data: number) => <span>{FormatNumber(data)}</span>,
    },
    {
      title: 'Tháng 7',
      dataIndex: 'julyEdit',
      key: 7,
      width: numberColumnMoth,
      // editable: editable,
      render: (data: number) => <span>{FormatNumber(data)}</span>,
    },
    {
      title: 'Tháng 8',
      dataIndex: 'augustEdit',
      key:8,
      width: numberColumnMoth,
      // editable: editable,
      render: (data: number) => <span>{FormatNumber(data)}</span>,
    },
    {
      title: 'Tháng 9',
      dataIndex: 'septemberEdit',
      key: 9,
      width: numberColumnMoth,
      // editable: editable,
      render: (data: number) => <span>{FormatNumber(data)}</span>,
    },
    {
      title: 'Tháng 10',
      dataIndex: 'octoberEdit',
      key: 10,
      width: numberColumnMoth,
      // editable: editable,
      render: (data: number) => <span>{FormatNumber(data)}</span>,
    },
    {
      title: 'Tháng 11',
      dataIndex: 'novemberEdit',
      key:11,
      width: numberColumnMoth,
      // editable: editable,
      render: (data: number) => <span>{FormatNumber(data)}</span>,
    },
    {
      title: 'Tháng 12',
      dataIndex: 'decemberEdit',
      key: 12,
      width: numberColumnMoth,
      // editable: editable,
      render: (data: number) => <span>{FormatNumber(data)}</span>,
    },
  ];

  const defaultColumns = defaultColumns1?.map((item: any) => ({
    ...item,
    editable: editable.includes(item.key) 
  }));
  
  const handleSave = (row: dataChildrenEdit) => {
    const newData: DataTypeMonth[] = [...dataSource];
    newData.forEach((items: DataTypeMonth) => {
      items.dataChillren?.forEach((item: DataTypeMonth) => {
        if (item.dataChildrenEdit) {
          const dataChillrenEdit: dataChildrenEdit[] = [...item.dataChildrenEdit];
          const index: number = dataChillrenEdit.findIndex(
            (child: dataChildrenEdit) => child.idChillren === row?.idChillren
          );
          if (index !== -1) {
            const updatedItem: dataChildrenEdit = { ...dataChillrenEdit[index], ...row };
            dataChillrenEdit.splice(index, 1, updatedItem);
          }
          item.dataChildrenEdit = dataChillrenEdit;
        }
      });
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
      onCell: (record: DataTypeMonth) => ({
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
        <Col span={12}>
          <Space direction="vertical" size={12}>
            <DatePicker onChange={onChange} />
          </Space>
        </Col>
        <Col span={12} className="salePlan-Detail-Target-header-btn">
          <Button className="salePlan-Detail-Target-header-btn-item Button-Save" type="primary">
            Lưu lại
          </Button>
          <Button className="salePlan-Detail-Target-header-btn-item" type="primary">
            Tạo số target
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h3 className="salePlan-Detail-Title">Bảng forecast Sales Plan</h3>
        </Col>
        <Col className="salePlan-Detail-Table" span={24}>
          <Table
            columns={columnsMonth}
            dataSource={dataSource}
            bordered={true}
            rowClassName="salePlan-Detail-Table-row"
            pagination={false}
            scroll={{ x: 500 }}
            expandable={{
              expandedRowRender: (record) => (
                <Table
                  columns={ColumnsMonthChilren}
                  // showHeader={false}
                  rowClassName="salePlan-Detail-Table-row-chillren"
                  bordered
                  dataSource={record.dataChillren}
                  pagination={false}
                  expandable={{
                    expandedRowRender: (record) => (
                      <Table
                        columns={columns as ColumnTypes}
                        dataSource={record.dataChildrenEdit}
                        components={components}
                        showHeader={false}
                        bordered
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
    </Layout>
  );
};
export default target;
