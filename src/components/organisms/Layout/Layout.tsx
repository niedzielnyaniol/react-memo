import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Menu, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { StyledLayout } from './Layout.styles';

import LayoutProps from './Layout.types';
import config from '../../../config';
import { RootState } from '../../../utils/store';

const { Header, Content, Footer } = StyledLayout;
const { ROUTES } = config;

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const gameState = useSelector((state: RootState) => state.game.state);
  const history = useHistory();

  const handleItemClick = (route: string) => {
    if (gameState === 'started') {
      Modal.confirm({
        title: 'Watch out!',
        icon: <ExclamationCircleOutlined />,
        content: 'You are during game. Are you want to abort?',
        okText: 'No, i want to stay',
        cancelText: 'Yes, lets go!',
        onCancel() {
          history.push(route);
        },
      });
    } else {
      history.push(route);
    }
  };

  return (
    <StyledLayout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item onClick={() => handleItemClick(ROUTES.HOME.href)}>Home</Menu.Item>
          <Menu.Item onClick={() => handleItemClick(ROUTES.LEADERBOARD.href)}>Leaderboard</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>Simple Memo Game ©2021 Simple Memo Game LTD.</Footer>
    </StyledLayout>
  );
};

export default Layout;
