// @flow
import React from 'react';

import { CardHeader, cardHeaderTheme } from './CardHeader';
import { CardBody, cardBodyTheme } from './CardBody';
import { CardSection, cardSectionTheme } from './CardSection';
import { CardFooter, cardFooterTheme } from './CardFooter';

import { Paper } from '../Paper';
import type { PropSizes } from '../../types';

type CardPlateProps = {
  children: React$Node | (Object) => React$Node,
  padding?: PropSizes,
  paddingOuter?: PropSizes,
  style?: Object,
  stretch?: boolean,
  borderRadius?: 'top' | 'bottom' | 'all',
};

const theme = {
  ...cardHeaderTheme,
  ...cardBodyTheme,
  ...cardSectionTheme,
  ...cardFooterTheme,
};

const Card = ({ children, paddingOuter, padding, ...rest }: CardPlateProps) => (
  <Paper { ...rest } padding={ paddingOuter }>
    {
      typeof children === 'function'
        ?
        children(rest)
        :
        React.Children.map(children, child =>
          React.cloneElement(child, { padding: child.props.padding || padding }),
        )
    }
  </Paper>
);


Card.defaultProps = {
  padding: 'md',
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Section = CardSection;
Card.Footer = CardFooter;

export { Card, theme };
