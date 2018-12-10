// @flow
import React from 'react';

import { Grid } from '../Grid';
import { createStyledTag, createComponentTheme } from '../../utils';

type TablePlateProps = {
  children?: React$Node,
  stretch?: boolean,
};

const name = 'tablePlate';

const theme = createComponentTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const TablePlateTag = createStyledTag(name);

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
