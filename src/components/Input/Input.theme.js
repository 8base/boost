// @flow
import { createStyledTag, createComponentTheme, getThemeStyle, getThemeColors } from '../../utils';

const name = 'input';

const theme = createComponentTheme(name, ({ COLORS, SIZES }: *): * => ({
  root: {
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: SIZES.BODY_TEXT,
    fontWeight: 400,
    height: '36px',
    lineHeight: 'normal',
    transition: 'all .15s ease-in-out',

    '&::placeholder': {
      color: COLORS.PLACEHOLDER_COLOR,
    },
  },

  modifiers: {
    align: {
      left: { textAlign: 'left ' },
      right: { textAlign: 'right ' },
      center: { textAlign: 'center ' },
    },
    kind: {
      bordered: {
        border: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
        borderRadius: '5px',
      },
      underline: {
        border: 0,
        borderBottom: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
      },
    },
    hasError: {
      borderColor: `${COLORS.DANGER} !important`,
    },
  },

  defaults: {
    kind: 'app',
  },
}));

const InputWrapperTag = createStyledTag(`${name}Wrapper`, props => ({
  display: 'inline-flex',
  position: 'relative',
  width: props.stretch && !props.width ? '100%' : 'auto',
}));

const InputIndicatorTag = createStyledTag(`${name}Indicator`, props => ({
  display: props.hasRightIcon ? 'none' : 'block',
  position: 'absolute',
  right: '8px',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '6px',
  height: '6px',
  backgroundColor: getThemeColors(props).DANGER,
  borderRadius: '50%',
}));

const iconsStyles = {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '32px',
};

const InputLeftIconTag = createStyledTag(`${name}LeftIcon`, {
  ...iconsStyles,
  left: '8px',
});

const InputRightIconTag = createStyledTag(`${name}RightIcon`, {
  ...iconsStyles,
  right: '8px',
});

const getInputStyles = props => ({
  width: props.width ? `${props.width}rem` : '100%',
  outline: 'none',
  paddingLeft: props.hasLeftIcon ? '36px' : '8px',
  paddingRight: props.hasRightIcon ? '48px' : '16px',

  ...getThemeStyle(props, name).input,

  backgroundColor: (props.disabled || props.readOnly)
    ? getThemeColors(props).LIGHT_GRAY5
    : getThemeColors(props).WHITE,

  '&:focus': {
    borderColor: (props.disabled || props.readOnly)
      ? getThemeColors(props).PRIMARY_BORDER_COLOR
      : getThemeColors(props).PRIMARY,
  },

  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },

  '&::-ms-clear': {
    display: 'none',
  },
});

const InputTag = createStyledTag(name, props => ({
  ...getInputStyles(props),
}));

export {
  InputWrapperTag,
  InputTag,
  InputIndicatorTag,
  InputRightIconTag,
  InputLeftIconTag,
  theme,
};