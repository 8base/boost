// @flow
import styled from 'react-emotion';
import InputMask from 'react-input-mask';
import { createStyledTag, createTheme, getThemeStyle, getThemeStyleByCond } from '../../../utils';

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

  modifiers: {
    align: {
      left: { textAlign: 'left ' },
      right: { textAlign: 'right ' },
      center: { textAlign: 'center ' },
    },
  },

  inputSquare: {
    width: '4rem',
    textAlign: 'center',
    padding: 0,
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
  },
}));

const InputWrapperTag = createStyledTag(name, props => ({
  display: 'inline-flex',
  position: 'relative',
  width: props.stretch && !props.square ? '100%' : 'auto',
}));

const InputIndicatorTag = createStyledTag(name, props => ({
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

const InputLeftIconTag = createStyledTag(name, {
  ...iconsStyles,
  left: 0,
});

const InputRightIconTag = createStyledTag(name, {
  ...iconsStyles,
  right: 0,
});

const getInputStyles = props => ({
  width: '100%',
  outline: 'none',
  paddingLeft: props.hasLeftIcon ? '3rem' : '1rem',
  paddingRight: props.hasRightIcon ? '3rem' : '2rem',

  ...getThemeStyle(props, name).input,
  ...getThemeStyleByCond(props, name, 'inputError', props.hasError),
  ...getThemeStyleByCond(props, name, 'inputSquare', props.square),

  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },
});

const InputTag = createStyledTag(name, props => ({
  ...getInputStyles(props),
}));

const InputMaskStyled = styled(InputMask)(getInputStyles);

export { InputWrapperTag, InputTag, InputIndicatorTag, InputRightIconTag, InputLeftIconTag, InputMaskStyled, theme };
