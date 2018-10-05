// @flow
import React from 'react';

import { COLORS } from '../../theme';
import { createStyledTag, createTheme } from '../../utils';
import { offsetModifier } from './common';
import type { PropSizes } from '../../types';

type CardSectionProps = {|
  children: React$Node,
  padding?: PropSizes,
  stretch?: boolean,
|};

const name = 'cardSection';

const cardSectionTheme = createTheme(name, {
  modifiers: {
    stretch: {
      display: 'flex',
      flex: 1,
      width: '100%',
    },
    ...offsetModifier,
  },
});

const CardSectionTag = createStyledTag(name, {
  '&:not(:last-child)': {
    borderBottom: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
  },
});

const CardSection = ({ children, ...rest }: CardSectionProps) => (
  <CardSectionTag { ...rest } tagName="div">
    { children }
  </CardSectionTag>
);

CardSection.defaultProps = {
  padding: 'md',
};

export { cardSectionTheme, CardSection };
