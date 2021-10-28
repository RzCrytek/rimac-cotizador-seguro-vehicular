import React from 'react';
import Header from '../components/Header/Header';

const Layout = ({ children, pageId }) => {
  return (
    <div id="wrapper">
      <Header />
      <main id={pageId}>{children}</main>
    </div>
  );
};

export default Layout;
