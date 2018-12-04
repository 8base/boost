// @flow
import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';
import { offsetModifier } from './common';
import type { PropSizes } from '../../types';

type CardBodyProps = {|
  children: React$Node,
  padding?: PropSizes,
  scrollable?: boolean,
  stretch?: boolean,
|}

const name = 'cardBody';

const cardBodyTheme = createComponentTheme(name, {
  modifiers: {
    stretch: {
      display: 'flex',
      flex: 1,
      width: '100%',
    },
    ...offsetModifier,
  },
});

const CardBodyTag = createStyledTag(name, (props: CardBodyProps) => ({
  overflow: props.scrollable && 'auto',
}));

const CardBody = ({ children, ...rest }: CardBodyProps) => (
  <CardBodyTag { ...rest } tagName="div">
    { children }
  </CardBodyTag>
);

CardBody.defaultProps = {
  padding: 'md',
};

export { cardBodyTheme, CardBody };
