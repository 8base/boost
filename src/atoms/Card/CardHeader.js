// @flow
import React from 'react';
import { createStyledTag, createComponentTheme } from '../../utils';
import { offsetModifier } from './common';
import type { PropSizes } from '../../types';

type CardHeaderProps = {|
  children: React$Node,
  padding?: PropSizes,
|}

const name = 'cardHeader';

const cardHeaderTheme = createComponentTheme(name, ({ COLORS }: *): * => ({
  root: {
    borderBottom: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
  },
  modifiers: {
    ...offsetModifier,
  },
}));

const CardHeaderTag = createStyledTag(name, {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  flexShrink: 0,
});

const CardHeader = ({
  children,
  ...rest
  }: CardHeaderProps) => {
  return (
    <CardHeaderTag { ...rest } tagName="div">
      { children }
    </CardHeaderTag>
  );
};

CardHeader.defaultProps = {
  padding: 'md',
};

export { cardHeaderTheme, CardHeader };
