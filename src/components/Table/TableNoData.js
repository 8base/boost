// @flow
import React from 'react';

import { Icon } from '../Icon';
import { Column } from '../FlexLayout';
import { createThemeTag } from '../../theme/createThemeTag';


const name = 'tableNoData';

const [TableNoDataIconTag, themeIcon] = createThemeTag(`${name}Icon`, {
  root: {
    height: '80px',
  },
});


const [TableNoDataTextTag, themeText] = createThemeTag(`${name}Text`, ({ COLORS }: *) => ({
  root: {
    color: COLORS.DISABLED_TEXT_COLOR,
    fontSize: '32px',
    fontWeight: 500,
    textTransform: 'uppercase',
  },
}));

const theme = {
  ...themeIcon,
  ...themeText,
};

const TableNoData = (props: *) => {
  return (
    <Column stretch justifyContent="center" alignItems="center" gap="lg" offsetY="lg">
      <TableNoDataIconTag modifiers={ props }>
        <Icon size="stretch" name="DismissData" color="LIGHT_GRAY1" />
      </TableNoDataIconTag>
      <TableNoDataTextTag modifiers={ props }>no data</TableNoDataTextTag>
    </Column>
  );
};


export { TableNoData, theme };
