// @flow

import React from 'react';
import fp from 'lodash/fp';
import { compose, withStateHandlers, branch, setDisplayName } from 'recompose';

import { createStyledTag } from '../../utils';
import { TabsContext } from './TabsContext';
import { TabPanel } from './TabPanel';
import { TabTitle } from './TabTitle';


type TabsProps = {
  children: React$Node,
  /** callback when a tab is selected */
  onSelect?: (tabId: string) => void,
  /** tabId of the currently displayed tab */
  selectedTabId: string,
}

type WithStateTabsProps = {
  children: React$Node,
  /** tabId of the default selected tab */
  defaultSelectedTabId: string,
}

const TabPlateTag = createStyledTag('tabPlate', {});


const tabsEnhancer: { (any): React$ComponentType<WithStateTabsProps | { ...TabsProps, ...WithStateTabsProps }> } = compose(
  setDisplayName('TabsPlate'),
  branch(
    (props) => !fp.isNil(props.defaultSelectedTabId),
    withStateHandlers(
      (props) => ({ selectedTabId: props.defaultSelectedTabId }),
      {
        onSelect: () => (tabId) => ({ selectedTabId: tabId }),
      },
    ),
  ),
);

const TabsPlate = tabsEnhancer(({
  children,
  onSelect,
  selectedTabId,
  ...rest
  }: TabsProps) => {
  const contextData = {
    selectedTabId,
    onSelect,
  };

  return (
    <TabsContext.Provider value={ contextData }>
      <TabPlateTag { ...rest } tagName="div">
        { children }
      </TabPlateTag>
    </TabsContext.Provider>
  );
});

const Tabs = (props: *) => <TabsPlate { ...props } />;

Tabs.Title = TabTitle;
Tabs.Panel = TabPanel;


export { Tabs };
