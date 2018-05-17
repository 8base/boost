// @flow

import { createStyledTag, createTheme, getThemeStyle } from 'utils';

const name = 'input';

const theme = createTheme(name, (colors: *): * => ({
  input: {
    border: `1px solid ${colors.PRIMARY_BORDER_COLOR}`,
    borderRadius: '5px',
    color: colors.PRIMARY_TEXT_COLOR,
    fontSize: '1.4rem',
    fontWeight: 400,
    height: '4rem',
    lineHeight: 'normal',
    transition: 'all .15s ease-in-out',

    '&:focus': {
      borderColor: colors.PRIMARY,
    },
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

  modifiers: {
    hasError: {
      borderColor: `${colors.DANGER} !important`,
    },
  },
  defaults: {
  },
}));

const InputWrapperTag = createStyledTag(name, props => ({
  display: 'inline-flex',
  position: 'relative',

  width: props.stretch ? '100%' : 'auto',
}));

const InputIndicatorTag = createStyledTag(name, props => ({
  display: props.hasRightIcon ? 'none' : 'block',
  position: 'absolute',
  ...getThemeStyle(props, name).inputIndicator,
}));

const InputTag = createStyledTag(name, props => ({
  width: '100%',
  outline: 'none',
  paddingLeft: props.hasLeftIcon ? '3rem' : '1rem',
  paddingRight: props.hasRightIcon ? '3rem' : '2rem',

  ...getThemeStyle(props, name).input,

  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },
}));


const iconsStyles = {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '3rem',
};

const InputLeftIconTag = createStyledTag(name, {
  ...iconsStyles,
  left: 0,
});

const InputRightIconTag = createStyledTag(name, {
  ...iconsStyles,
  right: 0,
});

export { InputWrapperTag, InputTag, InputIndicatorTag, InputRightIconTag, InputLeftIconTag, theme };
