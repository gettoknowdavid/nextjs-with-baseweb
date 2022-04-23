import React from 'react';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <>
      {/* Seo Component */}

      {/* Header Component */}

      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
