// @flow
import React from 'react';

import { Grid } from '../Grid';
import { createStyledTag, createTheme } from '../../utils';

type TableHeaderProps = {|
  children?: React$Node,
|};

const name = 'tableHeader';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const TableHeaderTag = createStyledTag(name, (props) => ({
  display: 'grid',
  height: '5rem',
  backgroundColor: '#F4F7F9',
  borderBottom: '1px solid #ccc',
  color: props.theme.COLORS.GRAY4,
}));

function TableHeader({
  children,
  ...rest
  }: TableHeaderProps) {
  return <TableHeaderTag { ...rest } tagName={ Grid.Layout }>{ children }</TableHeaderTag>;
}

export { TableHeader, theme };
