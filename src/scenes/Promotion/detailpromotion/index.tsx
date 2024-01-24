import React, { CSSProperties, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import {
  Breadcrumb,
  Layout,
  theme,
  Descriptions,
  Card,
  Col,
  Row,
  Tag,
  Checkbox,
  Tooltip,
  Space,
  Flex,
  Button,
  Tabs,
  Collapse,
  Form,
} from 'antd';
import { inject, observer } from 'mobx-react';
import PromotionStore from '../../../stores/promotionStore';
import * as promotionHandler from '../../../services/promotionHandler/promotionHandler';
import Stores from '../../../stores/storeIdentifier';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import './index.css';
import TabsDeals from './tabsDeals';
import MapWorkflowDeals from './ConnectModal';
import DeleteDeals from './DeleteModal';
import { useParams } from 'react-router-dom';
import { CaretRightOutlined, EyeOutlined } from '@ant-design/icons';
import { CollapseProps, Table } from 'antd/lib';
import { ColumnsType } from 'antd/es/table';
import * as catalogHandler from '../../../services/catalogHandler/catalogHandler';
import productStore from '../../../stores/productStore';
import commonStore from '../../../stores/commonStore';
import AppConsts from '../../../lib/appconst';
import { DescriptionsProps, Input } from 'antd';

const { Content } = Layout;

interface IPromotionStore {
  promotionStore?: PromotionStore;
  productStore?: productStore;
  commonStore?: commonStore;
}
const detailPromotion: React.FC<IPromotionStore> = (props) => {
  const { promotionStore: promotionDetail, productStore, commonStore } = props;
  let location = useLocation();
  const { id } = useParams<{ id: string }>();

  const NavLinkId = location.state;

  React.useEffect(() => {
    promotionDetail?.getIdPromotion(NavLinkId || id);
  }, [NavLinkId]);

  React.useEffect(() => {
    promotionDetail?.GetAllWorkflow({
      maxResultCount: 1000,
      skipCount: 0,
      keyword: '',
    });
  }, []);

  React.useEffect(() => {
    commonStore?.GetAllList({
      maxResultCount: 10000,
      skipCount: 0,
    });
  }, []);
  useEffect(() => {
    productStore?.productModel;
  }, []);
  React.useEffect(() => {
    promotionDetail?.GetAllListDeals({
      maxResultCount: 10000,
      skipCount: 0,
    });
  }, []);

  const handleMapDealsToPromotion = async (value: promotionHandler.MapPromotionDealsInput) => {
    await promotionDetail?.mapDealsToPromotion(value);
    promotionDetail?.getIdPromotion(NavLinkId || id);
  };

  const deleteDeals = async (value: any) => {
    await promotionDetail?.removeDealsToPromotion(value);
    promotionDetail?.getIdPromotion(NavLinkId || id);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const descriptionPromotion: any = promotionDetail?.promotionModelDetail;
  const listWorkflow: any = promotionDetail?.workflowModel;
  const ticksToSDate = require('ticks-to-date');
  const dateStartDate = ticksToSDate(descriptionPromotion?.effectStartDate);
  const dateEndDate = ticksToSDate(descriptionPromotion?.effectEndDate);
  const listDeals: promotionHandler.PromotionModel = descriptionPromotion;

  const fieldRewardValueProduct = (value: any) => {
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
      const checkProduct = valueName?.length == 0 ? productRelateds : productRelateds?.length  == 0? valueName:value
    return checkProduct ;
  };
  const fieldRewardValuePayment = (value: any) => {
    const valueNamePayment =
      commonStore?.paymentTypeModel &&
      commonStore?.paymentTypeModel.filter((item: any) => item.id == value).map((x: any) => x.name);
      const checkpayment = valueNamePayment?.length == 0 ?value : valueNamePayment
    return checkpayment;
  };

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Promotion Name',
      children: descriptionPromotion?.name,
      span: 1,
    },
    {
      key: '2',
      label: 'Promotion Code',
      children: descriptionPromotion?.code,
      span: 1,
    },
    {
      key: '4',
      label: 'Promotion Active',
      children: <Checkbox disabled defaultChecked={descriptionPromotion?.isActive}></Checkbox>,
      span: 1,
    },
    {
      key: '5',
      label: 'EffectStartDate',
      children: moment(dateStartDate).format('DD/MM/YYYY :HH:mm'),
      span: 1,
    },
    {
      key: '6',
      label: 'EffectEndDate',
      children: moment(dateEndDate).format('DD/MM/YYYY :HH:mm'),
      span: 1,
    },

    {
      key: '3',
      label: 'Promotion Description',
      children: descriptionPromotion?.description,
      span: 3,
    },
  ];

  const getItems: (panelStyle: CSSProperties, item: any) => CollapseProps['items'] = (
    panelStyle,
    item
  ) => {
    const columns: ColumnsType<promotionHandler.WorkflowModel> = [
      {
        title: 'Reference Name',
        dataIndex: 'referenceName',
        key: 'referenceName',
        width: '30%',
        ellipsis: true,
      },
      {
        title: 'Value',
        dataIndex: 'reference',
        key: 'reference',
        width: '70%',
        ellipsis: true,
      },
    ];
    const data =
      item?.reference &&
      item?.reference.map((Items: any, index: any) => ({
        id: index,
        referenceName: Items.referenceTypeName,
        referenceTypeCode: Items.referenceTypeCode,
        reference:
          Items.referenceTypeCode == AppConsts.ReferenceCodePRODUCT
            ? fieldRewardValueProduct(Items.reference)
            : fieldRewardValuePayment(Items.reference),
      }));

    return [
      {
        key: '1',
        label: 'Detail reference',
        children: (
          <Table
            className="tableTabDeals"
            columns={columns}
            dataSource={data}
            showHeader={false}
            pagination={false}
            scroll={{ y: 123.5 }}
          />
        ),
        style: panelStyle,
      },
    ];
  };

  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  return (
    <Layout className="P-Content">
      <Form>
        <Row>
          {/* <Col span={24}>
            <Descriptions items={items} />
          </Col> */}
          <Col span={8} className="P-Content_Col">
            <Form.Item label="Promotion name:">
              <span>{descriptionPromotion?.name}</span>
              {/* <Input style={{width:'100%'}} bordered={false} defaultValue={descriptionPromotion?.name}></Input> */}
            </Form.Item>
          </Col>
          <Col span={8} className="P-Content_Col">
            <Form.Item label="Promotion code:">
              <span>{descriptionPromotion?.code}</span>
            </Form.Item>
          </Col>
          <Col span={8} className="P-Content_Col">
            <Form.Item label="Promotion Active:">
              <Checkbox disabled defaultChecked={descriptionPromotion?.isActive}></Checkbox>
            </Form.Item>
          </Col>
          <Col span={8} className="P-Content_Col">
            <Form.Item label="Effect Start Date:">
              <span>{moment(dateStartDate).format('DD/MM/YYYY :HH:mm')}</span>
            </Form.Item>
          </Col>
          <Col span={8} className="P-Content_Col">
            <Form.Item label="Effect End Date:">
              <span>{moment(dateEndDate).format('DD/MM/YYYY :HH:mm')}</span>
            </Form.Item>
          </Col>
          <Col span={8} className="P-Content_Col">
            <Form.Item label="Promotion description:">
              <Tooltip
                style={{ cursor: 'pointer' }}
                placement="topLeft"
                title={descriptionPromotion?.description}
                trigger="hover"
              >
                <span>{descriptionPromotion?.description}</span>
              </Tooltip>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Row className="list-deals">
        <Col span={12}>
          <h4 className="title-ListDeals">List Deals</h4>
        </Col>
        <Col span={12} className="list-deals-btn">
          <Space direction="vertical">
            <MapWorkflowDeals
              ListdealsMap={promotionDetail?.DealsModel}
              handleMap={handleMapDealsToPromotion}
              promotionDetail={descriptionPromotion}
              nameBtn="Connect-Deals"
              TitleModal="Connect Deals To Promotion"
            />
          </Space>
        </Col>
      </Row>
      <Row gutter={16} className="ContextDeals">
        <div className="ContextDeasl-Row">
          {listDeals?.deals &&
            listDeals?.deals.map((item, index) => (
              <Col span={8} key={index} className="ContextDeasl-Col">
                <Card
                  style={{ minHeight: 400 }}
                  hoverable
                  title={item.dealsCode}
                  extra={
                    <DeleteDeals
                      key={index}
                      inputType="text"
                      content={`deals ${item.dealsCode} from promotion`}
                      FuncDelete={deleteDeals}
                      dataDelete={{
                        promotionId: descriptionPromotion?.id,
                        dealsId: item.id,
                      }}
                    />
                  }
                  bordered={false}
                >
                  <div className="Reference">
                    Reference:
                    {item.reference &&
                      item.reference?.map((tab: promotionHandler.DealsCollectionModel) => (
                        <div className="DealsCard">
                          <Tag bordered={false} color="processing">
                            {tab.referenceTypeName}
                          </Tag>
                        </div>
                      ))}
                  </div>
                  <Collapse
                    bordered={false}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    style={{ background: token.colorBgContainer }}
                    items={getItems(panelStyle, item)}
                  />
                  <TabsDeals item={item} listWorkflow={listWorkflow} />
                </Card>
              </Col>
            ))}
        </div>
      </Row>
    </Layout>
  );
};

export default inject(
  Stores.PromotionStore,
  Stores.ProductStore,
  Stores.commonStore
)(observer(detailPromotion));
