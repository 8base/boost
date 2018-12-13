// @flow

import React from 'react';

const IconsContext = React.createContext({});

type IconsProviderProps = {
  children: React$Node,
  icons?: { [name: string]: React$Node }
}

const IconsProvider = (props: IconsProviderProps) => (
  <IconsContext.Provider value={{ icons: props.icons || {}}}>
    { props.children }
  </IconsContext.Provider>
);

const IconsConsumer: React$ComponentType<{
  children: Object => React$Node,
}> = IconsContext.Consumer;

export { IconsProvider, IconsConsumer };

