// @flow

import merge from 'deepmerge';
import { defaultRawTheme, type Theme, type RawTheme } from './defaultTheme';


export const createTheme = (extendTheme?: $Shape<RawTheme> = {}): Theme => {
  const { COLORS, SIZES, Z_INDEX, components } = defaultRawTheme;

  return {
    COLORS: {
      ...defaultRawTheme.COLORS, ...(extendTheme.COLORS || {}),
    },
    SIZES: {
      ...defaultRawTheme.SIZES, ...(extendTheme.SIZES || {}),
    },
    Z_INDEX: {
      ...defaultRawTheme.Z_INDEX, ...(extendTheme.Z_INDEX || {}),
    },
    components: Object.keys(components).reduce((result, componentName: string) => {
      const defaultComponentTheme = typeof components[componentName] === 'function'
        ? components[componentName](COLORS, SIZES, Z_INDEX)
        : components[componentName];

      const extendThemeComponets = extendTheme.components || {};
      const customComponentTheme = typeof extendThemeComponets[componentName] === 'function'
        ? extendThemeComponets[componentName](COLORS, SIZES, Z_INDEX)
        : extendThemeComponets[componentName] || {};

      return {
        ...result,
        [componentName]: merge(defaultComponentTheme, customComponentTheme),
      };
    }, {}),
  };
};
