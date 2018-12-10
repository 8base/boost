// @flow
import React from 'react';

import { Icon } from '../typography/Icon';
import { Column } from '../FlexLayout';
import { createStyledTag, createComponentTheme } from '../../utils';

const name = 'tableNoData';

const theme = createComponentTheme(name, {
  root: {
    height: '80rem',
  },
});

const TableNoDataIconTag = createStyledTag(name);

const TableNoDataTextTag = createStyledTag(`${name}Text`, (props) => ({
  color: props.theme.COLORS.DISABLED_TEXT_COLOR,
  fontSize: '3rem',
  fontWeight: 500,
  textTransform: 'uppercase',
}));

const TableNoData = () => {
  return (
    <Column stretch justifyContent="center" alignItems="center" gap="lg">
      <TableNoDataIconTag><Icon size="stretch" name="DismissData" color="LIGHT_GRAY1" /></TableNoDataIconTag>
      <TableNoDataTextTag>no data</TableNoDataTextTag>
    </Column>
  );
};


export { TableNoData, theme };
