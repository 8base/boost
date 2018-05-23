import React from 'react';
import styled from 'react-emotion';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { components, ThemeProvider, defaultTheme, resetGlobal } from '../src';
import { withInfo } from '@storybook/addon-info';

resetGlobal();

const Root = styled('div')`
  margin: 2rem;
`;

const ThemeDecorator = (storyFn) => (
  <Root>
    <BrowserRouter>
      <ThemeProvider theme={ defaultTheme }>
        { storyFn() }
      </ThemeProvider>
    </BrowserRouter>
  </Root>
);

export const asStory = (name, module, init) => {
  init(
    storiesOf(name, module)
      .addDecorator((story, context) => withInfo()(story)(context))
      .addDecorator(story => story())
      .addDecorator(ThemeDecorator)
    , components,
  );
};
