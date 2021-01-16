import React, { ReactNode } from 'react';
import { Menu } from 'antd';

import { StyledLayout } from './Layout.styles';

export type LayoutProps = {
  children: ReactNode;
};

const { Header, Content, Footer } = StyledLayout;

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <StyledLayout>
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>{children}</Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </StyledLayout>
);

export default Layout;
