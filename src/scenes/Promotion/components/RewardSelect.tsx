import React, { useState } from 'react';
import * as catalogHandler from '../../../services/catalogHandler/catalogHandler';
import * as promotionHandler from '../../../services/promotionHandler/promotionHandler';
import { Col, DatePicker, Form, Input, InputNumber, Row, Select, TreeSelect } from 'antd';
import productStore from '../../../stores/productStore';
import Stores from '../../../stores/storeIdentifier';
import { inject, observer } from 'mobx-react';
import AppConsts from '../../../lib/appconst';

const { SHOW_PARENT } = TreeSelect;
interface RewardFieldSelect {
  giftValue?: catalogHandler.ProductModel[];
  field?: any;
  promotionReward?: any;
  productStore?: productStore;
}

const RewardSelect: React.FC<RewardFieldSelect> = ({ ...props }) => {
  const { giftValue, field, promotionReward, productStore: product } = props;
  const [form] = Form.useForm();
  const [debtDate, setDebtDate] = useState(true);
  const [valueRewerd, setValueRewerd] = useState<any>('');
  const [fieldRewerd, setFieldRewerd] = useState(1)
  const [selectreward, setSelectdValue] = useState('');

  const onChangeReward = (rewardValue: string) => {
    setSelectdValue(rewardValue);
    rewardValue == AppConsts.RewardTypeDEPT ? setDebtDate(false) : setDebtDate(true);
    form.resetFields(['redeemName'])
    setFieldRewerd(0)
  };

  const onSearch = (Value: string) => {
    setValueRewerd(Value);
  };

  const filterTreeNode = (input: any, treeNode: any) => {
    return treeNode.title.toLowerCase().includes(input.toLowerCase());
  };

  const treeData =
    product?.productModel &&
    product?.productModel.filter((item:catalogHandler.ProductModel)=>!(item.productType == 3000)).map((x: catalogHandler.ProductModel) => ({
      title: x.name,
      key: x.id,
      value: x.id,
      children: x.productRelateds?.map((y: catalogHandler.ProductModel) => ({
        title: y.name,
        value: y.id,
        key: y.id
      }))
    }));

  const tProps = {
    treeData,
    filterTreeNode,
    treeCheckable: false,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '100%',
    },
  };

  return (
    <>
      <div className="Deals-redeem">
        <Form.Item name={[field.name, 'redeemName']}>
          <Row>
            <Col span={6}>
              <div>Redeem Name:</div>
            </Col>
            <Col span={24} style={{ marginBottom: '0' }}>
              <Input placeholder="Redeem Name" />
            </Col>
          </Row>
        </Form.Item>
        <span>Reward:</span>
        <Form.Item style={{ marginBottom: '0' }}>
          <Row>
            <Col span={8}>
              <Form.Item name={[field.name, 'rewardType']} style={{ marginRight: '6px' }}>
                <Select
                  placeholder="Select Reward"
                  optionFilterProp="children"
                  onChange={onChangeReward}
                  options={
                    promotionReward &&
                    promotionReward?.map((item: promotionHandler.RewardTypeDto) => ({
                      label: item.displayName,
                      value: item.value,
                      disabled:
                        item.value == AppConsts.RewardTypePOINT ||
                        item.value == AppConsts.RewardTypeVOUCHER ||
                        item.value == AppConsts.RewardTypeCOUPON
                          ? true
                          : false,
                    }))
                  }
                />
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item name={[field.name, 'rewardValue']}>
                {selectreward == AppConsts.RewardTypePREMIUM ? (
                  <InputNumber
                    style={{ width: '100%' }}
                    formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
                    defaultValue={fieldRewerd}
                  />
                ) : selectreward == AppConsts.RewardTypeDISCOUNTBONDS ? (
                  <InputNumber
                    style={{ width: '100%' }}
                    placeholder="DiscountBonds"
                    defaultValue={fieldRewerd}
                    min={0}
                    max={100}
                    formatter={(value) => `${value}%`}
                  />
                ) : selectreward == AppConsts.RewardTypeGIFT ? (
                  <TreeSelect {...tProps} showSearch />
                ) : (
                  <Input placeholder="Please choose reward"  disabled />
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        {selectreward == AppConsts.RewardTypeGIFT ? (
          <>
            <h4 style={{ fontWeight: 400, margin: 0 }}>Quantity:</h4>
            <Form.Item name={[field.name, 'quantity']}>
              <InputNumber min={1} defaultValue={1} style={{ width: '100%' }} />
            </Form.Item>
          </>
        ) : (
          <>
            <h4 style={{ fontWeight: 400, margin: 0 }}>Remaining Due Date:</h4>
            <Form.Item name={[field.name, 'remainingDueDate']}>
              <DatePicker style={{ width: '100%' }} disabled={debtDate} />
            </Form.Item>
          </>
        )}
      </div>
    </>
  );
};

export default inject(Stores.ProductStore)(observer(RewardSelect));
