// @flow

import { storiesOf } from '@storybook/react';

import * as boost from '../src';
import { StateContainer } from './StateContainer';

const { BoostProvider, createTheme, ...components } = boost;

export const asStory = (name: string, module: *, init: *) => {
  init(
    storiesOf(name, module)
    // .addDecorator((story, context) => withInfo()(story)(context))
    // .addDecorator(story => story())
    // .addDecorator(ThemeDecorator)
    , { ...components, StateContainer },
  );
};
