// @flow
import React from 'react';

import { Grid } from '../Grid';
import { createStyledTag, createTheme } from '../../utils';

type TableBodyProps = {
  children?: React$Node,
};

const name = 'tableBody';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const TableBodyTag = createStyledTag(name, (props: *) => ({
  display: 'grid',
  overflowY: 'auto',
  borderBottom: `1px solid ${props.theme.COLORS.LIGHT_GRAY1}`,
}));

function TableBody({
  children,
  ...rest
  }: TableBodyProps) {
  return <TableBodyTag { ...rest } tagName={ Grid.Layout }>{ children }</TableBodyTag>;
}

export { TableBody, theme };
