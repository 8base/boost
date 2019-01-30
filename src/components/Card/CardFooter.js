// @flow
import React from 'react';

import { CardFooterTag } from './Card.theme';
import type { PropSizes } from '../../types';

type CardFooterProps = {
  children: React$Node,
  padding?: PropSizes,
}


const CardFooter = ({ children, ...rest }: CardFooterProps) => (
  <CardFooterTag { ...rest } tagName="div">
    { children }
  </CardFooterTag>
);

CardFooter.defaultProps = {
  padding: 'md',
};


export { CardFooter };
