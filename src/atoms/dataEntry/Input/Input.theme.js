// @flow
import { createStyledTag, createComponentTheme, getThemeStyle, getThemeStyleByCond, getThemeColors } from '../../../utils';

const name = 'input';

const theme = createComponentTheme(name, (colors: *): * => ({
  input: {
    color: colors.PRIMARY_TEXT_COLOR,
    fontSize: '1.4rem',
    fontWeight: 400,
    height: '4rem',
    lineHeight: 'normal',
    transition: 'all .15s ease-in-out',

    '&::placeholder': {
      color: colors.PRIMARY,
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
        border: `1px solid ${colors.PRIMARY_BORDER_COLOR}`,
        borderRadius: '5px',
      },
      underline: {
        border: 0,
        borderBottom: `1px solid ${colors.PRIMARY_BORDER_COLOR}`,
      },
    },
  },

  inputError: {
    borderColor: `${colors.DANGER} !important`,
  },

  inputIndicator: {
    right: '1rem',
    top: '50%',
    marginTop: '-.3rem',
    width: '.6rem',
    height: '.6rem',
    backgroundColor: colors.DANGER,
    borderRadius: '50%',
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
  ...getThemeStyle(props, name).inputIndicator,
}));

const iconsStyles = {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '3rem',
};

const InputLeftIconTag = createStyledTag(`${name}LeftIcon`, {
  ...iconsStyles,
  left: '1rem',
});

const InputRightIconTag = createStyledTag(`${name}RightIcon`, {
  ...iconsStyles,
  right: '1rem',
});

const getInputStyles = props => ({
  width: props.width ? `${props.width}rem` : '100%',
  outline: 'none',
  paddingLeft: props.hasLeftIcon ? '4rem' : '1rem',
  paddingRight: props.hasRightIcon ? '5rem' : '2rem',

  ...getThemeStyle(props, name).input,
  ...getThemeStyleByCond(props, name, 'inputError', props.hasError),

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
