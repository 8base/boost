// @flow
import React from 'react';
import equal from 'fast-deep-equal';

import { Grid } from '../Grid';
import { createThemeTag } from '../../theme/createThemeTag';
import { gapSizes } from '../../constants';
import type { PropSizes } from '../../types';


type TableBodyRowProps = {
  children?: React$Node,
  columnGap?: PropSizes,
};

const name = 'tableBodyRow';

const [TableBodyRowTag, theme] = createThemeTag(name, ({ COLORS }: *) => ({
  root: props => ({
    display: 'grid',
    minHeight: '48px',
    borderBottom: `1px solid ${COLORS.SECONDARY_BORDER_COLOR}`,
    columnGap: gapSizes[props.columnGap],
  }),
  modifiers: {
    condensed: {
      minHeight: '36px',
    },
  },
  defaults: {
  },
}));

const TableBodyRow = React.memo(({
  children,
  ...rest
}: TableBodyRowProps) => {
  return <TableBodyRowTag { ...rest } tagName={ Grid.Layout }>{ children }</TableBodyRowTag>;
}, equal);

export { TableBodyRow, theme };
