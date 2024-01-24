import { Card, Space } from 'antd';
import {
  Connection,
  Handle,
  Node,
  NodeProps,
  Position,
  useStoreApi,
} from 'reactflow';
import AceEditor from 'react-ace';
import { useEffect, useState } from 'react';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/snippets/json';
import { CloseOutlined } from '@ant-design/icons';
import HandleExtensions from '../handleExtensions';

type NodeData = {
 
  cart: string;
  onDelete: (e: any) => void;
  onSava: (e: any) => void;
};

type InputNodeType = Node<NodeData>;

const initJson = {
  totalOrder: 0,
  promotionId: 0,
  orderDate: '2023-10-26T06:50:34.962Z',
  reference: {
    additionalProp1: 'string',
    additionalProp2: 'string',
    additionalProp3: 'string',
  },
  partyId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  products: [
    'string'
  ],
  evaluateFilterModel: {
    promotionName: 'string',
    workflowName: 'string',
    workflowDescription: 'string',
    ruleName: 'string',
    showFail: true,
    workflowReference: 'string'
  }
};

const InputNodeModel = ({ data }: NodeProps<NodeData>) => {
  const [isError, setIsError] = useState(false);
  const [json, setJson] = useState<string>(JSON.stringify(data.cart ?? initJson, null, 3));
  const store = useStoreApi();

  useEffect(() => {
    if (data.cart == null || data.cart == undefined) {
      var value = JSON.stringify(initJson, null, 3);
      data.cart =   JSON.parse(value);
    }
  }, []);
  const onJsonChange = (value: any) => {
    setJson(value);
    try {
      JSON.parse(value);
      data.cart = JSON.parse(value);
      setIsError(false);
    } catch (e) {
      setIsError(true);
    }
  };

  const isValidConnection = (connection: Connection) => {
    const { edges } = store.getState();
    var currentEdges = edges.filter((item) => item.source === connection.source && item.targetHandle === connection.targetHandle);
    if (currentEdges.length > 0) {
      return false;
    }

    return HandleExtensions.isValidConnection(connection);
  };



  return (
    <Card className={`custom-node ${isError ? 'custom-node--error' : ''}`} title={`Cart`}   >

      <Space className='card-close' onClick={data.onDelete}><CloseOutlined className='card-close--icon' /> </Space>
      <AceEditor
        mode='json'
        theme='github'
        value={json}
        maxLines={30}
        minLines={10}
        onChange={onJsonChange}
        setOptions={{
          useWorker: false,
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
        }}
      />

      <Handle
        id={`${HandleExtensions.prefixInput}-handle-source`}
        className="handle handle--cart" type="source" position={Position.Right}
        isValidConnection={isValidConnection}>
      </Handle>
    </Card>
  );
};

export default InputNodeModel;
