import React, { useState } from 'react';
import { Button, Modal, Result, Typography } from 'antd';
import { CloseCircleOutlined, CloseOutlined } from '@ant-design/icons';

const { Paragraph, Text } = Typography;

interface IDeleteDeals{
    FuncDelete: (code: any) => void;
    content?:any;
    inputType?:any;
    iconBtn?:any;
    dataDelete?:any;
}
const DeleteDeals: React.FC<IDeleteDeals> = ({...props}) => {
  const { content, inputType, iconBtn, FuncDelete, dataDelete } = props;
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (value: any) => {
    FuncDelete(dataDelete)
    setConfirmLoading(true);
    setTimeout(() => {
      setModalText((prer) => !prer);
      setConfirmLoading(false);
    }, 1000);
    setTimeout(() => {
      setOpen(false);
      setModalText(false);
    }, 1400);
  };

  const handleCancel = () => {
    setOpen(false);    
  };

  return (
    <>
      <Button type={inputType} danger onClick={showModal}>
        {iconBtn || <CloseOutlined />}
      </Button>
      <Modal
        open={open}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer=""
        okText="Delete"
      >
        <Result
          status={modalText == false ? 'error' : 'success'}
          title="Are you sure?"
          subTitle={`Do you really want to delete ${content}?`}
          extra={[
            <Button onClick={handleCancel}>Cancel</Button>,
            <Button type="primary" danger onClick={handleOk}  loading={confirmLoading}>
              Delete
            </Button>,
          ]}
        ></Result>
      </Modal>
    </>
  );
};

export default DeleteDeals;
