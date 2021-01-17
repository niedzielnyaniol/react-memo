import React from 'react';
import { Form, Input, Button, Card, Radio } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import NewGameFormProps from './NewGameForm.types';

import config from '../../../config';

import { StyledRadioButton } from './NewGameForm.styles';

const { BOARD_SIZES } = config;

const NewGameForm = ({ username = '', boardSize = 'small', onSubmit }: NewGameFormProps): JSX.Element => (
  <Card>
    <Form initialValues={{ username, boardSize }} onFinish={onSubmit} layout="vertical" requiredMark={false}>
      <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input size="large" placeholder="Username" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item name="boardSize" label="Board Size">
        <Radio.Group buttonStyle="solid">
          {Object.entries(BOARD_SIZES).map(([difficultyLevel, dimensions]) => (
            <StyledRadioButton value={difficultyLevel}>
              {difficultyLevel} ({dimensions.cols}x{dimensions.rows})
            </StyledRadioButton>
          ))}
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          Start
        </Button>
      </Form.Item>
    </Form>
  </Card>
);

export default NewGameForm;
