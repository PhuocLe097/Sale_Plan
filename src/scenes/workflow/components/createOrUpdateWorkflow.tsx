import { Form, FormInstance, Modal, Select, Tabs } from 'antd';
import FlowTypeStore from '../../../stores/flowTypeStore';
import TabPane from 'antd/es/tabs/TabPane';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';

interface ICreateOrUpdateWorkflowProps {
  visible: boolean;
  modalType: string;
  flowTypeStore: FlowTypeStore;
  formRef: React.RefObject<FormInstance>;
  workflowId: number;
  onCancel: () => void;
  onOk: () => void;
}

interface ICreateOrUpdateWorkflowState {

}


class CreateOrUpdateWorkflow extends React.Component<ICreateOrUpdateWorkflowProps, ICreateOrUpdateWorkflowState> {
  render() {
    return (
      <Modal
        open={this.props.visible}
        cancelText="Cancel"
        okText="OK"
        onCancel={this.props.onCancel}
        title={this.props.modalType === 'create' ? 'Create Workflow' : 'Update Workflow'}
        onOk={this.props.onOk}
        destroyOnClose={true}
      >
        <Form ref={this.props.formRef}>
          <Tabs defaultActiveKey={'role'} size={'small'} tabBarGutter={64}>
            <TabPane tab={'Workflow'} key={'Workflow'}>
              <Form.Item label="Description" name={'description'}>
                <TextArea
                  placeholder={'Description'}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  rows={3}
                />
              </Form.Item>
            </TabPane>
            <TabPane tab={'Deals'} key={'Deals'}>
              <Form.Item label="Deals code" name={'dealsCode'}>
                <Select mode="multiple" allowClear style={{ width: '100%' }} placeholder="Please select" disabled={this.props.workflowId !== 0} >
                  {
                    this.props.flowTypeStore.deals?.map((deal) => {
                      return (
                        <Select.Option key={deal?.dealsCode} value={deal?.dealsCode}>{deal?.dealsCode}</Select.Option>
                      )
                    })
                  }
                </Select>
              </Form.Item>
            </TabPane>
          </Tabs>
        </Form>
      </Modal>
    );
  }
}

export default CreateOrUpdateWorkflow;
