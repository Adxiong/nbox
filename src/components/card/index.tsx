/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-07-30 23:56:21
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-07-31 00:25:08
 */

import { Avatar, Button } from 'antd';
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

const CardHeader = () => {
  return (
    <div className="card-header">
      <span>xxx 分组共（xx）个内容</span>
      <Button>新建收藏</Button>
    </div>
  );
};

const Card = () => {
  return (
    <div>
      <CardHeader></CardHeader>

      <div className="card">
        {new Array(100).fill(0).map((item) => {
          const data = {
            src: '',
            title: 'rxcenter',
          };
          return <CardItem {...data}></CardItem>;
        })}
      </div>
    </div>
  );
};

export default Card;
