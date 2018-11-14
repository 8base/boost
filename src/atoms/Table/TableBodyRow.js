// @flow
import React from 'react';

import { Grid } from '../Grid';
import { createStyledTag, createTheme } from '../../utils';

type TableBodyRowProps = {
  children?: React$Node,
};

const name = 'tableBodyRow';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const TableBodyRowTag = createStyledTag(name, (props: *) => ({
  display: 'grid',
  borderBottom: `1px solid ${props.theme.COLORS.LIGHT_GRAY1}`,
  height: '6rem',
}));

function TableBodyRow({
  children,
  ...rest
  }: TableBodyRowProps) {
  return <TableBodyRowTag { ...rest } tagName={ Grid.Layout }>{ children }</TableBodyRowTag>;
}

TableBodyRow.displayName = 'TableBodyRow';

export { TableBodyRow, theme };
