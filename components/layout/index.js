import React from 'react';
import PropTypes from 'prop-types';
import { Heading, HeadingLevel } from 'baseui/heading';

function Layout({ children }) {
  return (
    <>
      {/* Seo Component */}

      <header>
        <HeadingLevel>
          <Heading>NextJS</Heading>
        </HeadingLevel>
      </header>

      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
