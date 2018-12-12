// @flow

import React from 'react';
import { compose, setDisplayName } from 'recompose';
import { createStyledTag } from '../../utils';
import { withTabsContext } from './TabsContext';

type TabPanelProps = {|
  children: React$Node,
  /** id of Tab element */
  tabId: string,
  /** don't unmount then tab is hidden */
  forceRender?: boolean,
|}

const TabPanelTag = createStyledTag('tabPlate', props => ({
  display: props.selected ? 'block' : 'none',
}));


const tabPanelEnhancer: HOC<*, TabPanelProps> = compose(
  (setDisplayName: any)('TabPanel'),
  withTabsContext,
);

type TabPanelBaseProps = HOCBase<typeof tabPanelEnhancer>

const TabPanelBase = ({
  children,
  tabs: { selectedTabId },
  tabId,
  forceRender,
  ...rest
  }: TabPanelBaseProps) => {
  const selected = selectedTabId === tabId;

  if (forceRender) {
    return <TabPanelTag { ...rest } selected={ selected } tagName="div">{ children }</TabPanelTag>;
  }
  else {
    return selected
      ? null
      : <TabPanelTag { ...rest } selected tagName="div">{ children }</TabPanelTag>;
  }
};

TabPanelBase.defaultProps = {
  selected: false,
  forceRender: false,
};

const TabPanel = tabPanelEnhancer(TabPanelBase);

export { TabPanel };
