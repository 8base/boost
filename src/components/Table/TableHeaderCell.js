// @flow
import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';

type TableHeaderCellProps = {
  children?: React$Node,
};

const name = 'tableHeaderCell';

const theme = createComponentTheme(name, ({ SIZES }: *) => ({
  root: {
    padding: '0 16px',
    fontSize: SIZES.OVERLINE_1,
    lineHeight: SIZES.OVERLINE_1_LH,
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
