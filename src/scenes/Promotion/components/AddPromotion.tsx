import React, { useState } from 'react';
import {
  Button,
  Card,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  InputNumber,
  Layout,
  Row,
  Select,
  Space,
  Typography,
} from 'antd';
import type { DrawerProps } from 'antd/es/drawer';
import {
  CloseCircleOutlined,
  CloseOutlined,
  PlusCircleOutlined,
  SaveOutlined,
} from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';
import TextArea from 'antd/es/input/TextArea';
import './index.css';
import PromotionStore from '../../../stores/promotionStore';
import * as promotionHandler from '../../../services/promotionHandler/promotionHandler';
import { inject, observer } from 'mobx-react';
import Stores from '../../../stores/storeIdentifier';
import DealsCollections from './DealsCollections';
import RewardSelect from './RewardSelect';
import productStore from '../../../stores/productStore';
import { FormInstance } from 'antd/lib';
import AppConsts from '../../../lib/appconst';

interface IPromotionStore {
  promotionStore?: PromotionStore;
  productStore?: productStore;
  ReferenceType: any;
}
const AddPromotion: React.FC<IPromotionStore> = ({ ...props }) => {
  const { promotionStore, ReferenceType, productStore: product } = props;

  const promotion = promotionStore;
  const [open, setOpen] = useState(false);
  const [onLoading, setOnloading] = useState(false);
  const [size, setSize] = useState<DrawerProps['size']>();
  const [form] = Form.useForm();

  const showLargeDrawer = () => {
    setSize('large');
    setOpen(true);
  };
  React.useEffect(() => {
    promotion?.getRewardconfiguration();
  }, []);

  React.useEffect(() => {
    product?.GetAllList({
      maxResultCount: 10000,
      skipCount: 0,
      sorting: '',
      name: '',
      brandId: '',
      categoryId: '',
      isPublished: true,
      productShouldBe: {
        shouldBeHadRelateds: true,
      },
    });
  }, []);

  function dateToTicks(date: any) {
    const epochOffset: number = 621355968000000000;
    const ticksPerMillisecond: number = 10000;
    const ticks = date.getTime() * ticksPerMillisecond + epochOffset;
    return ticks;
  }

  const ReferencePayment = [
    {
      code: AppConsts.paymentCodeCod,
      id: AppConsts.paymenttypeCod,
    },
    {
      code: AppConsts.paymentCodeDept,
      id: AppConsts.paymenttypeDept,
    },
    {
      code: AppConsts.paymentCodeOnline,
      id: AppConsts.paymenttypeOnline,
    },
  ];

  const HandelSave = async () => {
    const createpromotion = JSON.stringify(form.getFieldsValue(), null, 2);
    const converValue = JSON.parse(createpromotion);
    setOnloading(true);
    var a: any = [];

    const valueCreatepromotion: promotionHandler.CreatePromotionInput = {
      name: converValue.name,
      description: converValue.description,
      effectEndDate: dateToTicks(new Date(converValue.effectEndDate)),
      effectStartDate: converValue.effectStartDate,
      deals:
        converValue.deals &&
        converValue.deals.map((item: any) => {
          return {
            dealsCollections: [].concat(
              ...[].concat(
                ...(item.dealsCollections &&
                  item.dealsCollections.map((x: any) =>
                    x.referenceTypeCode == 'RT-0000000'
                      ? x.reference?.map((y: any) => ({
                          referenceTypeCode: ReferencePayment.filter(
                            (filter: any) => filter.id == y
                          )
                            .map((map: any) => map.code)
                            .join(),
                          reference: y,
                        }))
                      : x.reference?.map((y: any) => ({
                          referenceTypeCode: x.referenceTypeCode,
                          reference: y,
                        }))
                  ))
              )
            ),
            quantity: -1,
            redeem: {
              name: item.redeemName,
              rewardType: item.rewardType,
              value: item.rewardValue,
              quantity:
                item.rewardType == AppConsts.RewardTypeGIFT
                  ? parseInt(item.quantity)
                  : item.quantity == null || ''
                  ? 1
                  : 1,
            },
          };
        }),
    };
    await promotion?.CreatePromotion(valueCreatepromotion);
    setOnloading(false);
    setOpen(false);
    form.resetFields();
    promotion?.GetAllList({ keyword: '', maxResultCount: 100000, skipCount: 0 });
  };

  const onClose = () => {
    setOpen(false);
    setOnloading(false);
    form.resetFields();
  };

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
        loading={onLoading}
        type="primary"
        htmlType="submit"
        onClick={HandelSave}
        disabled={!submittable}
      >
        <SaveOutlined /> Save
      </Button>
    );
  };

  return (
    <>
      <Space>
        <Button type="primary" onClick={showLargeDrawer}>
          <PlusCircleOutlined />
          Add Promotion
        </Button>
      </Space>
      <Drawer
        title="Add New Promotion"
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button type="primary" danger onClick={onClose}>
              <CloseCircleOutlined />
              Cancel
            </Button>
            <SubmitButton form={form} />
          </Space>
        }
      >
        <Layout>
          <Content>
            <Form
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 24 }}
              form={form}
              className="promotion-Content"
              name="dynamic_form_complex"
              autoComplete="off"
              initialValues={{ deals: [{}], redeem: {} }}
            >
              <Form.Item<promotionHandler.CreatePromotionInput>
                label="Promotion Name"
                name="name"
                rules={[{ required: true, message: 'Please input name promotion!' }]}
              >
                <Input placeholder="Promotion name" />
              </Form.Item>
              <Form.Item<any>
                label="Effect Start Date"
                name="effectStartDate"
                rules={[{ required: true, message: 'Please input start date!' }]}
              >
                <DatePicker showTime style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item<promotionHandler.CreatePromotionInput>
                label="Effect End Date"
                name="effectEndDate"
                rules={[{ required: true, message: 'Please input end date!' }]}
              >
                <DatePicker showTime style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item<promotionHandler.CreatePromotionInput>
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Please input description promotion!' }]}
              >
                <TextArea showCount maxLength={100} placeholder="Promotion Description" />
              </Form.Item>
              <Form.List name="deals">
                {(fields, { add, remove }) => (
                  <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
                    {fields.map((field) => (
                      <Card
                        size="small"
                        title={`Deals ${field.name + 1}`}
                        key={field.key}
                        extra={
                          <CloseOutlined
                            style={{ color: 'red' }}
                            onClick={() => {
                              remove(field.name);
                            }}
                          />
                        }
                      >
                        <Form.Item label="DealsCollections">
                          <Form.List name={[field.name, 'dealsCollections']}>
                            {(subFields, subOpt) => (
                              <div style={{ display: 'flex', flexDirection: 'column', rowGap: 26 }}>
                                {subFields.map((subField) => {
                                  return (
                                    <Space key={subField.key}>
                                      <div style={{ width: '400px' }}>
                                        <DealsCollections
                                          props={subField}
                                          ReferenceType={ReferenceType}
                                        />
                                      </div>
                                      <CloseOutlined
                                        style={{ color: 'red' }}
                                        onClick={() => {
                                          subOpt.remove(subField.name);
                                        }}
                                      />
                                    </Space>
                                  );
                                })}
                                <Button type="dashed" onClick={() => subOpt.add()} block>
                                  <PlusCircleOutlined /> Add Deals Collections
                                </Button>
                              </div>
                            )}
                          </Form.List>
                        </Form.Item>

                        <RewardSelect
                          giftValue={product?.productModel}
                          field={field}
                          promotionReward={promotion?.rewardTypeDto}
                        />
                      </Card>
                    ))}

                    <Button type="dashed" onClick={() => add()} block>
                      <PlusCircleOutlined /> Add Deals
                    </Button>
                  </div>
                )}
              </Form.List>
              {/* <Form.Item noStyle shouldUpdate>
                {() => (
                  <Typography>
                    <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
                  </Typography>
                )}
              </Form.Item> */}
            </Form>
          </Content>
        </Layout>
      </Drawer>
    </>
  );
};

export default inject(Stores.ProductStore, Stores.PromotionStore)(observer(AddPromotion));
