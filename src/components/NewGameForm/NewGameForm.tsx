import React from 'react';
import { Form, Input, Button, Card, Radio } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export type NewGameFormProps = {
  username?: string;
  boardSize?: 'small' | 'medium' | 'large';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (values: any) => void;
};

const NewGameForm = ({ username = '', boardSize = 'small', onSubmit }: NewGameFormProps): JSX.Element => (
  <Card>
    <Form initialValues={{ username, boardSize }} onFinish={onSubmit} layout="vertical" requiredMark={false}>
      <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item name="boardSize" label="Board Size">
        <Radio.Group buttonStyle="solid">
          <Radio.Button value="small">Small (4x4)</Radio.Button>
          <Radio.Button value="medium">Medium (6x6)</Radio.Button>
          <Radio.Button value="large">Large (10x10)</Radio.Button>
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
