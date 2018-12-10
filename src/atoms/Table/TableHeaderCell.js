// @flow
import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';

type TableHeaderCellProps = {
  children?: React$Node,
};

const name = 'tableHeaderCell';

const theme = createComponentTheme(name, (colors: *, sizes: *) => ({
  root: {
    padding: '0 2rem',
    fontSize: sizes.SMALL_FONT_SIZE,
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  modifiers: {
  },
  defaults: {
  },
}));

const TableHeaderCellTag = createStyledTag(name, {
  display: 'flex',
  alignItems: 'center',
});

function TableHeaderCell({
  children,
  ...rest
  }: TableHeaderCellProps) {
  return <TableHeaderCellTag { ...rest } tagName="div">{ children }</TableHeaderCellTag>;
}

export { TableHeaderCell, theme };
