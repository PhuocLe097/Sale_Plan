import { Avatar, Button, Card, Form, Input, Select, Space } from 'antd';
import { memo, useEffect, useState } from 'react';
import {
  Connection,
  Handle,
  Node,
  NodeProps,
  Position,
  useStoreApi,
} from 'reactflow';
import './flowStyle.css';
import {
  CloseOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import HandleExtensions from '../handleExtensions';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/snippets/json';

type NodeData = {
  name: string;
  context: string;
  index: number;
  onDelete: (e: any) => void;
  onSava: (e: any) => void;
};

type ActionNodeType = Node<NodeData>;
const OPTIONS = [
  'CombineAction',
  'DebtPromotionAction',
  'DiscountPromotionAction',
  'GiftPromotionAction',
  'PremiumPromotionAction',
  'ProductFailAction',
];

const initJson = {
  expression: "string",
};

const ActionNodeModel = ({ data }: NodeProps<NodeData>) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([data.name]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  const [json, setJson] = useState<string>( JSON.stringify(data.context ?? initJson , null, 3));
  const [isError, setIsError] = useState(false);
  const store = useStoreApi();
  
  useEffect(() => {
    if (data.context == null || data.context == undefined) {
      var value = JSON.stringify(initJson, null, 3);
      data.context =   JSON.parse(value);
    }
  }, []);
  const isValidConnection = (connection: Connection) => {
    const { edges } = store.getState();
    var currentEdges = edges.filter((item) => item.source === connection.source && item.targetHandle === connection.targetHandle);
    if (currentEdges.length > 0) {
      return false;
    }

    return HandleExtensions.isValidConnection(connection);
  };

  const onJsonChange = (value: any) => {
    setJson(value);

    try {
      JSON.parse(value);
      data.context = JSON.parse(value);
      setIsError(false);
    } catch (e) {
      setIsError(true);
    }
  };

  const handleChange = (value: string) => {
    data.name = value;
    setSelectedItems([value]);
  };

  return (
    <Card
      title="Action"

      className={`custom-node ${isError ? 'custom-node--error' : ''}`}
      style={{ width: '100%', height: '100%' }}
    >
      <Space className='card-close' onClick={data.onDelete}><CloseOutlined className='card-close--icon' /> </Space>
      <Form>
        <Form.Item label="Name" required>
          <Select
            placeholder="Inserted are removed"
            value={selectedItems}
            onChange={(value) => { 
              handleChange(value.toString());
            }}
            options={filteredOptions.map((item) => ({
              value: item,
              label: item,
            }))}
          />
        </Form.Item>

        <Form.Item label="Context" required>

          
          <AceEditor
            mode="json"
            theme="github"
            value={json}
            maxLines={30}
            minLines={5}
            onChange={onJsonChange}
            setOptions={{
              useWorker: false,
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: false,
              enableSnippets: false,
            }}
          />
        </Form.Item>
      </Form>

      <Handle
        id={`${HandleExtensions.prefixAction}-handle-${data.index}`}
        className="handle handle--action"
        type="target"
        isValidConnection={isValidConnection}
        position={Position.Top}
      >
        <Space className="handle-space-rule">Action</Space>
      </Handle>
    </Card>
  );
};

export default ActionNodeModel;
