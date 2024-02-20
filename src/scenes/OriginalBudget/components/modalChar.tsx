import React, { PureComponent, useState } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Button, Col, Layout, Modal, Row, Select } from 'antd';

const modalChar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dataChar = [
    {
      name: 'Tháng 1',
      RealWS: 590,
      Target: 800,
      amt: 1400,
    },
    {
      name: 'Tháng 2',
      RealWS: 868,
      Target: 967,
      amt: 1506,
    },
    {
      name: 'Tháng 3',
      RealWS: 897,
      Target: 1098,
      amt: 989,
    },
    {
      name: 'Tháng 4',
      RealWS: 980,
      Target: 1200,
      amt: 1228,
    },
    {
      name: 'Tháng 5',
      RealWS: 920,
      Target: 1108,
      amt: 1100,
    },
    {
      name: 'Tháng 6',
      RealWS: 700,
      Target: 680,
      amt: 1700,
    },
    {
      name: 'Tháng 7',
      RealWS: 700,
      Target: 780,
      amt: 1400,
    },
    {
      name: 'Tháng 8',
      RealWS: 500,
      Target: 680,
      amt: 1700,
    },
    {
      name: 'Tháng 9',
      RealWS: 700,
      Target: 880,
      amt: 1500,
    },
    {
      name: 'Tháng 10',
      RealWS: 600,
      Target: 780,
      amt: 1100,
    },
    {
      name: 'Tháng 11',
      RealWS: 780,
      Target: 880,
      amt: 1300,
    },
    {
      name: 'Tháng 12',
      RealWS: 300,
      Target: 480,
      amt: 1100,
    },
  ];

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Char
      </Button>
      <Modal
        title="Biểu đồ số lượng bán ra - H1X"
        open={isModalOpen}
        centered
        footer={false}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
              <Select                
                placeholder="Chọn năm"
                optionFilterProp="children"
                defaultValue='2024'
                options={[
                  {
                    value: '2023',
                    label: '2023',
                  },
                  {
                    value: '2024',
                    label: '2024',
                  },
                  {
                    value: '2025',
                    label: '2025',
                  },
                ]}
              />        
            <ComposedChart
              width={1000}
              height={400}
              data={dataChar}
              margin={{
                top: 20,
                right: 80,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis
                dataKey="name"
                label={{ value: 'Tháng', position: 'insideBottomRight', offset: 0 }}
                scale="band"
              />
              <YAxis label={{ value: 'Số lượng bán ra', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              {/* <Legend /> */}
              {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
              <Bar dataKey="Target" barSize={20} fill="#413ea0" />
              {/* <Line type="monotone" dataKey="RealWS" stroke="#ff7300" /> */}
            </ComposedChart>        
      </Modal>
    </>
  );
};

export default modalChar;
