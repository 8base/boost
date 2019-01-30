// @flow
import React from 'react';

import { Grid } from '../Grid';
import { createThemeTag } from '../../theme/createThemeTag';


type TableBodyRowProps = {
  children?: React$Node,
};

const name = 'tableBodyRow';

const [TableBodyRowTag, theme] = createThemeTag(name, ({ COLORS }: *) => ({
  root: {
    display: 'grid',

    height: '60px',
    borderBottom: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
  },
  modifiers: {
  },
  defaults: {
  },
}));

function TableBodyRow({
  children,
  ...rest
  }: TableBodyRowProps) {
  return <TableBodyRowTag { ...rest } tagName={ Grid.Layout }>{ children }</TableBodyRowTag>;
}

export { TableBodyRow, theme };
