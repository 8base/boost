// @flow

import React, { Component } from 'react';

import { createStyledTag, createTheme } from '../../utils';

type ButtonProps = {|
  text?: string,
  stretch?: boolean,
  loading?: boolean,
  children?: React.Node,
  type?: 'submit' | 'button',
  kind?: 'primary' | 'secondary',
  size?: 'md',
|};

const name = 'button';

const theme = createTheme(name, (colors) => ({
  modifiers: {
    kind: {
      primary: {
        backgroundColor: colors.PRIMARY_BUTTON_BACKGROUND_COLOR,
        color: colors.LIGHT_PRIMARY_TEXT_COLOR,
      },
      secondary: {
        backgroundColor: colors.SECONDARY_BUTTON_BACKGROUND_COLOR,
        color: colors.DARK_PRIMARY_TEXT_COLOR,
        border: `1px solid ${colors.DARK_DIVIDER_COLOR}`,
      },
    },
    size: {
      md: {
        height: '40px',
        padding: '0 20px',
        borderRadius: '5px',
      },
    },
    loading: {
      opacity: '0.5',
      pointerEvents: 'none',
    },
    stretch: {
      width: '100%',
    },
  },
  defaults: {
    kind: 'primary',
    size: 'md',
  },
}));

const StyledTag = createStyledTag(name, {
  border: '0',
  cursor: 'pointer',
  display: 'flex',
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: '600',
  outline: 'none',
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'capitalize',
});

class Button extends Component<ButtonProps> {
  static defaultProps = {
    type: 'button',
  };

  constructor(props) {
    super(props);

    this.state = { loading: props.loading };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let result = null;

    if (nextProps.loading !== prevState.loading) {
      result = { loading: nextProps.loading };
    }

    return result;
  }

  render() {
    const {
      text,
      children,
      type,
      ...rest
    } = this.props;

    if (rest.onClick) {
      rest.onClick = (...args) => {
        this.setState({ loading: true });

        this.props.onClick(...args).finally(() => {
          this.setState({ loading: false });
        });
      };
    }

    return <StyledTag tagName="button" type={type} loading={this.state.loading} {...rest}>{this.state.loading ? 'Loading...' : (children || text) }</StyledTag>
  }
}


export { Button, theme };
