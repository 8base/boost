// @flow
import React from 'react';

import { Grid } from '../Grid';
import { createStyledTag, createTheme } from '../../utils';

type TablePlateProps = {|
  children?: React$Node,
|};

const name = 'tablePlate';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const TablePlateTag = createStyledTag(name, () => ({}));

function TablePlate({
  children,
  ...rest
  }: TablePlateProps) {
  return <TablePlateTag { ...rest } tagName={ Grid.Layout }>{ children }</TablePlateTag>;
}

TablePlate.defaultProps = {
  rows: 'auto 1fr auto',
  stretch: true,
};

export { TablePlate, theme };
