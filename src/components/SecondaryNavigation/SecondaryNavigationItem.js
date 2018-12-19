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
  theme: Object,
};

export const SecondaryNavigationItem = ({ label, theme, ...rest }: SecondaryNavigationItemProps) => (
  <SecondaryNavigationItemTag { ...rest } >
    <SecondaryNavigationItemBarTag theme={ theme } />
    <SecondaryNavigationItemLabelTag theme={ theme } >
      <Text>
        { label }
      </Text>
    </SecondaryNavigationItemLabelTag>
  </SecondaryNavigationItemTag>
);

export { theme } from './SecondaryNavigationItem.theme';
