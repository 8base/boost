// @flow

import { keyframes } from '@emotion/core';
import { createThemeTag } from '../../theme/createThemeTag';


const BUTTON_HEIGHT_BY_SIZE = {
  sm: '36px',
  md: '40px',
  lg: '52px',
};

const name = 'button';

const spinner = keyframes`
  from { transform: rotate(0deg)   }
  to   { transform: rotate(360deg) }
`;


const getLoading = (props: *, COLORS: *) => {
  let color = props.variant === 'ghost' ? COLORS.PRIMARY_BORDER_COLOR : COLORS.WHITE;

  if (props.color === 'neutral') {
    color = COLORS.GRAY_30;
  }

  if (props.color === 'warning') {
    color = COLORS.GRAY_60;
  }

  return props.loading
    ? {
      '&:after': {
        content: '""',
        position: 'absolute',
        left: '50%',
        right: '50%',
        top: '50%',
        bottom: '50%',

        width: '20px',
        height: '20px',
        marginLeft: '-10px',
        marginTop: '-10px',
        border: `4px solid ${color}`,
        borderTopColor: 'transparent',
        borderRadius: '50%',
        animation: `${spinner} .7s infinite linear`,
      },
    }
    : {};
};

const getSquaredStyle = (props: *) => {
  if (props.squared && props.size) {
    return {
      width: BUTTON_HEIGHT_BY_SIZE[props.size],
      minWidth: BUTTON_HEIGHT_BY_SIZE[props.size],
      height: BUTTON_HEIGHT_BY_SIZE[props.size],
    };
  }

  return {};
};

const boxShadowHover = '0 2px 4px 0 rgba(50,50,93,0.2)';
const boxShadowFocus = 'inset 0 1px 3px 0 rgba(50,50,93,0.14), inset 0 4px 6px 0 rgba(51,80,107,0.08)';


const getLinkStyles = (props: *) => {
  if (props.kind === 'link') {
    return {
      backgroundColor: 'transparent',
      border: 'none',
      padding: '0 !important',
      height: 'auto !important',
    };
  }

  return {};
};


const getSizeStyles = (props) => {
  if (props.kind === 'link') {
    return {};
  }

  switch (props.size) {
    case 'sm': return {
      height: BUTTON_HEIGHT_BY_SIZE.sm,
      padding: '0 20px',
    };
    case 'md': return {
      height: BUTTON_HEIGHT_BY_SIZE.md,
      padding: '0 32px',
    };
    case 'lg': return {
      height: BUTTON_HEIGHT_BY_SIZE.lg,
      padding: '0 48px',
    };
  }
};

const getKindStyles = (props: *, COLORS: *) => {

  switch (props.kind) {
    case 'ghost': {
      return {
        color: COLORS.WHITE,
        backgroundColor: 'transparent',
      };
    }

    case 'link': {
      if (props.disabled) {
        return {
          color: COLORS.DISABLED_TEXT_COLOR,
          cursor: 'not-allowed',

          svg: {
            color: COLORS.GRAY_30,
          },
        };
      }

      if (props.color === 'primary') {
        return {
          color: COLORS.BLUE_30,

          '&:hover': {
            color: COLORS.BLUE_20,
          },

          '&:focus': {
            color: COLORS.BLUE_10,
          },
        };
      } else if (props.color === 'danger') {
        return {
          color: COLORS.RED_40,

          '&:hover': {
            color: COLORS.RED_30,
          },

          '&:focus': {
            color: COLORS.RED_20,
          },
        };
      } else if (props.color === 'success') {
        return {
          color: COLORS.GREEN_40,
        };
      } else if (props.color === 'neutral') {
        return {
          color: COLORS.GRAY_60,
          '&:hover': {
            color: COLORS.GRAY_50,
          },

          '&:focus': {
            color: COLORS.GRAY_40,
          },
        };
      }
    } break;

    case 'raised':
    default: {
      if (props.disabled) {
        return {
          backgroundColor: COLORS.GRAY_20,
          borderColor: COLORS.GRAY_30,
          color: COLORS.DISABLED_TEXT_COLOR,
          cursor: 'not-allowed',

          svg: {
            color: COLORS.GRAY_30,
          },

          '&:hover': {
            boxShadow: 'none',
          },
        };
      }

      if (props.color === 'primary') {
        return {
          backgroundColor: COLORS.BLUE_30,
          borderColor: COLORS.BLUE_30,
          color: COLORS.WHITE,

          '&:hover': {
            backgroundColor: COLORS.BLUE_20,
            borderColor: COLORS.BLUE_20,
            boxShadow: boxShadowHover,
          },

          '&:focus': {
            backgroundColor: COLORS.BLUE_10,
            borderColor: COLORS.BLUE_10,
            boxShadow: boxShadowFocus,
          },
        };
      } else if (props.color === 'danger') {
        return {
          backgroundColor: COLORS.RED_40,
          borderColor: COLORS.RED_40,
          color: COLORS.WHITE,

          '&:hover': {
            backgroundColor: COLORS.RED_30,
            borderColor: COLORS.RED_30,
            boxShadow: boxShadowHover,
          },

          '&:focus': {
            backgroundColor: COLORS.RED_20,
            borderColor: COLORS.RED_20,
            boxShadow: boxShadowFocus,
          },
        };
      } else if (props.color === 'warning') {
        return {
          backgroundColor: COLORS.YELLOW_30,
          borderColor: COLORS.YELLOW_30,

          '&:hover': {
            backgroundColor: COLORS.YELLOW_20,
            borderColor: COLORS.YELLOW_20,
            boxShadow: boxShadowHover,
          },

          '&:focus': {
            backgroundColor: COLORS.YELLOW_10,
            borderColor: COLORS.YELLOW_10,
            boxShadow: boxShadowFocus,
          },
        };
      } else if (props.color === 'success') {
        return {
          backgroundColor: COLORS.GREEN_40,
          borderColor: COLORS.GREEN_40,
          color: COLORS.WHITE,

          '&:hover': {
            backgroundColor: COLORS.GREEN_30,
            borderColor: COLORS.GREEN_30,
            boxShadow: boxShadowHover,
          },

          '&:focus': {
            backgroundColor: COLORS.GREEN_20,
            borderColor: COLORS.GREEN_20,
            boxShadow: boxShadowFocus,
            color: COLORS.WHITE,
          },
        };
      } else if (props.color === 'neutral') {
        return {
          backgroundColor: COLORS.WHITE,
          borderColor: COLORS.PRIMARY_BORDER_COLOR,

          '&:hover': {
            boxShadow: boxShadowHover,
          },

          '&:focus': {
            boxShadow: boxShadowFocus,
          },
        };
      }
    }
  }
};


const [ButtonTag, theme] = createThemeTag(name, ({ COLORS, SIZES, FONTS }: *) => ({
  root: (props) => ({
    appearance: 'none',
    outline: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    whiteSpace: 'nowrap',

    ...FONTS.BUTTON,
    transition: 'all .15s ease-in-out',
    cursor: 'pointer',
    borderRadius: SIZES.MAIN_BORDER_RADIUS,
    borderStyle: 'solid',
    borderWidth: '1px',

    ...getSquaredStyle(props),
    ...getLoading(props, COLORS),
    ...getLinkStyles(props, COLORS),
    ...getKindStyles(props, COLORS),
    ...getSizeStyles(props),

    '& > *:not(:last-child)': {
      marginRight: '8px',
    },

    '& i': {
      width: '20px',
      height: '20px',
    },
  }),
  modifiers: {
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

      '& > *': {
        visibility: 'hidden',
      },
    },
  },
}));

export { ButtonTag, theme };
