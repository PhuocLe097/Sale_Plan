import React, { useState } from 'react';
import { Button, Modal, Result } from 'antd';
import './index.css';

interface ImodalUpdatepromotion {
  BtnIcon?: any;
  BtnTitle?: string;
  BtnType?: any;
  ModalContent?: any;
  FuncUpdate: (id: any) => void;
  IdPromotion?: any;
  isSuccess?: any;

}

const ModalUpdatepromotion: React.FC<ImodalUpdatepromotion> = ({ ...Props }) => {
  const { BtnIcon, BtnTitle, BtnType, ModalContent, FuncUpdate, IdPromotion, isSuccess } = Props;
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    try {
      FuncUpdate(IdPromotion);
      setConfirmLoading(true);
     
        setTimeout(() => {
          setModalText((prer) => !prer);
          setConfirmLoading(false);
        }, 800);
        setTimeout(() => {
          setOpen(false);
          setModalText(false)
        }, 1400);
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <Button danger={BtnType == 'danger'} onClick={showModal}>
        <BtnIcon /> {BtnTitle}
      </Button>
      <Modal
        title={false}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={false}
      >
        <Result
          className="PromotionModalUpdate"
          status={modalText == false ? 'info' : 'success'}
          title={`Are you sure ${BtnTitle} promotion?`}
          subTitle={`${ModalContent}`}
          extra={[
            <Button onClick={handleCancel}>Cancel</Button>,
            <Button type="primary" onClick={handleOk} loading={confirmLoading}>
              Save
            </Button>,
          ]}
        />
      </Modal>
    </>
  );
};

export default ModalUpdatepromotion;
