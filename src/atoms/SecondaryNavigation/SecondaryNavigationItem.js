// @flow

import React from 'react';

import { NAVIGATION_COLORS } from '../../theme/dsmColors';
import { createStyledTag, createComponentTheme } from '../../utils';
import { Text } from '../typography/Text';

type SecondaryNavigationItemProps = {
  label: string,
};

const name = 'secondaryNavigationItem';

export const theme = createComponentTheme(name, (colors: *) => ({
  root: {
    height: '3rem',

    '&:hover': {
      backgroundColor: colors.WHITE,
    },

    '&.active': {
      backgroundColor: colors.WHITE,
    },
  },
}));

const StyledTag = createStyledTag(name, {
  display: 'flex',
  backgroundColor: 'inherit',
  textDecoration: 'none',
  userSelect: 'none',
  position: 'relative',
});

const SecondaryNavigationItemBar = createStyledTag(`${name}ItemBar`, {
  width: '0.5rem',
  backgroundColor: 'inherit',

  '.active > &': {
    backgroundColor: NAVIGATION_COLORS.DSM_DB_SELECTED,
  },
});

const SecondaryNavigationItemLabel = createStyledTag(`${name}ItemLabel`, {
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '2.0rem',
  backgroundColor: 'inherit',
  opacity: '0.9',
});

export const SecondaryNavigationItem = ({ label, ...rest }: SecondaryNavigationItemProps) => (
  <StyledTag { ...rest } >
    <SecondaryNavigationItemBar />
    <SecondaryNavigationItemLabel>
      <Text>
        { label }
      </Text>
    </SecondaryNavigationItemLabel>
  </StyledTag>
);

