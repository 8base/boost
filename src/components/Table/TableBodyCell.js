// @flow
import React from 'react';

import { createThemeTag } from '../../theme/createThemeTag';
import { Row } from '../FlexLayout';
import { justifyContentStyles, alignItemsStyles } from '../../constants';
import type { PropLayoutStretch, PropLayout } from '../../types';

type TableBodyCellProps = {
  children?: React$Node,
  justifyContent?: PropLayoutStretch,
  alignItems?: PropLayout,
};

const name = 'tableBodyCell';

const [TableBodyCellTag, theme] = createThemeTag(name, ({ COLORS }: *) => ({
  root: props => ({
    display: 'flex',
    wordBreak: 'break-all',

    padding: '8px 24px',

    justifyContent: justifyContentStyles[props.justifyContent],
    alignItems: alignItemsStyles[props.alignItems],
  }),
  modifiers: {
    bordered: {
      borderLeft: `1px solid ${COLORS.TABLE_BORDER_COLOR}`,

      '&:last-child': {
        borderRight: `1px solid ${COLORS.TABLE_BORDER_COLOR}`,
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

TableBodyCell.defaultProps = {
  alignItems: 'center',
  justifyContent: 'start',
};


export { TableBodyCell, theme };
