// @flow

import { theme } from '../components/theme';
import { COLORS } from './colors';
import { SIZES } from './sizes';
import { Z_INDEX } from './zIndex';

export type ThemeConstatns = {
  COLORS: typeof COLORS,
  SIZES: typeof SIZES,
  Z_INDEX: typeof Z_INDEX,
};

export type RawTheme = {
  COLORS: typeof COLORS,
  SIZES: typeof SIZES,
  Z_INDEX: typeof Z_INDEX,
  components: {
    [key: string]: (ThemeConstatns) => Object,
  },
};

export type Theme = {
  COLORS: typeof COLORS,
  SIZES: typeof SIZES,
  Z_INDEX: typeof Z_INDEX,
  components: {
    [key: string]: Object,
  },
};

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
