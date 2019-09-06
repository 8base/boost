// @flow
import React from 'react';

import { Grid } from '../Grid';
import { createThemeTag } from '../../theme/createThemeTag';
import { gapSizes } from '../../constants';
import type { PropSizes } from '../../types';


type TableHeaderProps = {
  children?: React$Node,
  columnGap?: PropSizes,
};

const name = 'tableHeader';

const [TableHeaderTag, theme] = createThemeTag(name, ({ COLORS }: *) => ({
  root: props => ({
    display: 'grid',
    height: '48px',
    backgroundColor: COLORS.LIGHT_GRAY5,
    borderBottom: `1px solid ${COLORS.TABLE_BORDER_COLOR}`,
    color: COLORS.GRAY4,
    columnGap: gapSizes[props.columnGap],
  }),

  modifiers: {
    condensed: {
      height: '36px',
    },

    bordered: {
      '&:first-child': {
        borderTop: `1px solid ${COLORS.TABLE_BORDER_COLOR}`,
      },
    },
  },
}));

function TableHeader({
  children,
  ...rest
}: TableHeaderProps) {
  return <TableHeaderTag { ...rest } tagName={ Grid.Layout }>{ children }</TableHeaderTag>;
}

export { TableHeader, theme };
