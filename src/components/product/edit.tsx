import React from 'react';
import { Form, Input, Button } from 'antd';

const EditProduct = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/2">
        <h1 className="text-2xl font-bold mb-4">Cập nhật sản phẩm</h1>
        <Form layout="vertical">
          <Form.Item
            label="Tên"
            name="name"
            rules={[
              { required: true, message: 'Tên không được để trống' },
              { min: 6, message: 'Tên phải trên 6 ký tự' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditProduct;