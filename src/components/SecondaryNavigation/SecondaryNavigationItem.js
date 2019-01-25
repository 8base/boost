// @flow

import React from 'react';

import { Text } from '../Text';
import {
  SecondaryNavigationItemTag,
  SecondaryNavigationItemBarTag,
  SecondaryNavigationItemLabelTag,
} from './SecondaryNavigationItem.theme';

type SecondaryNavigationItemProps = {
  label: string,
};

export const SecondaryNavigationItem = ({ label, ...rest }: SecondaryNavigationItemProps) => (
  <SecondaryNavigationItemTag { ...rest } >
    <SecondaryNavigationItemBarTag modifiers={ rest } />
    <SecondaryNavigationItemLabelTag modifiers={ rest } >
      <Text>
        { label }
      </Text>
    </SecondaryNavigationItemLabelTag>
  </SecondaryNavigationItemTag>
);

export { theme } from './SecondaryNavigationItem.theme';
