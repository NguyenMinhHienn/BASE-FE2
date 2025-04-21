import { Table } from 'antd';
import React from 'react';

const ListProduct = () => {
  const columns = [
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>
      <Table dataSource={[]} columns={columns} rowKey="id" pagination={false} />
    </div>
  );
};

export default ListProduct;