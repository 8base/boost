// @flow

import React, { Component } from 'react';

import { keyframes } from 'react-emotion';
import { createStyledTag, createTheme, getThemeStyle, getThemeColors } from 'utils';

type ButtonProps = {|
  /** callback to handle click */
  onClick?: (MouseEvent) => void,
  /** button text */
  text?: string,
  /** button text */
  children?: React$Node,
  /** then true when stretch to the parent width */
  stretch?: boolean,
  /** then true when show laoder */
  loading?: boolean,
  /** possible button types */
  type?: 'submit' | 'button',
  /** possible button kind */
  color?: 'primary' | 'secondary' | 'neutral',
  /** the type of button */
  variant?: 'outlined' | 'raised',
  /** posible sizes */
  size?: 'sm' | 'md' | 'lg',
|};

const name = 'button';

const spinner = keyframes`
  from { transform: rotate(0deg)   }
  to   { transform: rotate(360deg) }
`;

const theme = createTheme(name, {
  button: {
    cursor: 'pointer',
    fontSize: '1.4rem',
    fontWeight: '600',
    transition: 'all .15s ease-in-out',

    '&:hover': {
      boxShadow: '0 1px 3px 0 rgba(50,50,93,.14), 0 4px 6px 0 rgba(112,157,199,.08)',
    },

    '& > *': {
      '&:not(:last-child)': {
        marginRight: '.5rem',
      },
    },
  },

  modifiers: {
    size: {
      sm: {
        height: '3rem',
        padding: '0 1rem',
        borderRadius: '.5rem',
      },
      md: {
        height: '4rem',
        padding: '0 2rem',
        borderRadius: '.5rem',
      },
      lg: {
        height: '5rem',
        padding: '0 3rem',
        borderRadius: '.5rem',
      },
    },
    loading: {
      position: 'relative',
      color: 'transparent',
      pointerEvents: 'none',

      '&:after': {
        content: '""',
        position: 'absolute',
        left: '50%',
        right: '50%',
        top: '50%',
        bottom: '50%',

        width: '1.5em',
        height: '1.5em',
        marginLeft: ' -.75em',
        marginTop: ' -.75em',
        border: '4px solid #fff',
        borderTopColor: 'transparent',
        borderRadius: '50%',
        animation: `${spinner} .7s infinite linear`,
      },
    },
    stretch: {
      width: '100%',
    },
  },
  defaults: {
    variant: 'raised',
    color: 'primary',
    size: 'md',
  },
});

const getBackgroundColor = (props: ButtonProps) => {
  if (props.variant === 'raised') {
    switch (props.color) {
      case 'primary': return getThemeColors(props).PRIMARY_BUTTON_BACKGROUND_COLOR;
      case 'secondary': return getThemeColors(props).SECONDARY_BUTTON_BACKGROUND_COLOR;
      case 'neutral': return getThemeColors(props).NEUTRAL_BUTTON_BACKGROUND_COLOR;
      default: return '';
    }
  }
};

const getColor = (props: ButtonProps) => {
  if (props.variant === 'raised') {
    switch (props.color) {
      case 'primary': return getThemeColors(props).LIGHT_PRIMARY_TEXT_COLOR;
      case 'secondary': return getThemeColors(props).LIGHT_PRIMARY_TEXT_COLOR;
      case 'neutral': return getThemeColors(props).PRIMARY_TEXT_COLOR;
      default: return '';
    }
  }
  else {
    return getThemeColors(props).PRIMARY_TEXT_COLOR;
  }
};

const getBorderColor = (props: ButtonProps) => {
  switch (props.color) {
    case 'primary': return getThemeColors(props).PRIMARY_BUTTON_BACKGROUND_COLOR;
    case 'secondary': return getThemeColors(props).SECONDARY_BUTTON_BACKGROUND_COLOR;
    case 'neutral': return getThemeColors(props).PRIMARY_BORDER_COLOR;
    default: return '';
  }
};

const StyledTag = createStyledTag(name, props => ({
  outline: 'none',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  ...getThemeStyle(props, name).button,

  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: getBorderColor(props),
  backgroundColor: getBackgroundColor(props),
  color: getColor(props),
}));

class Button extends Component<ButtonProps> {
  static defaultProps = {
    type: 'button',
    color: 'primary',
    variant: 'raised',
    size: 'md',
  };

  render() {
    const { text, children, type, onClick, loading, ...rest } = this.props;

    return (
      <StyledTag
        { ...rest }
        tagName="button"
        type={ type }
        loading={ loading }
        onClick={ onClick }
      >
        { children || text }
      </StyledTag>
    );
  }
}

export { Button, theme };
