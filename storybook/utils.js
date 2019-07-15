// @flow

import React from 'react';
import styled from 'react-emotion';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import * as boost from '../src';
import { StateContainer } from './StateContainer';

const { BoostProvider, createTheme, ...components } = boost;

const theme = createTheme({
  components: {
    codeNumeric: {
      /* root: (props, styles) => ({
        ...styles,
        backgroundColor: 'red',
      }), */
    },
  },
});

const Root = styled('div')`
  padding: 32px;
  height: 100%;
`;


const ThemeDecorator = (storyFn) => (
  <BoostProvider theme={ theme }>
    <Root>
      { storyFn() }
    </Root>
  </BoostProvider>
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
