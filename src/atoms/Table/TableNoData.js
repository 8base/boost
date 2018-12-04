// @flow
import React from 'react';

import { Icon } from '../typography/Icon';
import { Column } from '../FlexLayout';
import { createStyledTag, createComponentTheme } from '../../utils';

const name = 'tableNoData';

const theme = createComponentTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const TableNoDataIconTag = createStyledTag(name, () => ({
  height: '80px',
}));

const TableNoDataTextTag = createStyledTag(name, (props) => ({
  color: props.theme.COLORS.LIGHT_GRAY1,
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
