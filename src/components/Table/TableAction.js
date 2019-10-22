// @flow
import React from 'react';

import { createThemeTag } from '../../theme/createThemeTag';


type TableActionProps = {
  children: React$Node,
};

const name = 'tableAction';

const [TableActionTag, themeAction] = createThemeTag(name, ({ COLORS }: *) => ({
  root: {
    position: 'sticky',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    pointerEvents: 'none',

    paddingTop: '16px',
    paddingBottom: '16px',
  },
  modifiers: {
    bordered: {
      borderLeft: `1px solid ${COLORS.SECONDARY_BORDER_COLOR}`,
      borderRight: `1px solid ${COLORS.SECONDARY_BORDER_COLOR}`,
    },
  },
  defaults: {
  },
}));

const [TableActionInnerTag, themeInner] = createThemeTag(`${name}Inner`, {
  root: {
    pointerEvents: 'all',
  },
});

const theme = {
  ...themeAction,
  ...themeInner,
};

function TableAction({ children, ...rest }: TableActionProps) {
  return (
    <TableActionTag tagName="div" { ...rest }>
      <TableActionInnerTag modifiers={ rest }>
        { children }
      </TableActionInnerTag>
    </TableActionTag>
  );
}

export { TableAction, theme };
