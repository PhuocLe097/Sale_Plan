import { Avatar, Button, Card, Form, FormInstance, Input, Select, Space } from 'antd';
import { memo, useEffect, useState } from 'react';
import { Connection, Handle, Node, NodeProps, Position, useStoreApi } from 'reactflow';
import './flowStyle.css';
import { CloseOutlined } from '@ant-design/icons';
import HandleExtensions from '../handleExtensions';
import NoteTemplate from '../nodeTemplate';
import React from 'react';
import { debounce } from 'lodash';

type RuleNodeType = Node<NodeData>;

type NodeData = {
  index: number;
  ruleName: string;
  operator: string;
  ruleCost: number;
  ruleType: number;
  successEvent: string;
  onDelete: (e: any) => void;
  onSava: (e: any) => void;
};

function RuleNodeModel({ data }: NodeProps<NodeData>) {
  const store = useStoreApi();
  const [isSaving, setIsSaving] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(data);
  }, [data, form]);

  // mỗi rule chỉ được trỏ đến 1 condition
  const isValidConnection = (connection: Connection) => {
    const { edges } = store.getState();
    var currentEdges = edges.filter(
      (item) => item.source === connection.source && item.targetHandle === connection.targetHandle
    );
    if (currentEdges.length > 0) {
      return false;
    }

    return HandleExtensions.isValidConnection(connection);
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const handleValuesChange = (changedValues: any, allValues: any) => {
    setIsSaving(true);
    data.ruleName = allValues.ruleName;
    data.operator = allValues.operator;
    data.ruleCost = allValues.ruleCost;
    data.ruleType = allValues.ruleType;
    data.successEvent = allValues.successEvent;
    setIsSaving(false);
    console.log('debouncedHandleValuesChange', data.operator);
  };

  return (
    <Card title="Rule" className="custom-node" style={{ width: '100%', height: '100%' }}>
      <Space className="card-close" onClick={data.onDelete}>
        <CloseOutlined className="card-close--icon" />{' '}
      </Space>

      <Form {...layout} form={form} onValuesChange={handleValuesChange}>
        <Form.Item label="Rule Name" name="ruleName" required>
          <Input placeholder="enter rule name" />
        </Form.Item>
        <Form.Item label="Rule Type" name="ruleType" required>
          <Select
          >
               <Select.Option value="0">Single</Select.Option>
               <Select.Option value="10">MultiLevel</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Rule cost" name="ruleCost" required>
          <Input placeholder="default 1" />
        </Form.Item>
        <Form.Item label="Operator" name="operator" required>
          <Input placeholder="And | Or | Not | Xor" />
        </Form.Item>
        <Form.Item label="Success Event" name="successEvent" required>
          <Input placeholder="Success Event" />
        </Form.Item>
        <Form.Item label="Index" name="index" required>
          <Input placeholder="1" />
        </Form.Item>
      </Form>

      <Handle
        id={`${HandleExtensions.prefixCondition}-handle-source`}
        className="handle handle--condition-handler"
        type="source"
        onDragEnd={HandleExtensions.onDragEnd}
        isValidConnection={isValidConnection}
        position={Position.Right}
        style={{ top: '45%' }}
      >
        <Space className="handle-space-rule">Condition</Space>
      </Handle>

      <Handle
        id={`${HandleExtensions.prefixRule}-handle`}
        className="handle handle--rule-handler"
        type="source"
        isValidConnection={HandleExtensions.isValidConnection}
        position={Position.Right}
        style={{ top: '65%' }}
      >
        <Space className="handle-space-rule">Rule</Space>
      </Handle>
      <Handle
        id={`${HandleExtensions.prefixRule}-handle-${data.index}`}
        className="handle handle--rule"
        type="target"
        isValidConnection={HandleExtensions.isValidConnection}
        position={Position.Top}
      >
        <Space className="handle-space-rule">Rule</Space>
      </Handle>

      <Handle
        id={`${HandleExtensions.prefixAction}-handle-${data.index}`}
        className="handle handle--action"
        type="source"
        isValidConnection={HandleExtensions.isValidConnection}
        position={Position.Bottom}
      >
        <Space className="handle-space-rule">Action</Space>
      </Handle>
    </Card>
  );
}

export default RuleNodeModel;
