// @flow

import React, { Component } from 'react';

import { keyframes } from 'react-emotion';
import { createStyledTag, createTheme, getThemeStyle, getThemeColors } from '../../utils';

type ButtonProps = {
  /** callback to handle click */
  onClick?: Function,
  /** button text */
  text?: string,
  /** button text */
  children?: React$Node,
  /** then true when stretch to the parent width */
  stretch?: boolean,
  /** then true when show loader */
  loading?: boolean,
 /** then true when disable button */
  disabled?: boolean,
 /** then button is squared */
  squared?: boolean,
 /** then button is rounded */
  rounded?: boolean,
  /** possible button types */
  type?: 'submit' | 'button',
  /** possible button colors */
  color?: 'primary' | 'secondary' | 'neutral' | 'red' | 'white',
  /** the type of button */
  variant?: 'outlined' | 'raised',
  /** posible sizes */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  /** possible to reassign the button tag */
  tagName?: any,
};

const BUTTON_HEIGHT_BY_SIZE = {
  xs: '2rem',
  sm: '3rem',
  md: '4rem',
  lg: '5rem',
  xl: '6rem',
};

const DEFAULT_MODIFIERS = {
  variant: 'raised',
  color: 'primary',
  size: 'md',
};

const name = 'button';

const spinner = keyframes`
  from { transform: rotate(0deg)   }
  to   { transform: rotate(360deg) }
`;

const theme = createTheme(name, (colors: *, sizes: *): * => ({
  button: {
    cursor: 'pointer',
    fontSize: '1.4rem',
    fontWeight: '600',
    transition: 'all .15s ease-in-out',
    borderRadius: sizes.MAIN_BORDER_RADIUS,

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
      xs: {
        height: BUTTON_HEIGHT_BY_SIZE.xs,
        padding: '0 1rem',
      },
      sm: {
        height: BUTTON_HEIGHT_BY_SIZE.sm,
        padding: '0 2rem',
      },
      md: {
        height: BUTTON_HEIGHT_BY_SIZE.md,
        padding: '0 4rem',
      },
      lg: {
        height: BUTTON_HEIGHT_BY_SIZE.lg,
        padding: '0 6rem',
      },
      xl: {
        height: BUTTON_HEIGHT_BY_SIZE.xl,
        padding: '0 6rem',
        fontSize: '1.8rem',
      },
    },
    disabled: {
      backgroundColor: colors.LIGHT_GRAY5,
      borderColor: colors.LIGHT_GRAY3,
      color: colors.LIGHT_GRAY3,
      cursor: 'default',

      svg: {
        color: colors.LIGHT_GRAY3,
      },

      '&:hover': {
        boxShadow: 'none',
      },
    },
    stretch: {
      width: '100%',
    },
    squared: {
      padding: '0',
    },
    rounded: {
      borderRadius: '5rem',
    },
  },
  defaults: {
    ...DEFAULT_MODIFIERS,
  },
}));

const getLoading = (props: ButtonProps) => {
  const color = props.color === 'neutral'
    ? getThemeColors(props).LIGHT_GRAY1
    : getThemeColors(props).WHITE;

  return props.loading
    ? {
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
        border: `4px solid ${color}`,
        borderTopColor: 'transparent',
        borderRadius: '50%',
        animation: `${spinner} .7s infinite linear`,
      },
    }
    : {};
};

const getBackgroundColor = (props: ButtonProps) => {
  if (props.variant === 'raised') {
    switch (props.color) {
      case 'primary': return getThemeColors(props).PRIMARY_BUTTON_BACKGROUND_COLOR;
      case 'secondary': return getThemeColors(props).SECONDARY_BUTTON_BACKGROUND_COLOR;
      case 'red': return getThemeColors(props).RED_BUTTON_BACKGROUND_COLOR;
      case 'neutral': return getThemeColors(props).NEUTRAL_BUTTON_BACKGROUND_COLOR;
      case 'white': return getThemeColors(props).WHITE;
      default: return '';
    }
  } else {
    switch (props.color) {
      case 'white': return getThemeColors(props).TRANSPARENT;
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
      case 'red': return getThemeColors(props).LIGHT_PRIMARY_TEXT_COLOR;
      case 'white': return getThemeColors(props).PRIMARY_TEXT_COLOR;
      default: return '';
    }
  } else {
    switch (props.color) {
      case 'white': return getThemeColors(props).WHITE;
      default: return getThemeColors(props).PRIMARY_TEXT_COLOR;
    }
  }
};

const getBorderColor = (props: ButtonProps) => {
  switch (props.color) {
    case 'primary': return getThemeColors(props).PRIMARY_BUTTON_BACKGROUND_COLOR;
    case 'secondary': return getThemeColors(props).SECONDARY_BUTTON_BACKGROUND_COLOR;
    case 'red': return getThemeColors(props).RED_BUTTON_BACKGROUND_COLOR;
    case 'neutral': return getThemeColors(props).PRIMARY_BORDER_COLOR;
    case 'white': return getThemeColors(props).WHITE;
    default: return '';
  }
};

const getSquaredStyle = (props: ButtonProps) => {
  if (props.squared) {
    return {
      width: BUTTON_HEIGHT_BY_SIZE[props.size || DEFAULT_MODIFIERS.size],
      height: BUTTON_HEIGHT_BY_SIZE[props.size || DEFAULT_MODIFIERS.size],
    };
  }

  return {};
};

const StyledTag = createStyledTag(name, props => ({
  outline: 'none',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  ...getThemeStyle(props, name).button,

  ...getSquaredStyle(props),

  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: getBorderColor(props),
  backgroundColor: getBackgroundColor(props),
  color: getColor(props),

  ...getLoading(props),
}));

class Button extends Component<ButtonProps> {
  static defaultProps = {
    ...theme[name].defaults,
    ...DEFAULT_MODIFIERS,
  };

  onClick = (event: *) => {
    const { onClick, disabled } = this.props;

    !disabled && onClick && onClick(event);
  }

  render() {
    const { text, children, type, onClick, loading, ...rest } = this.props;

    return (
      <StyledTag
        tagName="button"
        type={ type }
        loading={ loading }
        onClick={ this.onClick }
        { ...rest }
      >
        { children || text }
      </StyledTag>
    );
  }
}

export { Button, theme };
