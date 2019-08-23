// @flow

import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { IconsProvider } from './components/Icon/IconsProvider';
import { ModalProvider } from './components/Modal/ModalProvider';
import { createTheme, type Theme, Globals } from './theme';

type BoostProviderProps = {
  theme?: Theme,
  icons?: { [name: string]: React$Node },
  children: React$Node,
};

class BoostProvider extends React.Component<BoostProviderProps> {
  theme: *;

  constructor(props: BoostProviderProps) {
    super(props);

    this.theme = props.theme || createTheme();
  }

  render() {
    const { children, icons } = this.props;

    return (
      <ThemeProvider theme={ this.theme }>
        <Globals components={ this.theme.components } />

        <ModalProvider>
          <IconsProvider icons={ icons }>
            { children }
          </IconsProvider>
        </ModalProvider>
      </ThemeProvider>
    );
  }
}

export { BoostProvider };
