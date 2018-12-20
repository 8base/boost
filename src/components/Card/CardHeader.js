// @flow
import React from 'react';
import { createStyledTag, createComponentTheme } from '../../utils';
import type { PropSizes } from '../../types';

type CardHeaderProps = {|
  children: React$Node,
  padding?: PropSizes,
|}

const name = 'cardHeader';

const cardHeaderTheme = createComponentTheme(name, ({ COLORS }: *): * => ({
  root: {
    borderBottom: `1px solid ${COLORS.DSM.GREY_COLORS.DSM_LIGHT_GREY_2}`,
  },
  modifiers: {
    padding: {
      none: { padding: '0' },
      xs: { padding: '0 4px' },
      sm: { padding: '0 12px' },
      md: { padding: '0 20px' },
      lg: { padding: '0 24px' },
      xl: { padding: '0 32px' },
    },
  },
}));

const CardHeaderTag = createStyledTag(name, {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  flexShrink: 0,
  height: '64px',
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
