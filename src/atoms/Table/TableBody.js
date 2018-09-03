// @flow
import React from 'react';

import { Grid } from '../Grid';
import { createStyledTag, createTheme } from '../../utils';

type TableBodyProps = {|
  children?: React$Node,
|};

const name = 'tableBody';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const TableBodyTag = createStyledTag(name, () => ({
  display: 'grid',
  overflowY: 'scroll',
}));

function TableBody({
  children,
  ...rest
  }: TableBodyProps) {
  return <TableBodyTag { ...rest } tagName={ Grid.Layout }>{ children }</TableBodyTag>;
}

export { TableBody, theme };
