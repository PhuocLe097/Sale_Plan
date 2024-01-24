import React, { useState } from 'react';
import { Button, Form, Input, Modal, Select, Space } from 'antd';
import { LinkOutlined, PlusCircleOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd';
import { xor } from 'lodash';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

interface MapWorkflowDeals {
  ListdealsMap?: any;
  listWorkflow?: any;
  handleMap: (value: any) => void;
  promotionDetail?: any;
  nameBtn?: any;
  TitleModal?: any;
  deals?: any;
}

const MapWorkflowDeals: React.FC<MapWorkflowDeals> = ({ ...props }) => {
  const { ListdealsMap, listWorkflow, handleMap, promotionDetail, nameBtn, TitleModal, deals } =
    props;
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [connectDealsToPromotion, setConnectDealsToPromotion] = useState({});

  const SubmitButton = ({ form }: { form: FormInstance }) => {
    const [submittable, setSubmittable] = React.useState(false);
    const values = Form.useWatch([], form);

    React.useEffect(() => {
      form.validateFields({ validateOnly: true }).then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
    }, [values]);

    return (
      <Button
        type="primary"
        htmlType="submit"
        onClick={handleSave}
        disabled={!submittable}
      >
        Save
      </Button>
    );
  };

  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
    form.resetFields();
  };
  const handleSave = async () => {
   await handleMap(connectDealsToPromotion);
    setOpen(false);
    form.resetFields();
  };
  // -----------------------------------------------------------------------------------------------------------------------------------

  const optionListDeals =
    ListdealsMap &&
    ListdealsMap.filter(
      (filter: any, index: number) =>
        !(
          promotionDetail &&
          promotionDetail?.deals.find((x: any) => x.dealsCode == filter.dealsCode)
        )
    ).map((item: any, index: number) => ({
      label: item.dealsCode,
      value: item.id,
    }));

    const optionListWorkflow =
    listWorkflow &&
    listWorkflow.filter(
      (filter: any, index: number) =>
        !(
          deals?.workflows &&
          deals?.workflows.find((x: any) => x.id == filter.id)
        )
    ).map((item: any, index: number) => ({
      label: item.description,
      value: item.id,
    }));

  const onChnageConnectDeals = (value: any) => {
    setConnectDealsToPromotion({
      promotionId: promotionDetail?.id,
      dealsId: value,
    });
  };
  const onchangeWorkflow = (value: any) => {
    setConnectDealsToPromotion({
      dealsId: deals?.id,
      workflowId: value,
    });
  };
  return (
    <>
      {nameBtn == 'Connect-Deals' ? (
        <Button block className="btn-connectdeals" onClick={showModal}>
          <LinkOutlined />
          Connect Deals
        </Button>
      ) : (
        <Button type="primary" ghost onClick={showModal}>
          <PlusCircleOutlined />
        </Button>
      )}

      <Modal
        title={TitleModal}
        open={open}
        onOk={() => handleMap(JSON.stringify(form.getFieldsValue(), null, 2))}
        onCancel={handleCancel}
        footer=""
        okText="Save"
      >
        <Form
          {...layout}
          form={form}
          name="validateOnly"
          labelAlign="left"
          labelWrap
          wrapperCol={{ flex: 1 }}
        >
          {nameBtn == 'Connect-Deals' ? (
            <>
              <Form.Item label="Promotion">
                <Input placeholder="promotion name" disabled defaultValue={promotionDetail?.name} />
              </Form.Item>
              <Form.Item name="dealsId" label="Deals" rules={[{ required: true }]}>
                <Select
                  placeholder="Select Deals"
                  allowClear
                  onChange={onChnageConnectDeals}
                  options={optionListDeals}
                />
              </Form.Item>
              <Form.Item className="Btn-modal">
                <Space>
                  <Button htmlType="reset" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <SubmitButton form={form} />
                </Space>
              </Form.Item>
            </>
          ) : (
            <>
              <Form.Item name="dealsId" label="Deals">
                <Input placeholder="Deals name" disabled defaultValue={deals?.dealsCode} />
              </Form.Item>
              <Form.Item name="workfrowId" label="Workfrow" rules={[{ required: true }]}>
                <Select
                  placeholder="Select Workflow"
                  allowClear
                  onChange={onchangeWorkflow}
                  options={
                    optionListWorkflow
                  }
                />
              </Form.Item>
              <Form.Item className="Btn-modal">
                <Space>
                  <Button htmlType="reset" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <SubmitButton form={form} />
                </Space>
              </Form.Item>
            </>
          )}
        </Form>
      </Modal>
    </>
  );
};

export default MapWorkflowDeals;
