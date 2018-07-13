// @flow
import React from 'react';
import { createStyledTag, createTheme, getThemeStyle } from '../../utils';
import { offsetModifier } from './common';

type CardFooterProps = {|
  children: React$Node,
|}

const name = 'cardFooter';

const cardFooterTheme = createTheme(name, (colors: *): * => ({
  cardFooter: {
    borderTop: `1px solid ${colors.PRIMARY_BORDER_COLOR}`,
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

export { cardFooterTheme, CardFooter };
