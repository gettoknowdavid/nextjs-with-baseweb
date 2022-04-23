import React from 'react';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <>
      {/* Seo Component */}

      <body>

        {/* Header Component */}

        <main>{children}</main>
      </body>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
