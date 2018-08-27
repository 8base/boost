// @flow
import React from 'react';
import { createStyledTag, createTheme } from '../../utils';
import { offsetModifier } from './common';
import type { PropSizes } from '../../types';

type CardBodyProps = {|
  children: React$Node,
  padding?: PropSizes,
  scrollable?: boolean,
|}

const name = 'cardBody';

const cardBodyTheme = createTheme(name, {
  modifiers: {
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

export { cardBodyTheme, CardBody };
