import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { Badge, Checkbox, Col, Dropdown, Input, Layout, Row, Space, Table, theme } from 'antd';
import _ from 'lodash';
import type { ColumnsType } from 'antd/es/table';
import { inject, observer } from 'mobx-react';
import PromotionStore from '../../stores/promotionStore';
import Stores from '../../stores/storeIdentifier';
import moment from 'moment';
import './index.css';
const { Content } = Layout;

interface DataType {
  key: React.Key;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}
interface ExpandedDataType {
  key: React.Key;
  date: string;
  name: string;
  upgradeNum: string;
}

interface IPromotionStore {
  promotionStore?: PromotionStore;
}
const Search = Input.Search;

const Reward: React.FC<IPromotionStore> = (props: IPromotionStore) => {
  const { promotionStore: promotion } = props;
  const [keyword, setKeyword] = useState('');

  React.useEffect(() => {
    promotion?.GetAllListReward([]);
  }, [keyword]);

  //   const onChangeSearch = _.debounce((keyword: string) => {
  //   // setKeyword(keyword);
  //   promotion?.GetAllListReward([keyword]);
  // }, 400);
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  const columnsChilren: TableColumnsType<any> = [
    // { title: 'Value', dataIndex: 'value', key: 'value' },
    { title: 'Reward Type', dataIndex: 'rewardType', key: 'rewardType' },
    { title: 'Approve Date', dataIndex: 'approveDate', key: 'approveDate' },
    { title: 'Deadline', dataIndex: 'deadline', key: 'deadline' },
    {
      title: 'isApproved',
      dataIndex: 'isApproved',
      key: 'isApproved',
      render: (text: any) => <Checkbox checked={text} disabled></Checkbox>,
    },
    // { title: 'Remaining DueDate', dataIndex: 'remainingDueDate', key: 'remainingDueDate' },
    { title: 'Promotion Item', dataIndex: 'promotionItem', key: 'promotionItem' },
  ];
  const dataChilren = (data: any) => {

    const dataSource: any = data?.map((item: any, index: any) => ({
      key: index,
      value: item.value,
      rewardType: item.rewardType,
      approveDate: moment(item.approveDate).format('DD/MM/YYYY: HH:mm'),
      deadline: moment(item.deadline).format('DD/MM/YYYY: HH:mm'),
      isApproved: item.isApproved,
      remainingDueDate: item.remainingDueDate,
      promotionItem: item.promotionItem,
    }));
    return dataSource;
  };

  const columns: TableColumnsType<any> = [
    {
      title: 'Reward Reference',
      dataIndex: 'rewardReference',
      key: 'rewardReference',
    },
    {
      title: 'Creation Time',
      dataIndex: 'creationTime',
      key: 'creationTime',
    },
  ];

  const dataSource: any =
    promotion?.rewardModel &&
    promotion?.rewardModel.map((item: any, index) => {
      return {
        key: index,
        rewardReference: item.rewardReference,
        creationTime: moment(item.creationTime).format('DD/MM/YYYY: hh:mm'),
        rewardColection: item.rewardColection,
      };
    });

  return (
    <>
      <Layout className="backgroudTable">
        <Row>
          <Col span={24}>
            <h2>Reward List</h2>
          </Col>
        </Row>
        <Row>
        <Col span={12} className="Reward-Search">
          <Search
            placeholder="Filter"
            //  onSearch={async (e) => await this.handleSearch(e)}
          />
        </Col>
        </Row>
        <Row className='homePromotion-table'>
        <Col span={24}>
        <Table
          className="reward-Table"
          loading={dataSource ? false : true}
          columns={columns}
          pagination={{ pageSize: 7 }}
          expandable={{
            expandedRowRender: (record) => (
              <Table
                columns={columnsChilren}
                dataSource={dataChilren(record.rewardColection)}
                pagination={false}
              />
            ),
          }}
          dataSource={dataSource}
          scroll={{ x: 123.5 }}
        />
        </Col>  
        </Row>
      </Layout>
    </>
  );
};

export default inject(Stores.PromotionStore)(observer(Reward));
