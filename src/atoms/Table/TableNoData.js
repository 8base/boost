// @flow
import React from 'react';

import { Icon } from '../typography/Icon';
import { Column } from '../FlexLayout';
import { createStyledTag, createComponentTheme } from '../../utils';

const name = 'tableNoData';

const themeIcon = createComponentTheme(`${name}Icon`, {
  root: {
    height: '80px',
  },
});


const themeText = createComponentTheme(`${name}Text`, ({ COLORS }: *) => ({
  root: {
    color: COLORS.DISABLED_TEXT_COLOR,
    fontSize: '3rem',
    fontWeight: 500,
    textTransform: 'uppercase',
  },
}));

const theme = {
  ...themeIcon,
  ...themeText,
};

const TableNoDataIconTag = createStyledTag(`${name}Icon`, {});

const TableNoDataTextTag = createStyledTag(`${name}Text`, {});

const TableNoData = () => {
  return (
    <Column stretch justifyContent="center" alignItems="center" gap="lg">
      <TableNoDataIconTag><Icon size="stretch" name="DismissData" color="LIGHT_GRAY1" /></TableNoDataIconTag>
      <TableNoDataTextTag>no data</TableNoDataTextTag>
    </Column>
  );
};


export { TableNoData, theme };
