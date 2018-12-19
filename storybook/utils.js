// @flow

import React from 'react';
import styled from 'react-emotion';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import * as boost from '../src';
import { StateContainer } from './StateContainer';

const { EightBaseBoostProvider, createTheme, ...components } = boost;

const theme = createTheme({
});

const Root = styled('div')`
  margin: 32px;
`;

const ThemeDecorator = (storyFn) => (
  <EightBaseBoostProvider theme={ theme }>
    <Root>{ storyFn() }</Root>
  </EightBaseBoostProvider>
);

export const asStory = (name: string, module: *, init: *) => {
  init(
    storiesOf(name, module)
      .addDecorator((story, context) => withInfo()(story)(context))
      .addDecorator(story => story())
      .addDecorator(ThemeDecorator)
    , { ...components, StateContainer },
  );
};
