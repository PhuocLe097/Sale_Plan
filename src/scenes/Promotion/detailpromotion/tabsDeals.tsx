import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Descriptions, Space, Table, Tabs, Tag, Tooltip } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import * as promotionHandler from '../../../services/promotionHandler/promotionHandler';
import * as catalogHandler from '../../../services/catalogHandler/catalogHandler';
import { NavLink, useParams } from 'react-router-dom';
import DeleteDeals from './DeleteModal';
import MapWorkflowDeals from './ConnectModal';
import './index.css';
import { inject, observer } from 'mobx-react';
import Stores from '../../../stores/storeIdentifier';
import PromotionStore from '../../../stores/promotionStore';
import productStore from '../../../stores/productStore';

interface tabDeals {
  item?: any;
  listWorkflow?: any;
  promotionStore?: PromotionStore;
  productStore?: productStore;
}

const TabsDeals: React.FC<tabDeals> = ({ ...props }) => {
  const { item, listWorkflow, promotionStore, productStore } = props;
  const { id } = useParams<{ id: string }>();
  const [addWorkflow, setAddWorkflow]: any = useState('1');

  const onChange = (value: string) => {
    setAddWorkflow(value);
  };

  const FormatNumber = (num: any) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const columns: ColumnsType<promotionHandler.WorkflowModel> = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: '70%',
      ellipsis: true,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: '25%',
      render: (_, record) => (
        <Space size="middle">
          <Tooltip
            style={{ cursor: 'pointer' }}
            placement="top"
            title="View Workflow"
            trigger="hover"
          >
            <NavLink
              to={{
                pathname: `/flow/${record.id}`,
                state: record.id,
              }}
            >
              <Button>
                <EyeOutlined />
              </Button>
            </NavLink>
          </Tooltip>
          <Tooltip
            style={{ cursor: 'pointer' }}
            placement="top"
            title="Delete workflow from deal"
            trigger="hover"
          >
            <DeleteDeals
              content={`workflow ${record.description}`}
              FuncDelete={deleteWorkflow}
              iconBtn={<DeleteOutlined />}
              dataDelete={{
                workflowId: record.id,
                dealsId: item.id,
              }}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const data =
    item?.workflows &&
    item?.workflows.map((wfItem: promotionHandler.WorkflowModel, index: any) => ({
      id: wfItem.id,
      description: wfItem.description,
    }));

  const deleteWorkflow = async (value: any) => {
    await promotionStore?.removeWorkflowToDeals(value);
    promotionStore?.getIdPromotion(id);
  };

  const ConnectWorkflow = async (value: any) => {
    await promotionStore?.mapWorkflowToDeals(value);
    promotionStore?.getIdPromotion(id);
  };

  const fieldRewardValue = (value: any) => {
    const valueName =
      productStore?.productModel &&
      productStore?.productModel
        .filter((item: catalogHandler.ProductModel) => item.id == value)
        .map((x: catalogHandler.ProductModel) => x.name);

    const productRelateds =
      productStore?.productModel &&
      productStore?.productModel
        .filter(
          (item: catalogHandler.ProductModel) =>
            item.productRelateds?.map((x: any) => x.id == value)
        )
        .map((y: catalogHandler.ProductModel) => y.name);

    return valueName?.length == 0 ? productRelateds : valueName;
  };

  return (
    <Tabs
      className="tabsDeals"
      onChange={onChange}
      tabBarExtraContent={
        addWorkflow != '1' ? (
          <Tooltip
            style={{ cursor: 'pointer' }}
            placement="top"
            title="Add workflow to deals"
            trigger="hover"
          >
            <MapWorkflowDeals
              handleMap={ConnectWorkflow}
              nameBtn="Connect-Workfrow"
              TitleModal="Connect Workflow To Deals"
              listWorkflow={listWorkflow}
              deals={item}
            />
          </Tooltip>
        ) : (
          ''
        )
      }
      size="small"
      items={new Array(2).fill(null).map((_, i) => {
        const id = String(i + 1);
        return {
          label: `${id == '1' ? 'Redeem' : 'Workflow'}`,
          key: id,
          children:
            id == '1' ? (
                <Descriptions
                  className="DealsRedeem-Descriptions"
                  contentStyle={{ maxWidth: 400 }}
                  items={[
                    {
                      key: '1',
                      label: 'Name',
                      children: (
                        <Tooltip
                          style={{ cursor: 'pointer' }}
                          placement="topLeft"
                          title={item?.redeemReward?.name}
                          trigger="hover"
                        >
                          {item?.redeemReward?.name}
                        </Tooltip>
                      ),
                      span: 3,
                    },
                    {
                      key: '2',
                      label: 'Reward',
                      children: item?.redeemReward?.rewardType,
                    },
                    {
                      key: '3',
                      label: 'Value',
                      children: (
                        <Tooltip
                          style={{ cursor: 'pointer' }}
                          placement="topLeft"
                          title={item?.redeemReward?.rewardType == 'Gift'
                          ? fieldRewardValue(item?.redeemReward?.value)
                          : item?.redeemReward?.rewardType == 'DiscountBonds'
                          ? item?.redeemReward?.value + '%'
                          : FormatNumber(item?.redeemReward?.value) + ' VNĐ'}
                          trigger="hover"
                        >
                          {item?.redeemReward?.rewardType == 'Gift'
                            ? fieldRewardValue(item?.redeemReward?.value)
                            : item?.redeemReward?.rewardType == 'DiscountBonds'
                            ? item?.redeemReward?.value + '%'
                            : FormatNumber(item?.redeemReward?.value) + ' VNĐ'}
                        </Tooltip>
                      ),

                      span: 3,
                    },
                    {
                      key: '4',
                      label: 'Quantity',
                      children: (
                        <Tag bordered={false} color="error">
                          {item?.redeemReward?.quantity}
                        </Tag>
                      ),
                      span: 1,
                    },
                    {
                      key: '5',
                      label: 'IsActive',
                      children: (
                        <Checkbox disabled defaultChecked={item?.redeemReward?.isActive}></Checkbox>
                      ),
                      span: 1,
                    },
                  ]}
                />
       
            ) : (
              <Table
                style={{ minHeight: 123.5 }}
                className="tableTabDeals"
                columns={columns}
                dataSource={data}
                showHeader={false}
                pagination={false}
                scroll={{ y: 123.5 }}
              />
            ),
        };
      })}
    />
  );
};

export default inject(Stores.PromotionStore, Stores.ProductStore)(observer(TabsDeals));
