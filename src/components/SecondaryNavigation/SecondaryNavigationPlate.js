// @flow

import React from 'react';

import { GREY_COLORS } from '../../theme/dsmColors';
import { createStyledTag, createComponentTheme } from '../../utils';

type SecondaryNavigationPlateProps = {
  children: React$Node,
};

const name = 'secondaryNavigationPlate';

export const theme = createComponentTheme(name, {
  root: {
    backgroundColor: GREY_COLORS.DSM_LIGHT_GREY_3,
  },
});

const StyledTag = createStyledTag(name, {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: 'auto',
});

export const SecondaryNavigationPlate = ({ children, ...rest }: SecondaryNavigationPlateProps) => (
  <StyledTag { ...rest } tagName="nav">
    { children }
  </StyledTag>
);

