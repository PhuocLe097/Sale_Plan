import React, { useState } from 'react';
import _ from 'lodash';
import { Col, Row, Form, Select, Input, TreeSelect } from 'antd';
import './index.css';
import { inject, observer } from 'mobx-react';
import Stores from '../../../stores/storeIdentifier';
import productStore from '../../../stores/productStore';
import customerStore from '../../../stores/customerStore';
import AppConsts from '../../../lib/appconst';
import commonStore from '../../../stores/commonStore';
import * as commonHandler from '../../../services/commonHandler/commonHandler';
import * as catalogHandler from '../../../services/catalogHandler/catalogHandler';

const { SHOW_CHILD,TreeNode,SHOW_ALL,SHOW_PARENT } = TreeSelect;
interface LoadFieldComponent {
  props: any;
  ReferenceType: any;
  productStore?: productStore;
  customerStore?: customerStore;
  commonStore?: commonStore;
}
const DealsCollections: React.FC<LoadFieldComponent> = (Props: LoadFieldComponent) => {
  const {
    props: propss,
    ReferenceType: ReferenceType,
    productStore: product,
    customerStore: party,
    commonStore: common,
  } = Props;

  const [searchParty, setSearchParty] = useState('');
  const [selectvalue, setSelectValue] = useState('');

  React.useEffect(() => {
    party?.GetAllList({
      skipCount: 1,
      search: searchParty,
      maxResultCount: 24949,
      isActive: true,
    });
  }, [searchParty]);

  React.useEffect(() => {
    common?.GetAllList({
      maxResultCount: 10000,
      skipCount: 0,
    });
  }, []);
  const onSearchParty = (value: string) => {
    setSearchParty(value);
  };

  const filterOption = (input: any, option?: { label: string; value: string }) => {
    return (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  };
  const filterTreeNode = (input: any, treeNode: any) => {
    return treeNode.title.toLowerCase().includes(input.toLowerCase());
  };
  const onchange = (value: any) => {
    setSelectValue(value);
  };

  const getReferenceType =
    ReferenceType &&
    ReferenceType?.filter(
      (item: any) =>
        !(
          item.code == AppConsts.ReferenceCodeCOD ||
          item.code == AppConsts.ReferenceCodeDEPT ||
          item.code == AppConsts.ReferenceCodeONLINE ||
          item.code == AppConsts.ReferenceCodeSTRING
        )
    )
      .map((item: any) => ({
        label: item.name,
        value: item.code,
        disabled: item.code == 'RT-1000004' ? true : false,
      }))
      .concat([
        {
          label: 'PaymentType',
          value: 'RT-0000000',
        },
      ]);
      
  const dataChilrend = product?.productModel &&
  product?.productModel.map((x: catalogHandler.ProductModel) => ({
    key: x.id,
    title: x.name,
    value: x.id,
  }));
  
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
    // treeCheckable: true,
    showCheckedStrategy: SHOW_ALL,
    placeholder: 'Please select',
    style: {
      width: '100%',
    },
  };

  return (
    <>
      <Row>
        <Col span={11} style={{ marginRight: '10px' }}>
          {' '}
          <Form.Item
            noStyle
            name={[propss.name, 'referenceTypeCode']}
            rules={[{ required: true, message: 'Please choose reference type!' }]}
          >
            <Select
              placeholder="Reference Type"
              optionFilterProp="children"
              defaultValue="Reference Type"
              onChange={onchange}
              options={getReferenceType}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            noStyle
            name={[propss.name, 'reference']}
            rules={[{ required: true, message: 'Please input reference value!' }]}
          >
            {selectvalue == AppConsts.ReferenceCodePRODUCT ? (
              <TreeSelect {...tProps} allowClear multiple  maxTagCount={2} />
            ) : selectvalue == AppConsts.ReferenceCodePARTY ? (
              <Select
                showSearch
                placeholder="Party select"
                optionFilterProp="children"
                filterOption={filterOption}
                onSearch={onSearchParty}
                onChange={onSearchParty}
                options={
                  party?.partyModel &&
                  party?.partyModel.map((item: any) => ({
                    label: item.name,
                    value: item.id,
                  }))
                }
              />
            ) : selectvalue == "RT-0000000" ? (
              <Select
                showSearch
                placeholder="Select a payment"
                optionFilterProp="children"
                mode="multiple"
                maxTagCount={2}
                options={
                  common?.paymentTypeModel &&
                  common?.paymentTypeModel.map((item: commonHandler.PaymentTypeModel, index) => ({
                    label: item.name,
                    value: item.id,
                  }))
                }
              />
            ) : (
              <Input disabled placeholder="Please choose deals collections" />
            )}
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default inject(
  Stores.ProductStore,
  Stores.customerStore,
  Stores.commonStore
)(observer(DealsCollections));
