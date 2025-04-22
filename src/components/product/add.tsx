import React from 'react';
import { Button } from 'antd';

const AddProduct = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/2">
        <h1 className="text-2xl font-bold mb-4">Thêm sản phẩm</h1>
        <form className="bg-white p-6 rounded shadow-md">
        <div>
            <label htmlFor="title" style={{ fontWeight: 'bold' }}>Tên Sản Phẩm</label>
            <input
              id="title"
              {...register("title", {
                required: "Tên không được để trống",
                minLength: {
                  value: 6,
                  message: "Tối thiểu 6 ký tự"
                }
              })}
              placeholder="Nhập tên sản phẩm"
              style={{
                width: '100%',
                border: 5
              }}
            />
            {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
          </div>
          
          <div style={{ marginTop: '1rem' }}>
            <Button type="primary" htmlType="submit">
              Thêm
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;