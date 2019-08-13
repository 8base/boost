// @flow

import React from 'react';

import { TabOuter } from './Tab.theme';

type TabProps = {
  children: React$Node,
  className?: string,
};

const Tab = ({ children, ...rest }: TabProps) => (
  <TabOuter { ...rest }>
    { children }
  </TabOuter>
);

export { Tab };

