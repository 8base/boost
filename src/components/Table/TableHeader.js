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

const [TableHeaderTag, theme] = createThemeTag(name, ({ COLORS, FONTS }: *) => ({
  root: props => ({
    display: 'grid',
    height: '48px',
    backgroundColor: COLORS.GRAY_10,
    borderBottom: `1px solid ${COLORS.SECONDARY_BORDER_COLOR}`,
    ...FONTS.OVERLINE_2,
    columnGap: gapSizes[props.columnGap],
  }),

  modifiers: {
    condensed: {
      height: '36px',
    },

    bordered: {
      borderLeft: `1px solid ${COLORS.SECONDARY_BORDER_COLOR}`,
      borderRight: `1px solid ${COLORS.SECONDARY_BORDER_COLOR}`,

      '&:first-of-type': {
        borderTop: `1px solid ${COLORS.SECONDARY_BORDER_COLOR}`,
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
