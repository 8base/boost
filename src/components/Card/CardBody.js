// @flow
import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';
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
    padding: {
      none: { padding: '0' },
      xs: { padding: '4px' },
      sm: { padding: '12px' },
      md: { padding: '20px' },
      lg: { padding: '24px' },
      xl: { padding: '32px' },
    },
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
