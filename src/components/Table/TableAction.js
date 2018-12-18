// @flow
import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';

type TableActionProps = {
  children: React$Node,
};

const name = 'tableAction';

const theme = createComponentTheme(name, {
  root: {
    paddingTop: '16px',
    paddingBottom: '16px',
  },
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
});

function TableAction({ children }: TableActionProps) {
  return <TableActionTag tagName="div">{ children }</TableActionTag>;
}

export { TableAction, theme };
