import React from 'react';
import { Form, Input, Button } from 'antd';

const Register = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/3">
        <h1 className="text-2xl font-bold mb-4">Đăng ký tài khoản</h1>
        <Form layout="vertical">
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Email không được để trống' },
              { type: 'email', message: 'Email không hợp lệ' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: 'Mật khẩu không được để trống' },
              { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự' },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;