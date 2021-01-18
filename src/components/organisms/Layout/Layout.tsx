import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Menu, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { StyledContent, StyledLayout, StyledContentWrapper, StyledMenuWrapper } from './Layout.styles';

import LayoutProps from './Layout.types';
import config from '../../../config';
import { RootState } from '../../../utils/store';

const { Header, Footer } = StyledLayout;
const { ROUTES } = config;

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const gameState = useSelector((state: RootState) => state.game.state);
  const history = useHistory();

  const handleItemClick = (route: string) => {
    if (gameState === 'started') {
      Modal.confirm({
        title: 'Watch out!',
        icon: <ExclamationCircleOutlined />,
        content: 'You are during game. Do you want to abort?',
        okText: 'Yes',
        cancelText: 'No',
        onOk() {
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
        <StyledContent>
          <StyledMenuWrapper>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => handleItemClick(ROUTES.HOME.href)}>Home</Menu.Item>
              <Menu.Item onClick={() => handleItemClick(ROUTES.LEADERBOARD.href)}>Leaderboard</Menu.Item>
            </Menu>
          </StyledMenuWrapper>
        </StyledContent>
      </Header>
      <StyledContent>
        <StyledContentWrapper>{children}</StyledContentWrapper>
      </StyledContent>
      <Footer style={{ textAlign: 'center' }}>Simple Memo Game ©2021 Simple Memo Game LTD.</Footer>
    </StyledLayout>
  );
};

export default Layout;
