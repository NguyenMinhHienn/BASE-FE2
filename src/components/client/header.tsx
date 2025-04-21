import React from 'react';
import { Link } from 'react-router-dom';

const ClientHeader = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">HIENTHODIEN</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/list" className="hover:underline">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to="/add" className="hover:underline">
                Thêm sản phẩm
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:underline">
                Đăng ký
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:underline">
                Đăng nhập
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default ClientHeader;