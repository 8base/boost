// @flow

import React from 'react';
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import { IconsProvider } from './components/Icon/IconsProvider';
import { ModalProvider } from './components/Modal/ModalProvider';
import { createTheme, resetGlobal, type Theme } from './theme';

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

  componentDidMount() {
    resetGlobal(this.theme);

    Object.keys(this.theme.components).forEach((name) => {
      const { globals } = this.theme.components[name];

      if (globals) {
        typeof globals === 'function'
          ? injectGlobal(globals(this.theme))
          : injectGlobal(globals);
      }
    });
  }

  render() {
    const { children, icons } = this.props;

    return (
      <ThemeProvider theme={ this.theme }>
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
