// @flow

import React from 'react';
import styled from '@emotion/styled';
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

const isClassComponent = (component) => typeof component === 'function' &&
  !!component.prototype.isReactComponent;

const isFunctionComponent = (component) =>
  typeof component === 'function' &&
  String(component).includes('return React.createElement');

const isReactComponent = (component) =>
  isClassComponent(component) ||
  isFunctionComponent(component);

const updateSubComponentDisplayName = (component:Object) => {
  for (const key in component) {
    if (isReactComponent(component[key])) {
      component[key].displayName = `${component.name}.${key}`;
    }
  }
};

Object.entries(components).map(([, component]) => updateSubComponentDisplayName(component));

export const asStory = (name: string, module: *, init: *) => {
  init(
    storiesOf(name, module)
      .addDecorator((story, context) => withInfo()(story)(context))
      .addDecorator(story => story())
      .addDecorator(ThemeDecorator)
    , { ...components, StateContainer },
  );
};
