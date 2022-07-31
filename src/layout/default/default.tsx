/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-07-29 23:29:20
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-07-31 00:59:58
 */
import { Breadcrumb, Layout, Menu, MenuProps } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Content, Sider, Footer } = Layout;
import './style/index.less';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import React, { useEffect } from 'react';
import { MenuItemType } from 'rc-menu/lib/interface';

interface ItemType {
  key: string;
  icon: React.ReactElement;
  label: string;
  title?: string;
  path?: string;
}

const items: ItemType[] = [
  {
    key: 'favorites',
    icon: <UserOutlined />,
    label: '收藏',
    path: '/home/favorites',
  },
  {
    key: 'todo',
    icon: <UserOutlined />,
    label: '代办',
    path: '/home/todo',
  },
  {
    key: 'tools',
    icon: <UserOutlined />,
    label: '工具箱',
    path: '/home/tools',
  },
];

const Default = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    checkPath();
  });
  const checkPath = () => {
    if (!location.pathname.startsWith('/home')) {
      Navigate('/home/favorites');
    }
  };
  const HandleClickMenu = (item: MenuItemType) => {
    const path = items.filter((menuitem) => menuitem.key == item.key)[0]?.path;
    Navigate(path ?? '/');
  };
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Breadcrumb style={{ color: '#fff' }} separator=">">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Layout style={{ paddingTop: 64 }}>
        <Sider className="sider site-layout-background">
          <Menu
            items={items}
            mode="vertical"
            defaultSelectedKeys={['favorites']}
            onClick={HandleClickMenu}
            style={{ height: '100%', borderRight: 0 }}
          />
        </Sider>
        <Layout style={{ padding: '0 0 0 200px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 'auto',
              minHeight: 280,
              width: '90%',
            }}
          >
            <Outlet></Outlet>
          </Content>
          <Footer style={{ height: 100 }}>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Default;
