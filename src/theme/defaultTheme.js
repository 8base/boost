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

export type RawTheme = {
  COLORS: typeof COLORS,
  SIZES: typeof SIZES,
  Z_INDEX: typeof Z_INDEX,
  components: {
    [key: string]: (COLORS: typeof COLORS, SIZES: typeof SIZES, Z_INDEX: typeof Z_INDEX) => Object,
  },
}

export type Theme = {
  COLORS: typeof COLORS,
  SIZES: typeof SIZES,
  Z_INDEX: typeof Z_INDEX,
  components: {
    [key: string]: Object,
  },
}


export const defaultRawTheme: RawTheme = {
  COLORS,
  SIZES,
  Z_INDEX,
  components: {
    ...Object.keys(theme).reduce((result, componentName) => ({
      ...result,
      [componentName]: theme[componentName],
    }), {}),
  },
};
