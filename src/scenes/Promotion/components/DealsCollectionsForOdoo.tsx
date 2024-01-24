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

const {SHOW_ALL } = TreeSelect;
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
  } = Props;
  const filterTreeNode = (input: any, treeNode: any) => {
    return treeNode.title.toLowerCase().includes(input.toLowerCase());
  };

  const getReferenceType =
    ReferenceType &&
    ReferenceType?.filter(
      (item: any) =>
        !(
          item.code == AppConsts.ReferenceCodeCOD ||
          item.code == AppConsts.ReferenceCodeDEPT ||
          item.code == AppConsts.ReferenceCodeONLINE
        )
    )
      .map((item: any) => ({
        label: item.name,
        value: item.code,
        // disabled: item.code == 'RT-1000004' ? true : false,
      }))
  
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
          <Input placeholder="Please insert value deals collections" />          
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
