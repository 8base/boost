// @flow
import React from 'react';
import { createStyledTag, createComponentTheme } from '../../utils';
import { offsetModifier } from './common';
import type { PropSizes } from '../../types';

type CardFooterProps = {|
  children: React$Node,
  padding?: PropSizes,
|}

const name = 'cardFooter';

const cardFooterTheme = createComponentTheme(name, (colors: *): * => ({
  root: {
    borderTop: `1px solid ${colors.PRIMARY_BORDER_COLOR}`,
  },
  modifiers: {
    ...offsetModifier,
  },
}));

const CardFooterTag = createStyledTag(name, {
  flexShrink: 0,
});

const CardFooter = ({ children, ...rest }: CardFooterProps) => (
  <CardFooterTag { ...rest } tagName="div">
    { children }
  </CardFooterTag>
);

CardFooter.defaultProps = {
  padding: 'md',
};

export { cardFooterTheme, CardFooter };
