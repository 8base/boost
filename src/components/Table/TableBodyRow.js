// @flow
import React from 'react';

import { Grid } from '../Grid';
import { createStyledTag, createComponentTheme } from '../../utils';

type TableBodyRowProps = {
  children?: React$Node,
};

const name = 'tableBodyRow';

const theme = createComponentTheme(name, ({ COLORS }: *) => ({
  root: {
    height: '60px',
    borderBottom: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
  },
  modifiers: {
  },
  defaults: {
  },
}));

const TableBodyRowTag = createStyledTag(name, {
  display: 'grid',
});

function TableBodyRow({
  children,
  ...rest
  }: TableBodyRowProps) {
  return <TableBodyRowTag { ...rest } tagName={ Grid.Layout }>{ children }</TableBodyRowTag>;
}

TableBodyRow.displayName = 'TableBodyRow';

export { TableBodyRow, theme };
