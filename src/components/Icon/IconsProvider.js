// @flow

import React from 'react';

// $FlowFixMe
const IconsContext = React.createContext({});

type IconsProviderProps = {
  children: React$Node,
  icons?: { [name: string]: React$Node }
};

const IconsProvider = (props: IconsProviderProps) => (
  <IconsContext.Provider value={{ icons: props.icons || {}}}>
    { props.children }
  </IconsContext.Provider>
);

const IconsConsumer = IconsContext.Consumer;

export { IconsProvider, IconsConsumer };

