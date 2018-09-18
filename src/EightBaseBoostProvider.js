// @flow

import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { ModalProvider } from './atoms/Modal/ModalProvider';
import { defaultTheme, resetGlobal } from './theme';

type EightBaseBoostProviderProps = {
  theme?: Object,
  children: React$Node,
};

class EightBaseBoostProvider extends React.Component<EightBaseBoostProviderProps> {
  static defaultProps = {
    theme: defaultTheme,
  };

  componentDidMount() {
    resetGlobal();
  }

  render() {
    const { theme, children } = this.props;

    return (
      <ThemeProvider theme={ theme }>
        <ModalProvider>
          { children }
        </ModalProvider>
      </ThemeProvider>
    );
  }
}

export { EightBaseBoostProvider };
