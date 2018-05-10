import React from 'react';
import styled from 'react-emotion';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { components, ThemeProvider, defaultTheme } from '../src';

const Root = styled('div')`
  margin: 2rem;
`;

export const asStory = (name, module, init) => {
  init(storiesOf(name, module).addDecorator(story => (
    <Root>
      <BrowserRouter>
        <ThemeProvider theme={ defaultTheme }>
          { story() }
        </ThemeProvider>
      </BrowserRouter>
    </Root>
  )), components);
};
