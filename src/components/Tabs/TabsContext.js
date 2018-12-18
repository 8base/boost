// @flow
import React from 'react';

type TabsContextType = {|
  tabs: {|
    selectedTabId: string,
    onSelect: (string) => void,
  |}
|}

const TabsContext: { Consumer: (any) => React$Element<any>, Provider: any } = (React: any).createContext({
  tabs: {},
});

const withTabsContext: HOCProps<TabsContextType> = (Component: *) => (props: *) => {
  return (
    <TabsContext.Consumer>
      { TabsData => <Component { ...props } tabs={ TabsData } /> }
    </TabsContext.Consumer>
  );
};

export { TabsContext, withTabsContext };
export type { TabsContextType };
