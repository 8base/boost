// @flow
import React, { PureComponent } from 'react';

import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardSection } from './CardSection';
import { CardFooter } from './CardFooter';

import { Paper } from '../Paper';
import type { PropSizes } from '../../types';

type CardPlateProps = {
  children: React$Node | (Object) => React$Node,
  paddingOuter?: PropSizes,
  style?: Object,
  stretch?: boolean,
  borderRadius?: 'top' | 'bottom' | 'all',
};


class Card extends PureComponent<CardPlateProps> {

  static Header = CardHeader;
  static Body = CardBody;
  static Section = CardSection;
  static Footer = CardFooter;


  render() {
    const { children, paddingOuter, ...rest } = this.props;

    return (
      <Paper { ...rest } padding={ paddingOuter }>
        {
          typeof children === 'function'
            ?
            children(rest)
            :
            children
        }
      </Paper>
    );
  }
}


export { Card };
