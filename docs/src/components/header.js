import { Link } from 'gatsby';
import React from 'react';
import styled from 'react-emotion';
import { Grid } from '@8base/boost';

import logo from '../images/8base-logo-red-black.svg';

const HeaderTag = styled(Grid.Layout)({
  height: '6rem',
  padding: '0 2rem',
  backgroundColor: '#fff',
  borderBottom: '1px solid #D0D7DD',
  flex: 1,
  position: 'sticky',
  top: 0,
  marginBottom: 48,
  zIndex: 100,
});

const HeaderLogoTag = styled('img')({
  height: '3rem',
});

const Header = () => (
  <HeaderTag columns="1fr auto" gap="lg">
    <Grid.Box justifyContent="center">
      <Link to="/">
        <HeaderLogoTag src={logo} alt="8base logo" />
      </Link>
    </Grid.Box>
    <Grid.Box justifyContent="center">
      <Link to="/components">
        Components
      </Link>
    </Grid.Box>
  </HeaderTag>
);

export { Header };
