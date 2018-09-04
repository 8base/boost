// @flow
import React from 'react';
import { createStyledTag, createTheme, getThemeStyle } from '../../utils';
import { offsetModifier } from './common';
import type { PropSizes } from '../../types';

type CardFooterProps = {|
  children: React$Node,
  padding?: PropSizes,
|}

const name = 'cardFooter';

const cardFooterTheme = createTheme(name, (colors: *): * => ({
  cardFooter: {
    borderTop: `1px solid ${colors.PRIMARY_BORDER_COLOR}`,
    flexShrink: 0,
  },
  modifiers: {
    ...offsetModifier,
  },
}));

const CardFooterTag = createStyledTag(name, props => ({
  ...getThemeStyle(props, name).cardFooter,
}));

const CardFooter = ({ children, ...rest }: CardFooterProps) => (
  <CardFooterTag { ...rest } tagName="div">
    { children }
  </CardFooterTag>
);

CardFooter.defaultProps = {
  padding: 'md',
};

export { cardFooterTheme, CardFooter };
