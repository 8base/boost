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

const cardFooterTheme = createComponentTheme(name, ({ COLORS }: *): * => ({
  root: {
    borderTop: `1px solid ${COLORS.DSM.GREY_COLORS.DSM_LIGHT_GREY_2}`,
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

export { cardFooterTheme, CardFooter };
