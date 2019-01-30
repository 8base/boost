// @flow

import React from 'react';

import { SecondaryNavigationTag } from './SecondaryNavigation.theme';
import { SecondaryNavigationItem } from './SecondaryNavigationItem';

type SecondaryNavigationProps = {
  children: React$Node,
};

const SecondaryNavigation = ({ children, ...rest }: SecondaryNavigationProps) => (
  <SecondaryNavigationTag { ...rest } tagName="nav">
    { children }
  </SecondaryNavigationTag>
);

SecondaryNavigation.displayName = 'SecondaryNavigation';

SecondaryNavigation.Item = SecondaryNavigationItem;

export { SecondaryNavigation };

