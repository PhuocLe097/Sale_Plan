import React, { useState } from 'react';
import _ from 'lodash';
import {
  Layout,
  theme,
  Space,
  Table,
  Tag,
  Checkbox,
  Button,
  Input,
  Tabs,
  Row,
  Col,
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { inject, observer } from 'mobx-react';
import PromotionStore from '../../stores/promotionStore';
import Stores from '../../stores/storeIdentifier';
import * as promotionHandler from '../../services/promotionHandler/promotionHandler';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import AddPromotion from './components/AddPromotion';
import AddPromotionForOdoo from './components/AddPromotionForOdoo';
import './index.css';
import { ApiOutlined, DisconnectOutlined, LockOutlined } from '@ant-design/icons';
import ModalUpdatepromotion from './components/ModalUpdatepromotion'

interface IPromotionStore {
  promotionStore?: PromotionStore;

}
const Search = Input.Search;
const Promotion: React.FC<IPromotionStore> = (props: IPromotionStore) => {
  const { promotionStore: promotion} = props;
  const [keyword, setKeyword] = useState('');
  const dataGetAllList = { keyword: keyword, maxResultCount: 100000, skipCount: 0 };

  React.useEffect(() => {
    promotion?.GetAllList(dataGetAllList);
  }, [keyword]);

  React.useEffect(() => {
    promotion?.getReferenceType();
  }, []);

  const enablePromotion = async (id: any) => {
    await promotion?.enablePromotion(id);
    promotion?.GetAllList(dataGetAllList);
  };

  const disablePromotion = async (id: any) => {
    await promotion?.disablePromotion(id);
    promotion?.GetAllList(dataGetAllList);
  };

  const onChangeSearch = _.debounce((keyword: string) => {
    setKeyword(keyword);
  }, 400);

  const isSussecc = promotion?.updatePromotion?.data;

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const columns: ColumnsType<promotionHandler.PromotionModel> = [
    {
      title: 'Promotion Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Promotion Code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Promotion Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Promotion Active',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (text: any) => <Checkbox checked={text} disabled></Checkbox>,
    },
    {
      title: 'EffectStartDate',
      dataIndex: 'effectStartDate',
      key: 'effectStartDate',
    },
    {
      title: 'EffectEndDate',
      dataIndex: 'effectEndDate',
      key: 'effectEndDate',
    },
    {
      title: 'Promotion Deals',
      key: 'deals',
      dataIndex: 'deals',
      render: (_, { deals }) => (
        <>
          {deals &&
            deals.map((deal, index) => {
              let color = index == 1 ? 'geekblue' : index == 2 ? 'red' : 'green';
              return (
                <Tag color={color} key={index}>
                  {deal.dealsCode}
                </Tag>
              );
            })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <NavLink
            to={{
              pathname: `detailpromotion/${record.id}`,
              state: record.id,
            }}
          >
            <Button type="primary">View Detail</Button>
          </NavLink>
          {record.isActive == true ? (
            <ModalUpdatepromotion
              BtnType={'danger'}
              BtnIcon={DisconnectOutlined}
              FuncUpdate={disablePromotion}
              isSuccess={isSussecc}
              BtnTitle={'Disable'}
              IdPromotion={record.id}
              ModalContent={
                record.name +
                ', start date: ' +
                record.effectStartDate +
                ', End date: ' +
                record.effectEndDate
              }
            />
          ) : record.isActive == false && record.extensionData?.isActive == true ? (
            <Button type="primary" disabled>
              Primary(disabled)
            </Button>
          ) : (
            <ModalUpdatepromotion
              BtnIcon={ApiOutlined}
              FuncUpdate={enablePromotion}
              IdPromotion={record.id}
              BtnTitle={'Enable'}
              isSuccess={isSussecc}
              ModalContent={
                record.name +
                ', start date: ' +
                record.effectStartDate +
                ', End date: ' +
                record.effectEndDate
              }
            />
          )}
        </Space>
      ),
    },
  ];
  const columnsDisable: ColumnsType<promotionHandler.PromotionModel> = [
    {
      title: 'Promotion Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Promotion Code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Promotion Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Promotion Active',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (text: any) => <Checkbox checked={text} disabled></Checkbox>,
    },
    {
      title: 'EffectStartDate',
      dataIndex: 'effectStartDate',
      key: 'effectStartDate',
    },
    {
      title: 'EffectEndDate',
      dataIndex: 'effectEndDate',
      key: 'effectEndDate',
    },
    {
      title: 'Promotion Deals',
      key: 'deals',
      dataIndex: 'deals',
      render: (_, { deals }) => (
        <>
          {deals &&
            deals.map((deal, index) => {
              let color = index == 1 ? 'geekblue' : index == 2 ? 'red' : 'green';
              return (
                <Tag color={color} key={index}>
                  {deal.dealsCode}
                </Tag>
              );
            })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <NavLink
            to={{
              pathname: `detailpromotion/${record.id}`,
              state: record.id,
            }}
          >
            <Button type="primary">View Detail</Button>
          </NavLink>
          {
            <Button type="primary" disabled>
              <LockOutlined />
              Completed
            </Button>
          }
        </Space>
      ),
    },
  ];

  const ReferenceType =
    promotion?.referenceTypeModel &&
    promotion?.referenceTypeModel.map((item, index) => ({
      name: item.name,
      normalizedName: item.normalizedName,
      code: item.code,
      id: item.id,
    }));

  const dataSource: any =
    promotion?.promotionModel &&
    promotion?.promotionModel
      .filter(
        (filter: any) =>
          filter.extensionData === null ||
          (filter.isActive == true && filter.extensionData?.isActive == true)
      )
      .map((item, index) => {
        const ticksToStartDate = require('ticks-to-date');
        const dateStartDate = ticksToStartDate(item.effectStartDate);
        const ticksToSEndDate = require('ticks-to-date');
        const dateEndDate = ticksToSEndDate(item.effectEndDate);
        return {
          key: index,
          id: item.id,
          name: item.name,
          code: item.code,
          description: item.description,
          isActive: item.isActive,
          effectStartDate: moment(dateStartDate.toUTCString()).format('DD/MM/YYYY :HH:mm'),
          effectEndDate: moment(dateEndDate.toUTCString()).format('DD/MM/YYYY :HH:mm'),
          deals: item.deals,
        };
      });

  const dataSourceDisable: any =
    promotion?.promotionModel &&
    promotion?.promotionModel
      .filter((filter: any) => filter.isActive == false && filter.extensionData?.isActive == true)
      .map((item, index) => {
        const ticksToStartDate = require('ticks-to-date');
        const dateStartDate = ticksToStartDate(item.effectStartDate);
        const ticksToSEndDate = require('ticks-to-date');
        const dateEndDate = ticksToSEndDate(item.effectEndDate);
        return {
          key: index,
          id: item.id,
          name: item.name,
          code: item.code,
          description: item.description,
          isActive: item.isActive,
          effectStartDate: moment(dateStartDate.toUTCString()).format('DD/MM/YYYY :HH:mm'),
          effectEndDate: moment(dateEndDate.toUTCString()).format('DD/MM/YYYY :HH:mm'),
          deals: item.deals,
        };
      });

  return (
    <>
      <Layout className="c-promotions">
        <Row>
        <Col span={24}><h2>Promotion List</h2></Col>
        </Row>       
        <Row className="header-promotion">        
          <Col span={12}>
            <Search
              placeholder="Search Promotion"
              onChange={(e) => onChangeSearch(e.target.value)}
              className="Field-Search"
            />
          </Col>
          <Col span={12} className='Btn-AddPromotion' >
            <AddPromotionForOdoo ReferenceType={ReferenceType} />
          </Col>
        </Row>

        <Row className='ListPromotion-tabs'>
        <Col span={24}><Tabs
          type="card"         
          items={new Array(2).fill(null).map((_, i) => {
            const id = String(i + 1);
            return {              
              label: `${id == '1' ? 'Promotion New' : 'Promotion Disable'}`,
              key: id,
              children:
                id == '1' ? (
                  <Table
                    className="Table-Promotion"
                    loading={dataSource ? false : true}
                    columns={columns}
                    dataSource={dataSource}
                    style={{height:'100%',overflow:'auto'}}
                    scroll={{ x: 'calc(700px + 50%)' }}
                    pagination={{ pageSize: 7 }}
                  />
                ) : (
                  <Table
                    className="Table-Promotion"
                    loading={dataSourceDisable ? false : true}
                    columns={columnsDisable}
                    dataSource={dataSourceDisable}
                    scroll={{ x: 500 }}
                    pagination={{ pageSize: 7 }}
                  />
                ),
            };
          })}
        /></Col>
        </Row>        
      </Layout>
    </>
  );
};

export default inject(Stores.PromotionStore)(observer(Promotion));
