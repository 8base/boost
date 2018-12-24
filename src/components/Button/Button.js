// @flow

import React, { Component } from 'react';

import { keyframes } from 'react-emotion';
import { createStyledTag, createComponentTheme, getThemeColors } from '../../utils';

export type ButtonProps = {
  /** callback to handle click */
  onClick?: Function,
  /** button content */
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
  color?: 'primary' | 'neutral' | 'danger',
  /** the type of button */
  variant?: 'outlined' | 'raised',
  /** posible sizes */
  size?: 'sm' | 'md' | 'lg',
  /** possible to reassign the button tag */
  tagName?: any,
};

const BUTTON_HEIGHT_BY_SIZE = {
  sm: '36px',
  md: '40px',
  lg: '52px',
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

const theme = createComponentTheme(name, ({ COLORS, SIZES }: *) => ({
  root: {
    cursor: 'pointer',
    fontSize: SIZES.SUBTITLE_1,
    fontWeight: '600',
    transition: 'all .15s ease-in-out',
    borderRadius: SIZES.MAIN_BORDER_RADIUS,
    borderStyle: 'solid',
    borderWidth: '1px',
    color: COLORS.WHITE,

    '&:hover': {
      boxShadow: '0 1px 3px 0 rgba(50,50,93,.14), 0 4px 6px 0 rgba(112,157,199,.08)',
    },

    '& > *:not(:last-child)': {
      marginRight: '8px',
    },
  },
  modifiers: {
    color: {
      primary: {
        backgroundColor: COLORS.PRIMARY,
        borderColor: COLORS.PRIMARY,
      },
      neutral: {
        backgroundColor: COLORS.LIGHT_GRAY1,
        borderColor: COLORS.PRIMARY_BORDER_COLOR,
      },
      danger: {
        backgroundColor: COLORS.DANGER_DARK,
        borderColor: COLORS.DANGER_DARK,
      },
    },

    variant: {
      outlined: {
        backgroundColor: COLORS.WHITE,
        color: COLORS.BLACK,
      },
    },

    size: {
      sm: {
        height: BUTTON_HEIGHT_BY_SIZE.sm,
        padding: '0 20px',
      },
      md: {
        height: BUTTON_HEIGHT_BY_SIZE.md,
        padding: '0 32px',
      },
      lg: {
        height: BUTTON_HEIGHT_BY_SIZE.lg,
        padding: '0 48px',
      },
    },
    disabled: {
      backgroundColor: COLORS.LIGHT_GRAY5,
      borderColor: COLORS.LIGHT_GRAY3,
      color: COLORS.LIGHT_GRAY3,
      cursor: 'default',
      pointerEvents: 'none',

      svg: {
        color: COLORS.LIGHT_GRAY3,
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
      borderRadius: '32px',
      padding: '0 20px',
    },
    loading: {
      color: 'transparent',
      position: 'relative',
      pointerEvents: 'none',
    },
  },
  defaults: {
    ...DEFAULT_MODIFIERS,
  },
}));

const getLoading = (props: ButtonProps) => {
  const color = props.variant === 'outlined' ? getThemeColors(props).LIGHT_GRAY1 : getThemeColors(props).WHITE;
  return props.loading
    ? {
      '&:after': {
        content: '""',
        position: 'absolute',
        left: '50%',
        right: '50%',
        top: '50%',
        bottom: '50%',

        width: '16px',
        height: '16px',
        marginLeft: '-8px',
        marginTop: '-8px',
        border: `4px solid ${color}`,
        borderTopColor: 'transparent',
        borderRadius: '50%',
        animation: `${spinner} .7s infinite linear`,
      },
    }
    : {};
};

const getSquaredStyle = (props: ButtonProps) => {
  if (props.squared && props.size) {
    return {
      width: BUTTON_HEIGHT_BY_SIZE[props.size],
      height: BUTTON_HEIGHT_BY_SIZE[props.size],
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
    const { onClick, disabled, loading } = this.props;

    !disabled && !loading && onClick && onClick(event);
  }

  render() {
    const { children, type, loading, ...rest } = this.props;

    return (
      <ButtonTag
        tagName="button"
        { ...rest }
        type={ type }
        loading={ loading }
        onClick={ this.onClick }
        aria-busy={ String(loading) }
      >
        { React.Children.map(children, (child) => typeof child === 'string' ? <span>{ child }</span> : child) }
      </ButtonTag>
    );
  }
}

export { Button, theme };
