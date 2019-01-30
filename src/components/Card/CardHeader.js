// @flow
import React, { PureComponent } from 'react';

import { CardHeaderTag } from './Card.theme';
import type { PropSizes } from '../../types';

type CardHeaderProps = {
  children: React$Node,
  padding?: PropSizes,
}

class CardHeader extends PureComponent<CardHeaderProps> {
  static defaultProps = {
    padding: 'md',
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <CardHeaderTag { ...rest } tagName="div">
        { children }
      </CardHeaderTag>
    );
  }
}


export { CardHeader };
