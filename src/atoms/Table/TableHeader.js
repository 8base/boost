// @flow
import React from 'react';

import { Grid } from '../Grid';
import { createStyledTag, createComponentTheme } from '../../utils';

type TableHeaderProps = {
  children?: React$Node,
};

const name = 'tableHeader';

const theme = createComponentTheme(name, ({ COLORS }: *) => ({
  root: {
    height: '5rem',
    backgroundColor: COLORS.LIGHT_GRAY5,
    borderBottom: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
    color: COLORS.GRAY4,
  },
  modifiers: {
  },
  defaults: {
  },
}));

const TableHeaderTag = createStyledTag(name, {
  display: 'grid',
});

function TableHeader({
  children,
  ...rest
  }: TableHeaderProps) {
  return <TableHeaderTag { ...rest } tagName={ Grid.Layout }>{ children }</TableHeaderTag>;
}

export { TableHeader, theme };
