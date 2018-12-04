// @flow
import React from 'react';

import { Grid } from '../Grid';
import { createStyledTag, createComponentTheme } from '../../utils';

type TableFooterProps = {
  children?: React$Node,
};

const name = 'tableFooter';

const theme = createComponentTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const TableFooterTag = createStyledTag(name, () => ({
  display: 'grid',
  padding: '2rem',
}));

function TableFooter({
  children,
  ...rest
  }: TableFooterProps) {
  return <TableFooterTag { ...rest } tagName={ Grid.Box }>{ children }</TableFooterTag>;
}

export { TableFooter, theme };
