// @flow

import React, { Component } from 'react';

import { keyframes } from 'react-emotion';
import { createStyledTag, createComponentTheme, getThemeColors } from '../../utils';

export type ButtonProps = {
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
  type?: 'submit' | 'button' | 'reset',
  /** possible button colors */
  color?: 'primary' | 'secondary' | 'neutral' | 'danger',
  /** the type of button */
  variant?: 'outlined' | 'raised' | 'ghost',
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

const theme = createComponentTheme(name, (colors: *, sizes: *): * => ({
  button: {
    cursor: 'pointer',
    fontSize: '1.4rem',
    fontWeight: '600',
    transition: 'all .15s ease-in-out',
    borderRadius: sizes.MAIN_BORDER_RADIUS,
    borderStyle: 'solid',
    borderWidth: '1px',

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
    color: {
      primary: {
        backgroundColor: colors.PRIMARY,
        borderColor: colors.PRIMARY,
        color: colors.WHITE,
      },
      secondary: {
        backgroundColor: colors.SECONDARY,
        borderColor: colors.SECONDARY,
        color: colors.WHITE,
      },
      neutral: {
        backgroundColor: colors.WHITE,
        borderColor: colors.PRIMARY_BORDER_COLOR,
        color: colors.BLACK,
      },
      danger: {
        backgroundColor: colors.DANGER_DARK,
        borderColor: colors.DANGER_DARK,
        color: colors.WHITE,
      },
    },

    variant: {
      outlined: {
        backgroundColor: colors.WHITE,
        color: colors.BLACK,
      },
      ghost: {
        backgroundColor: colors.TRANSPARENT,
        color: colors.WHITE,
      },
    },

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
      pointerEvents: 'none',

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
      padding: '0 2rem',
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

const getSquaredStyle = (props: ButtonProps) => {
  if (props.squared) {
    return {
      width: BUTTON_HEIGHT_BY_SIZE[props.size || DEFAULT_MODIFIERS.size],
      height: BUTTON_HEIGHT_BY_SIZE[props.size || DEFAULT_MODIFIERS.size],
    };
  }

  return {};
};

const ButtonTag = createStyledTag(name, props => ({
  outline: 'none',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
  whiteSpace: 'nowrap',

  ...getSquaredStyle(props),
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
    const { text, children, type, loading, ...rest } = this.props;

    return (
      <ButtonTag
        tagName="button"
        { ...rest }
        type={ type }
        loading={ loading }
        onClick={ this.onClick }
        aria-busy={ String(loading) }
      >
        { children || text }
      </ButtonTag>
    );
  }
}

export { Button, theme };
