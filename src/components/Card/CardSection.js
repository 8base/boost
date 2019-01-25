// @flow
import React from 'react';

import { CardSectionTag } from './Card.theme';
import type { PropSizes } from '../../types';

type CardSectionProps = {|
  children: React$Node,
  padding?: PropSizes,
  stretch?: boolean,
  hoverable?: boolean,
|};


const CardSection = ({ children, ...rest }: CardSectionProps) => (
  <CardSectionTag { ...rest } tagName="div">
    { children }
  </CardSectionTag>
);

CardSection.defaultProps = {
  padding: 'md',
};

export { CardSection };
