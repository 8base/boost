// @flow
import React from 'react';

import { Grid } from '../Grid';
import { createThemeTag } from '../../theme/createThemeTag';


type TableHeaderProps = {
  children?: React$Node,
};

const name = 'tableHeader';

const [TableHeaderTag, theme] = createThemeTag(name, ({ COLORS }: *) => ({
  root: {
    display: 'grid',

    height: '52px',
    backgroundColor: COLORS.LIGHT_GRAY5,
    borderBottom: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
    color: COLORS.GRAY4,
  },
}));

function TableHeader({
  children,
  ...rest
  }: TableHeaderProps) {
  return <TableHeaderTag { ...rest } tagName={ Grid.Layout }>{ children }</TableHeaderTag>;
}

export { TableHeader, theme };
