// @flow

import styled from 'react-emotion';
import fp from 'lodash/fp';
import { Tag } from '../common';

const getThemeModifiers = (themeName: string, props: *) =>
  fp.getOr({}, ['theme', themeName, 'modifiers'], props);

const getModifierValue = (themeName: string, modifierName: string, props: Object) => (
  props[modifierName] || props.theme[themeName].defaults[modifierName]
);

const getModifierStyles = (themeName: string, modifierName: string, props: Object) => {
  const modifierValue = getModifierValue(themeName, modifierName, props);
  const themeModifiers = getThemeModifiers(themeName, props);

  return typeof modifierValue === 'boolean'
    ? themeModifiers[modifierName] || {}
    : themeModifiers[modifierName][modifierValue] || {};
};

const getAllModifiersStyles = (themeName: string, props: Object) =>
  Object.keys(getThemeModifiers(themeName, props))
    .reduce((result, modifierName) => ({
      ...result,
      ...getModifierStyles(themeName, modifierName, props),
    }), {});

const createStyledTag = (themeName: string, styles: Object) => styled(Tag)(
  (props: Object) => ({
    ...(typeof styles === 'function' ? styles(props) : styles),
    ...getAllModifiersStyles(themeName, props),
  }),
);

export { createStyledTag };
