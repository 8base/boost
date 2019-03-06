// @flow

import React from 'react';

import { Icon } from '../Icon';
import { Column } from '../FlexLayout';
import {
  NoDataIconContainerTag,
  NoDataTextTag,
} from './NoData.theme';

const NoData = (props: *) => (
  <Column stretch justifyContent="center" alignItems="center" gap="lg" offsetY="lg">
    <NoDataIconContainerTag modifiers={ props }>
      <Icon size="stretch" name="DismissData" color="LIGHT_GRAY1" />
    </NoDataIconContainerTag>
    <NoDataTextTag modifiers={ props }>no data</NoDataTextTag>
  </Column>
);

export { NoData };

