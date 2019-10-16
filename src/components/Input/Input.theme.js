// @flow
import { createThemeTag } from '../../theme/createThemeTag';


const name = 'input';


const [InputTag, themeInput] = createThemeTag(name, ({ COLORS, SIZES, FONTS }: *): * => ({
  root: props => ({
    width: props.width ? `${props.width}rem` : props.stretch ? '100%' : SIZES.FIELD_WIDTH,
    outline: 'none',
    paddingLeft: props.hasLeftIcon ? '36px' : '8px',
    paddingRight: props.hasRightIcon || (props.type === 'number' && !props.hideNumberArrows) ? '48px' : '16px',

    backgroundColor: (props.disabled || props.readOnly)
      ? COLORS.DISABLED_COLOR
      : COLORS.WHITE,

    borderColor: COLORS.PRIMARY_BORDER_COLOR,

    '&:focus': {
      borderColor: (props.disabled || props.readOnly)
        ? COLORS.PRIMARY_BORDER_COLOR
        : COLORS.PRIMARY,
    },

    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },

    '&[type=number]': {
      '-moz-appearance': 'textfield',
    },

    '&::-ms-clear': {
      display: 'none',
    },

    ...FONTS.BODY_1,
    height: '36px',
    transition: 'all .15s ease-in-out',

    '&::placeholder': {
      color: COLORS.PLACEHOLDER_COLOR,
    },
  }),

  modifiers: {
    align: {
      left: { textAlign: 'left ' },
      right: { textAlign: 'right ' },
      center: { textAlign: 'center ' },
    },
    kind: {
      bordered: {
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '5px',
      },
      underline: {
        borderWidth: 0,
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
      },
    },
    hasError: {
      borderColor: `${COLORS.DANGER}`,
    },
  },
}));

const [InputWrapperTag, themeWrapper] = createThemeTag(`${name}Wrapper`, {
  root: props => ({
    display: 'inline-flex',
    position: 'relative',
    width: props.stretch && !props.width ? '100%' : 'auto',
  }),
});

const [InputIndicatorTag, themeIndicator] = createThemeTag(`${name}Indicator`, ({ COLORS }: *) => ({
  root: props => ({
    display: props.hasRightIcon ? 'none' : 'block',
    position: 'absolute',
    right: '8px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '6px',
    height: '6px',
    backgroundColor: COLORS.DANGER,
    borderRadius: '50%',
  }),
}));

const iconsStyles = {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '32px',
};

const [InputLeftIconTag, themeLeftIcon] = createThemeTag(`${name}LeftIcon`, {
  root: {
    ...iconsStyles,
    left: '8px',
  },
});

const [InputRightIconTag, themeRightIcon] = createThemeTag(`${name}RightIcon`, {
  root: {
    ...iconsStyles,
    right: '8px',
  },
});

const [InputClearButtonTag, themeClearButton] = createThemeTag(`${name}ClearButton`, ({ COLORS }: *) => ({
  root: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    right: '8px',
    color: COLORS.PRIMARY_BORDER_COLOR,
    cursor: 'pointer',
  },
}));

const [InputArrowsTag, themeInputArrows] = createThemeTag(`${name}Arrows`, () => ({
  root: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    height: '64%',
    right: '8px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
}));

const [InputArrowTag, themeInputArrow] = createThemeTag(`${name}Arrow`, () => ({
  root: {
    ...iconsStyles,
    position: 'relative',
    height: '50%',
    cursor: 'pointer',
    userSelect: 'none',
  },
}));

const theme = {
  ...themeInput,
  ...themeClearButton,
  ...themeRightIcon,
  ...themeLeftIcon,
  ...themeIndicator,
  ...themeWrapper,
  ...themeInputArrows,
  ...themeInputArrow,
};

export {
  InputWrapperTag,
  InputTag,
  InputIndicatorTag,
  InputRightIconTag,
  InputLeftIconTag,
  InputClearButtonTag,
  InputArrowsTag,
  InputArrowTag,
  theme,
};
