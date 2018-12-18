// @flow
import React from 'react';

import { Grid } from '../Grid';
import { createStyledTag, createComponentTheme } from '../../utils';

type TableFooterProps = {
  children?: React$Node,
};

const name = 'tableFooter';

const theme = createComponentTheme(name, {
  root: {
    padding: '16px',
  },
  modifiers: {
  },
  defaults: {
  },
});

const TableFooterTag = createStyledTag(name, () => ({
  display: 'grid',
}));

function TableFooter({
  children,
  ...rest
  }: TableFooterProps) {
  return <TableFooterTag { ...rest } tagName={ Grid.Box }>{ children }</TableFooterTag>;
}

export { TableFooter, theme };
