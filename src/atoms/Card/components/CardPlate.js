// @flow
import React from 'react';
import { Paper } from '../../Paper';

type CardPlateProps = {|
  children: React$Node,
  offset: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl',
|}

const CardPlate = ({ children, offset, ...rest }: CardPlateProps) => (
  <Paper { ...rest } >
    {
      React.Children.map(children, child =>
        React.cloneElement(child, { offset }),
      )
    }
  </Paper>
);

CardPlate.defaultProps = {
  offset: 'md',
};

export { CardPlate };
