import { Card, Form, Input, Space, Spin } from 'antd';
import { Handle, Node, NodeProps, Position } from 'reactflow';
import './flowStyle.css';
import { CloseOutlined, DeleteOutlined, DeleteRowOutlined, SaveOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import HandleExtensions from '../handleExtensions';
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
type ConditionNodeType = Node<NodeData>;

type NodeData = {
  condition: string;
  onDelete: () => void;
  onSava: () => void;
};

function TextNodeModel({ data }: NodeProps<NodeData>) {
  const [dataValue, setDataValue] = useState(data.condition);
  const [isSaving, setIsSaving] = useState(false);
  useEffect(() => {
  }, []);


  const debouncedHandleValuesChange = debounce((value: string) => {
    // Set a flag to indicate that we're currently saving
    setIsSaving(true);
    data.condition = value;
    // After saving, unset the flag to allow further saves
    setIsSaving(false);
  }, 100); // Set the debounce delay to 1000ms (1 second)

  const onChange = (e: any) => {
    setDataValue(e.target.value);
    debouncedHandleValuesChange(e.target.value);
  };


  return (
    <Space direction="vertical" size={20} className="custom-node condition-node">
      <Card title={`Condition`} className='condition-card'>
        <Space className='card-close' onClick={data.onDelete}><CloseOutlined className='card-close--icon' /> </Space>
        <Handle
          id={`${HandleExtensions.prefixCondition}-handle-target`}
          className="handle handle--condidion" type="target" position={Position.Left}
          isValidConnection={HandleExtensions.isValidConnection}>
        </Handle>
      
        <TextArea
          rows={3}
          className='card-input' placeholder="condition" value={dataValue} onChange={onChange} />
      </Card>
    </Space>
  );
}

export default TextNodeModel;
