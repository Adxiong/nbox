import { Card, Space } from 'antd';

/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-07-29 23:05:46
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-08-04 00:50:39
 */
const Tools = () => {
  return (
    <div>
      <Space wrap>
        {new Array(100).fill(0).map((item) => {
          return (
            <Card
              size="default"
              style={{ width: 350, height: 250 }}
              title="小工具"
              extra={<a>详情</a>}
            ></Card>
          );
        })}
      </Space>
    </div>
  );
};

export default Tools;
