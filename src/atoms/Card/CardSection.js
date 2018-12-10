// @flow
import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';
import { offsetModifier } from './common';
import type { PropSizes } from '../../types';

type CardSectionProps = {|
  children: React$Node,
  padding?: PropSizes,
  stretch?: boolean,
  hoverable?: boolean,
|};

const name = 'cardSection';

const cardSectionTheme = createComponentTheme(name, (colors: *) => ({
  root: {
    '&:not(:last-child)': {
      borderBottom: `1px solid ${colors.PRIMARY_BORDER_COLOR}`,
    },
  },
  modifiers: {
    hoverable: {
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '0 0.2rem 1rem 0 rgba(208, 215, 221, 0.6)',
      },
    },
    stretch: {
      display: 'flex',
      flex: 1,
      width: '100%',
    },
    ...offsetModifier,
  },
}));

const CardSectionTag = createStyledTag(name, {});

const CardSection = ({ children, ...rest }: CardSectionProps) => (
  <CardSectionTag { ...rest } tagName="div">
    { children }
  </CardSectionTag>
);

CardSection.defaultProps = {
  padding: 'md',
};

export { cardSectionTheme, CardSection };
