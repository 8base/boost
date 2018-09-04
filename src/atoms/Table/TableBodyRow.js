// @flow
import React from 'react';

import { Grid } from '../Grid';
import { createStyledTag, createTheme } from '../../utils';

type TableBodyRowProps = {|
  children?: React$Node,
|};

const name = 'tableBodyRow';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const TableBodyRowTag = createStyledTag(name, () => ({
  display: 'grid',
  borderBottom: '1px solid #ccc',
  height: '6rem',

  '&:last-child': {
    borderBottom: 'none',
  },
}));

function TableBodyRow({
  children,
  ...rest
  }: TableBodyRowProps) {
  return <TableBodyRowTag { ...rest } tagName={ Grid.Layout }>{ children }</TableBodyRowTag>;
}

export { TableBodyRow, theme };
