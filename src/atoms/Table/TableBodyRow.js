// @flow
import React from 'react';

import { Grid } from '../Grid';
import { createStyledTag, createComponentTheme } from '../../utils';

type TableBodyRowProps = {
  children?: React$Node,
};

const name = 'tableBodyRow';

const theme = createComponentTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const TableBodyRowTag = createStyledTag(name, (props: *) => ({
  display: 'grid',
  borderBottom: `1px solid ${props.theme.COLORS.LIGHT_GRAY1}`,
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

TableBodyRow.displayName = 'TableBodyRow';

export { TableBodyRow, theme };
