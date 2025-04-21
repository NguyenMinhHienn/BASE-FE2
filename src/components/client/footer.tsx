import React from 'react';

const ClientFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} WEB NÀY LÀ CỦA HIENTHODIEN</p>
        <p>
          Follow me on{' '}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Facebook
          </a>{' '}
          and{' '}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Twitter
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default ClientFooter;