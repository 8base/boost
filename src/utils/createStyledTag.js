import styled from 'react-emotion'
import { Tag } from '../common';

const getPropValue = (props, themeName, modifierName) => (
  props[modifierName] || props.theme[themeName].defaults[modifierName]
)

const getModifierStyles = (props, themeName, modifierName) => {
  const modifierValue = getPropValue(props, themeName, modifierName);

  return typeof modifierValue === 'boolean'
    ? props.theme[themeName].modifiers[modifierName]
    : props.theme[themeName].modifiers[modifierName][modifierValue]
}

const createStyledTag = (themeName, styles) => styled(Tag)((props) => ({
  ...(typeof styles === 'function' ? styles(props) : styles),
  ...Object.keys(props.theme[themeName].modifiers).reduce((result, modifierName) => ({
    ...result,
    ...(getModifierStyles(props, themeName, modifierName) || {}),
  }), {}),
}));

export { createStyledTag };
