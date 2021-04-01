// @flow

import styled from '@emotion/styled';
import fp from 'lodash/fp';
import { Tag } from '../common';
import { COLORS } from '../theme/colors';
import { SIZES } from '../theme/sizes';
import { Z_INDEX } from '../theme/zIndex';
import { FONTS } from '../theme/fonts';

type ThemeConstatns = {
  COLORS: typeof COLORS,
  SIZES: typeof SIZES,
  Z_INDEX: typeof Z_INDEX,
  FONTS: typeof FONTS,
}

const createComponentTheme = (
  name: string,
  theme: ((ThemeConstatns) => Object) | Object,
): {[string]: Object } => ({
  [name]: theme,
});

const getRootStyles = (themeName: string, props: *) => {
  const themeRoot = fp.get(['theme', 'components', themeName, 'root'], props);
  const omittedProps = fp.omit(['theme'], props);

  return typeof themeRoot === 'function'
    ? themeRoot(omittedProps)
    : themeRoot || {};
};

const getModifiersStyles = (themeName: string, props: Object) => {
  const themeModifiers = fp.getOr({}, ['theme', 'components', themeName, 'modifiers'], props);
  const omittedProps = fp.omit(['theme'], props);

  return Object.entries(themeModifiers)
    .reduce(
      (result, [modifierName, modifierData]) => {
        const modifierStyles = typeof modifierData === 'function'
          ? modifierData(omittedProps)
          : modifierData || {};

        const modifierValue = props[modifierName];

        let styles = {};

        if (typeof modifierValue !== 'boolean') {
          styles = modifierStyles[modifierValue] || {};
        } else if (modifierValue === true) {
          styles = themeModifiers[modifierName];
        }

        return { ...result, ...styles };
      },
      {},
    );
};

const createStyledTag = (themeName: string) => {

  const StyledTag = styled(Tag)(
    (props: Object) => {
      const { modifiers = {}, ...rest } = props;
      const propsForTheming = { ...rest, ...modifiers };

      return {
        ...getRootStyles(themeName, propsForTheming),
        ...getModifiersStyles(themeName, propsForTheming),
      };
    },
  );

  StyledTag.displayName = `Boost(${themeName})`;

  return StyledTag;
};


const createThemeTag = (themeName: string, theme?: Object | (ThemeConstatns) => Object = {}) => { //Function | { root?: Object, modifiers?: Object, defaults?: Object } = {}) => {

  return [
    createStyledTag(themeName),
    createComponentTheme(themeName, theme),
  ];
};


export { createStyledTag, createThemeTag };
