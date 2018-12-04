// @flow

import React from 'react';

import { GREY_COLORS } from '../../theme/dsmColors';
import { createStyledTag, createComponentTheme } from '../../utils';

type SecondaryNavigationPlateProps = {
  children: React$Node,
};

const THEME_NAME = 'secondaryNavigationPlate';

export const theme = createComponentTheme(THEME_NAME, {});

const StyledTag = createStyledTag(THEME_NAME, {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: 'auto',

  backgroundColor: GREY_COLORS.DSM_LIGHT_GREY_3,
});

export const SecondaryNavigationPlate = ({ children, ...rest }: SecondaryNavigationPlateProps) => (
  <StyledTag { ...rest } tagName="nav">
    { children }
  </StyledTag>
);

