// @flow

import { atomsTheme } from '../atoms';
import { moleculesTheme } from '../molecules';
import { COLORS } from './colors';

const theme = {
  ...atomsTheme,
  ...moleculesTheme,
};

export const defaultTheme = {
  COLORS,
  ...Object.keys(theme).reduce((result, componentName) => ({
    ...result,
    [componentName]: theme[componentName],
  }), {}),
};
