import React from 'react';

import Head from 'next/head';

// components
import Navbar from '../Navbar/index';

// styles
import { GlobalStyle, Content } from './styles';

interface Props {
  title: string,
}

const Layout: React.FC<Props> = ({ children, title = 'Noon' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" rel="stylesheet"></link>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <GlobalStyle />
    <Navbar />
    <Content>
      {children}
    </Content>
  </div>
)

export default Layout
