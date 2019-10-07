import React from 'react';
import styled from '@emotion/styled';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { BoostProvider, createTheme } from '../src';
import './tag-reset.css';

const theme = createTheme();

const Root = styled('div')`
  padding: 32px;
  height: 100%;
`;

addParameters({
  options: {
    showPanel: false,
  },
});

addDecorator((storyFn) => (
  <BoostProvider theme={ theme }>
    <Root>
      { storyFn() }
    </Root>
  </BoostProvider>
));

configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);
