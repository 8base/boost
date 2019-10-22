// @flow

import { theme } from '../components/theme';
import { COLORS } from './colors';
import { SIZES } from './sizes';
import { Z_INDEX } from './zIndex';
import { FONTS } from './fonts';

export type ThemeConstatns = {
  COLORS: Object,
  SIZES: Object,
  Z_INDEX: Object,
  FONTS: Object,
};

export type ComponentTheme = {
  root?: Object | (props: Object) => Object,
  modifiers?: Object,
  globals?: Object | string,
}

export type RawTheme = {
  COLORS: Object,
  SIZES: Object,
  Z_INDEX: Object,
  FONTS: Object,
  components: {
    [key: string]: ComponentTheme | (ThemeConstatns) => ComponentTheme,
  },
};

export type Theme = {
  COLORS: typeof COLORS,
  SIZES: typeof SIZES,
  Z_INDEX: typeof Z_INDEX,
  FONTS: typeof FONTS,
  components: {
    [key: string]: ComponentTheme,
  },
};

export const defaultRawTheme: RawTheme = {
  COLORS,
  SIZES,
  Z_INDEX,
  FONTS,
  components: {
    ...Object.keys(theme).reduce((result, componentName) => ({
      ...result,
      [componentName]: theme[componentName],
    }), {}),
  },
};
