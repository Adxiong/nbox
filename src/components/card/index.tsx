/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-07-30 23:56:21
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-08-04 00:18:31
 */

import { Avatar, Button, Divider, Form, Input, Modal, Space } from 'antd';
import { useState } from 'react';
import './style/index.less';
interface cardItemProps {
  src: string;
  title: string;
}
const CardItem = (props: cardItemProps) => {
  return (
    <div className="card-item">
      <Avatar className="card-avatar" size={80}>
        USER
      </Avatar>
      <span className="card-title">{props.title}</span>
    </div>
  );
};

const CardHeader = (props: { onClick: () => void }) => {
  return (
    <div className="card-header">
      <span>xxx 分组共（xx）个内容</span>
      <Button onClick={props.onClick}>新建收藏</Button>
    </div>
  );
};

const Card = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalOnceLoading, setModalOnceLoading] = useState<boolean>(false);
  const [modalLoading, setModalLoading] = useState<boolean>(false);

  const handleAddCard = () => {
    setModalVisible(true);
  };
  const submitAdd = () => {
    // request methods
    setModalOnceLoading(true);
    setTimeout(() => {
      setModalOnceLoading(false);
      setModalVisible(false);
    }, 2000);
  };
  const submitAddAgain = () => {
    setModalLoading(true);
    setTimeout(() => {
      setModalLoading(false);
    }, 2000);
  };
  const cancelAdd = () => {
    setModalVisible(false);
  };
  return (
    <div>
      <CardHeader onClick={handleAddCard}></CardHeader>

      <div className="card">
        {new Array(100).fill(0).map((item) => {
          const data = {
            src: '',
            title: 'rxcenter',
          };
          return <CardItem {...data}></CardItem>;
        })}
      </div>
      <Modal
        visible={modalVisible}
        title="新建收藏"
        centered
        confirmLoading={modalLoading}
        onCancel={cancelAdd}
        footer={[
          <Button onClick={cancelAdd}>取消</Button>,
          <Button loading={modalOnceLoading} onClick={submitAdd}>
            添加
          </Button>,
          <Button loading={modalLoading} onClick={submitAddAgain}>
            再次添加
          </Button>,
        ]}
      >
        <Form>
          <Form.Item label="名称">
            <Input></Input>
          </Form.Item>
          <Form.Item label="地址">
            <Input></Input>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Card;
