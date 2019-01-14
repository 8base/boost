// @flow
import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';
import { Row } from '../FlexLayout';

type TableBodyCellProps = {
  children?: React$Node,
};

const name = 'tableBodyCell';

const theme = createComponentTheme(name, {
  root: {
    padding: '0 16px',
  },
  modifiers: {
  },
  defaults: {
  },
});

const TableBodyCellTag = createStyledTag(name, () => ({
  display: 'flex',
  alignItems: 'center',
  wordBreak: 'break-all',
}));

function TableBodyCell({
  children,
  ...rest
  }: TableBodyCellProps) {
  return <TableBodyCellTag { ...rest } tagName={ Row }>{ children }</TableBodyCellTag>;
}

export { TableBodyCell, theme };
