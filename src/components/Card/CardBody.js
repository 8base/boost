// @flow
import React, { PureComponent } from 'react';

import { CardBodyTag } from './Card.theme';
import type { PropSizes } from '../../types';

type CardBodyProps = {
  children: React$Node,
  padding?: PropSizes,
  scrollable?: boolean,
  stretch?: boolean,
}


class CardBody extends PureComponent<CardBodyProps> {
  static defaultProps = {
    padding: 'md',
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <CardBodyTag { ...rest } tagName="div">
        { children }
      </CardBodyTag>
    );
  }
}


export { CardBody };
