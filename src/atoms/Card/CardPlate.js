// @flow
import React from 'react';
import { Paper } from '../Paper';
import type { PropSizes } from '../../types';

type CardPlateProps = {|
  children: React$Node,
  padding?: PropSizes,
  paddingOuter?: PropSizes,
  style?: Object,
  stretch?: boolean,
  borderRadius?: 'top' | 'bottom' | 'all',
|};

const CardPlate = ({ children, paddingOuter, padding, ...rest }: CardPlateProps) => (
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

CardPlate.defaultProps = {
  padding: 'md',
};

export { CardPlate };
