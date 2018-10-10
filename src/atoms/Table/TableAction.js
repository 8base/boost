// @flow
import React from 'react';

import { Button, type ButtonProps } from '../Button';
import { createStyledTag, createTheme } from '../../utils';

type TableActionProps = ButtonProps;

const name = 'tableAction';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const TableActionTag = createStyledTag(name, () => ({
  position: 'sticky',
  display: 'flex',
  justifyContent: 'center',
  bottom: '2rem',
  marginTop: '2rem',
  marginBottom: '2rem',
}));

function TableAction(props: TableActionProps) {
  return <TableActionTag tagName="div"><Button { ...props } /></TableActionTag>;
}

export { TableAction, theme };
