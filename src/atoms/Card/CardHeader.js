// @flow
import React from 'react';
import { createStyledTag, createTheme, getThemeStyle } from '../../utils';
import { offsetModifier } from './common';
import type { PropSizes } from '../../types';

type CardHeaderProps = {|
  children: React$Node,
  padding?: PropSizes,
|}

const name = 'cardHeader';

const cardHeaderTheme = createTheme(name, (colors: *): * => ({
  cardHeader: {
    borderBottom: `1px solid ${colors.PRIMARY_BORDER_COLOR}`,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  modifiers: {
    ...offsetModifier,
  },
}));

const CardHeaderTag = createStyledTag(name, props => ({
  ...getThemeStyle(props, name).cardHeader,
}));

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

export { cardHeaderTheme, CardHeader };
