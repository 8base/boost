// @flow
import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';

type TableBodyCellProps = {
  children?: React$Node,
};

const name = 'tableBodyCell';

const theme = createComponentTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const TableBodyCellTag = createStyledTag(name, () => ({
  display: 'flex',
  alignItems: 'center',
  padding: '0 2rem',
  wordBreak: 'break-all',
}));

function TableBodyCell({
  children,
  ...rest
  }: TableBodyCellProps) {
  return <TableBodyCellTag { ...rest } tagName="div">{ children }</TableBodyCellTag>;
}

export { TableBodyCell, theme };
