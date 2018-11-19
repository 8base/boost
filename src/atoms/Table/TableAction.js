// @flow
import React from 'react';

import { createStyledTag, createTheme } from '../../utils';

type TableActionProps = {
  children: React$Node,
};

const name = 'tableAction';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const TableActionTag = createStyledTag(name, {
  position: 'sticky',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '2rem',
  paddingBottom: '2rem',
});

function TableAction({ children }: TableActionProps) {
  return <TableActionTag tagName="div">{ children }</TableActionTag>;
}

export { TableAction, theme };
