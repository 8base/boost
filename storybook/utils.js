// @flow

import React from 'react';
import styled from 'react-emotion';
import { storiesOf } from '@storybook/react';
import * as boost from '../src';
import { withInfo } from '@storybook/addon-info';

const { EightBaseBoostProvider, ...components } = boost;

const Root = styled('div')`
  margin: 32px;
`;

const ThemeDecorator = (storyFn) => (
  <EightBaseBoostProvider>
    <Root>{ storyFn() }</Root>
  </EightBaseBoostProvider>
);

export const asStory = (name: string, module: *, init: *) => {
  init(
    storiesOf(name, module)
      .addDecorator((story, context) => withInfo()(story)(context))
      .addDecorator(story => story())
      .addDecorator(ThemeDecorator)
    , components,
  );
};
