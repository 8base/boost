// @flow
import React from 'react';
import { createStyledTag, createTheme } from '../../utils';
import { offsetModifier } from './common';

type CardBodyProps = {|
  children: React$Node,
|}

const name = 'cardBody';

const cardBodyTheme = createTheme(name, {
  modifiers: {
    ...offsetModifier,
  },
});

const CardBodyTag = createStyledTag(name, {});

const CardBody = ({ children, ...rest }: CardBodyProps) => (
  <CardBodyTag { ...rest } tagName="div">
    { children }
  </CardBodyTag>
);

export { cardBodyTheme, CardBody };
