// @flow

import React from 'react';

import { GREY_COLORS } from '../../theme/dsmColors';
import { createStyledTag, createComponentTheme } from '../../utils';
import { SecondaryNavigationItem, theme as secondaryNavigationItemTheme } from './SecondaryNavigationItem';

type SecondaryNavigationProps = {
  children: React$Node,
};

const name = 'secondaryNavigation';

const secondaryNavigationTheme = createComponentTheme(name, {
  root: {
    backgroundColor: GREY_COLORS.DSM_LIGHT_GREY_3,
  },
});

const theme = {
  ...secondaryNavigationTheme,
  ...secondaryNavigationItemTheme,
};

const SecondaryNavigationTag = createStyledTag(name, {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: 'auto',
});

const SecondaryNavigation = ({ children, ...rest }: SecondaryNavigationProps) => (
  <SecondaryNavigationTag { ...rest } tagName="nav">
    { children }
  </SecondaryNavigationTag>
);

SecondaryNavigation.displayName = 'SecondaryNavigation';

SecondaryNavigation.Item = SecondaryNavigationItem;

export { SecondaryNavigation, theme };

