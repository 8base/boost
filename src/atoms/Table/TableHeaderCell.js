// @flow
import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';

type TableHeaderCellProps = {
  children?: React$Node,
};

const name = 'tableHeaderCell';

const theme = createComponentTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const TableHeaderCellTag = createStyledTag(name, () => ({
  display: 'flex',
  alignItems: 'center',
  padding: '0 2rem',
  fontSize: '1.2rem',
  textTransform: 'uppercase',
  fontWeight: 700,
}));

function TableHeaderCell({
  children,
  ...rest
  }: TableHeaderCellProps) {
  return <TableHeaderCellTag { ...rest } tagName="div">{ children }</TableHeaderCellTag>;
}

export { TableHeaderCell, theme };
