// @flow

import React from 'react';
import styled from 'react-emotion';

import { NAVIGATION_COLORS } from '../../theme/dsmColors';
import { COLORS } from '../../theme/colors';
import { createStyledTag, createComponentTheme } from '../../utils';
import { Text } from '../typography/Text';

type SecondaryNavigationItemProps = {
  label: string,
};

const THEME_NAME = 'secondaryNavigationItem';

export const theme = createComponentTheme(THEME_NAME, {});

const StyledTag = createStyledTag(THEME_NAME, {
  display: 'flex',
  height: '3rem',
  backgroundColor: 'inherit',
  textDecoration: 'none',
  userSelect: 'none',
  position: 'relative',

  '&:hover': {
    backgroundColor: COLORS.WHITE,
  },

  '&.active': {
    backgroundColor: COLORS.WHITE,
  },
});

const SecondaryNavigationItemBar = styled('div')({
  width: '0.5rem',
  backgroundColor: 'inherit',

  '.active > &': {
    backgroundColor: NAVIGATION_COLORS.DSM_DB_SELECTED,
  },
});

const SecondaryNavigationItemLabel = styled('div')({
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

