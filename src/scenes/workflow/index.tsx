import {
  Button,
  Card,
  Col,
  Drawer,
  Dropdown,
  Form,
  FormInstance,
  Menu,
  Modal,
  Pagination,
  Row,
  Space,
  Table,
} from 'antd';
import { inject, observer } from 'mobx-react';
import { ExclamationCircleOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons';
import './workflow.css';
import Stores from '../../stores/storeIdentifier';
import FlowTypeStore, { RecordType } from '../../stores/flowTypeStore';
import React, { useEffect, useRef, useState } from 'react';
import { EntityDto } from '../../services/dto/entityDto';
import CreateOrUpdateWorkflow from './components/createOrUpdateWorkflow';
import { useHistory } from 'react-router-dom';
import { WorkflowModel } from '../../services/promotionHandler/promotionHandler';
import { Input } from 'antd/lib';
import AppComponentBase from '../../components/AppComponentBase';

interface WorkflowProps {
  flowTypeStore: FlowTypeStore;
}

export interface IWorkflowState {
  modalVisible: boolean;
  maxResultCount: number;
  skipCount: number;
  keyword: string;
  workflowId: number;
  workflow?: WorkflowModel;
  open: boolean;
  mockData: RecordType[];
  targetKeys: string[];
}
const confirm = Modal.confirm;
const Search = Input.Search;

@inject(Stores.FlowTypeStore)
@observer
class Workflow extends AppComponentBase<WorkflowProps, IWorkflowState> {
  formRef = React.createRef<FormInstance>();
  state = {
    modalVisible: false,
    maxResultCount: 10,
    skipCount: 0,
    keyword: '',
    workflowId: 0,
    workflow: undefined,
    open: false,
    mockData: [],
    targetKeys: [],
  };

  async componentDidMount() {
    await this.getAll();
  }

  async getAll() {
    await this.props.flowTypeStore.getWorkflow({
      maxResultCount: this.state.maxResultCount,
      skipCount: this.state.skipCount,
      keyword: this.state.keyword,
    });
  }

  handleTableChange = (pagination: any) => {
    this.setState(
      { skipCount: (pagination.current - 1) * this.state.maxResultCount! },
      async () => await this.getAll()
    );
  };

  Modal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  async createOrUpdateModalOpen(entityDto: EntityDto) {
    if (entityDto.id === 0) {
      await this.props.flowTypeStore.CreateWorkflow();
    } else {
      await this.props.flowTypeStore.getWorkflowById(entityDto.id);
    }
    await this.props.flowTypeStore.getAllDeals({});

    this.setState({ workflowId: entityDto.id });
    this.Modal();

    setTimeout(() => {
      this.formRef.current?.setFieldsValue({ ...this.props.flowTypeStore.workflow });
    }, 100);
  }

  handleSearch = (value: string) => {
    this.setState({ keyword: value }, async () => await this.getAll());
  };

  handleCreate = () => {
    const form = this.formRef.current;
    form!.validateFields().then(async (values: any) => {
      await this.props.flowTypeStore.createWorkflowAsync(values);
      this.setState({ modalVisible: false });
      form!.resetFields();
      await this.getAll();
    });
  };

  public render() {
    const { workflows } = this.props.flowTypeStore;

    const goToFlow = (input: EntityDto) => {
      this.navigator(`/flow/${input.id}`);
    };
    const handleDelete = (input: EntityDto) => {

      confirm({
        title: 'Do you want to delete these items?',
        icon: <ExclamationCircleOutlined />,
        // content: 'When clicked the OK button',
        onOk: async () => {
          await this.props.flowTypeStore.deleteWorkflow(input.id);
          await this.getAll();
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    
    };
    const columns = [
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        width: 150,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: 'Deals Code',
        dataIndex: 'dealsCode',
        key: 'dealsCode',
        width: 150,
        render: (text: string[]) => (
          <>
            {text.map((item: string, index: number) => (
              <Space key={index} size={[8, 16]} wrap className="deals-code">
                <Button> {item} </Button>
              </Space>
            ))}
          </>
        ),
      },
      {
        title: 'Actions',
        width: '20px',
        render: (text: string, item: any) => (
          <Dropdown
            trigger={['click']}
            overlay={
              <Menu>
                {/* <Menu.Item onClick={() => this.createOrUpdateModalOpen({ id: item.id })}>
                  Edit
                </Menu.Item> */}
                <Menu.Item onClick={() => goToFlow({ id: item.id })}>Go to flow</Menu.Item>
                <Menu.Item style={{color: 'red'}} onClick={() => handleDelete({ id: item.id })}>Delete</Menu.Item>
              </Menu>
            }
            placement="bottomLeft"
          >
            <Button type="primary" icon={<SettingOutlined />}>
              Actions
            </Button>
          </Dropdown>
        ),
      },
    ];

    return (
      <Card className="c-workflow">
        <Row>
          <Col
            xs={{ span: 4, offset: 0 }}
            sm={{ span: 4, offset: 0 }}
            md={{ span: 4, offset: 0 }}
            lg={{ span: 2, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            xxl={{ span: 2, offset: 0 }}
          >
            <h2>Workflow</h2>
          </Col>
          <Col
            xs={{ span: 14, offset: 0 }}
            sm={{ span: 15, offset: 0 }}
            md={{ span: 15, offset: 0 }}
            lg={{ span: 1, offset: 21 }}
            xl={{ span: 1, offset: 21 }}
            xxl={{ span: 1, offset: 21 }}
          >
            <Button
              type="primary"
              shape="circle"
              icon={<PlusOutlined />}
              onClick={() => this.createOrUpdateModalOpen({ id: 0 })}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 10, offset: 0 }}>
            <Search placeholder="Filter" onSearch={async (e) => await this.handleSearch(e)} />
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}
            xl={{ span: 24, offset: 0 }}
            xxl={{ span: 24, offset: 0 }}
          >
            <Table
              className="table-responsive"
              rowKey="id"
              bordered={true}
              pagination={{
                pageSize: 10,
                total: workflows === undefined ? 0 : workflows.totalCount,
                defaultCurrent: 1,
              }}
              columns={columns}
              loading={workflows === undefined ? true : false}
              dataSource={workflows === undefined ? [] : (workflows.items as any[])}
              onChange={this.handleTableChange}
            />
          </Col>
        </Row>

        <CreateOrUpdateWorkflow
          formRef={this.formRef}
          visible={this.state.modalVisible}
          workflowId={this.state.workflowId}
          onCancel={() => {
            this.setState({
              modalVisible: false,
            });
            this.formRef.current?.resetFields();
          }}
          flowTypeStore={this.props.flowTypeStore}
          modalType={this.state.workflowId === 0 ? 'edit' : 'create'}
          onOk={this.handleCreate}
          key="bottom"
        ></CreateOrUpdateWorkflow>
      </Card>
    );
  }
}

export default Workflow;
