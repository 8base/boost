// @flow

import { atomsTheme } from '../atoms';
import { moleculesTheme } from '../molecules';
import { COLORS } from './colors';
import { SIZES } from './sizes';
import { Z_INDEX } from './zIndex';

const theme = {
  ...atomsTheme,
  ...moleculesTheme,
};

export const defaultTheme = {
  COLORS,
  SIZES,
  Z_INDEX,
  ...Object.keys(theme).reduce((result, componentName) => ({
    ...result,
    [componentName]: theme[componentName],
  }), {}),
};
