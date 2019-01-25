// @flow

import merge from 'deepmerge';
import { defaultRawTheme, type Theme, type RawTheme, type ComponentTheme } from './defaultTheme';

const execFunction = (func: Object | (props: Object) => Object = {}, arg: Object) => {
  return typeof func === 'function'
    ? func(arg)
    : func;
};

const mergeComponentRoots = (originalRoot: Function | Object = {}, extendedRoot: Function | Object = {}): Function | Object => {
  if (typeof originalRoot !== 'function' && typeof extendedRoot !== 'function') {
    return merge(originalRoot, extendedRoot);
  } else {
    return (props: Object) => {
      const originalRootStyle = execFunction(originalRoot, props);

      return typeof extendedRoot === 'function'
        ? extendedRoot(props, originalRootStyle)
        : merge(originalRootStyle, extendedRoot);
    };
  }
};

const mergeComponentThemes = (originalTheme: ComponentTheme = {}, extendedTheme: ComponentTheme = {}) => {
  const root = mergeComponentRoots(originalTheme.root, extendedTheme.root);
  const mergedTheme = merge(originalTheme, extendedTheme);

  return {
    ...mergedTheme,
    root,
  };
};


const parseThemes = (originalRawTheme: RawTheme, extendedTheme?: $Shape<RawTheme> = {}): Theme => {
  const { components } = originalRawTheme;

  const themeConstants = {
    COLORS: {
      ...originalRawTheme.COLORS, ...(extendedTheme.COLORS || {}),
    },
    SIZES: {
      ...originalRawTheme.SIZES, ...(extendedTheme.SIZES || {}),
    },
    Z_INDEX: {
      ...originalRawTheme.Z_INDEX, ...(extendedTheme.Z_INDEX || {}),
    },
  };

  return {
    ...themeConstants,
    components: Object.keys(components)
      .reduce(
        (result, componentName: string) => {
          const extendThemeComponets = extendedTheme.components || {};

          const defaultComponentTheme = execFunction(components[componentName], themeConstants);
          const customComponentTheme = execFunction(extendThemeComponets[componentName], themeConstants);

          return {
            ...result,
            [componentName]: mergeComponentThemes(defaultComponentTheme, customComponentTheme),
          };
        },
        {},
      ),
  };
};


const createTheme = (extendTheme?: $Shape<RawTheme> = {}): Theme => {

  return parseThemes(defaultRawTheme, extendTheme);
};

export {
  createTheme,
  parseThemes,
};

