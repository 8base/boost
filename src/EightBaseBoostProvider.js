// @flow

import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { ModalProvider } from './atoms/Modal/ModalProvider';
import { createTheme, resetGlobal, type Theme } from './theme';

type EightBaseBoostProviderProps = {
  theme?: Theme,
  children: React$Node,
};

class EightBaseBoostProvider extends React.Component<EightBaseBoostProviderProps> {
  theme: *;

  constructor(props: EightBaseBoostProviderProps) {
    super(props);

    this.theme = props.theme || createTheme();
  }

  componentDidMount() {
    resetGlobal();
  }

  render() {
    const { children } = this.props;

    return (
      <ThemeProvider theme={ this.theme }>
        <ModalProvider>
          { children }
        </ModalProvider>
      </ThemeProvider>
    );
  }
}

export { EightBaseBoostProvider };
