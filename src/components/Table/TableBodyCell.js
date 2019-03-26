// @flow
import React from 'react';

import { createThemeTag } from '../../theme/createThemeTag';

import { Row } from '../FlexLayout';

type TableBodyCellProps = {
  children?: React$Node,
};

const name = 'tableBodyCell';

const [TableBodyCellTag, theme] = createThemeTag(name, ({ COLORS }: *) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    wordBreak: 'break-all',

    padding: '8px 16px',
  },
  modifiers: {
    bordered: {
      borderLeft: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,

      '&:last-child': {
        borderRight: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
      },
    },
  },
}));

function TableBodyCell({
  children,
  ...rest
  }: TableBodyCellProps) {
  return <TableBodyCellTag { ...rest } tagName={ Row }>{ children }</TableBodyCellTag>;
}

export { TableBodyCell, theme };
