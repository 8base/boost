// @flow

import React from 'react';
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import { IconsProvider } from './components/Icon/IconsProvider';
import { ModalProvider } from './components/Modal/ModalProvider';
import { createTheme, resetGlobal, type Theme } from './theme';

type EightBaseBoostProviderProps = {
  theme?: Theme,
  icons?: { [name: string]: React$Node },
  children: React$Node,
};

class EightBaseBoostProvider extends React.Component<EightBaseBoostProviderProps> {
  theme: *;

  constructor(props: EightBaseBoostProviderProps) {
    super(props);

    this.theme = props.theme || createTheme();
  }

  componentDidMount() {
    resetGlobal(this.theme);

    Object.keys(this.theme.components).forEach((name) => {
      if (this.theme.components[name].globals) {
        injectGlobal(this.theme.components[name].globals);
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

export { EightBaseBoostProvider };
