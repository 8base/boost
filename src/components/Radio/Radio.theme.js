// @flow

import { createThemeTag } from '../../theme/createThemeTag';


const name = 'radio';


const [RadioCircleTag, themeCircle] = createThemeTag(`${name}Circle`, ({ COLORS }: *): * => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '16px',
    height: '16px',
    borderRadius: '50%',
    transition: 'opacity .3s ease',
    background: COLORS.WHITE,
    border: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,

    '&:hover': {
      boxShadow: '0 1px 2px 0 rgba(50,50,93,0.14), 0 3px 4px 0 rgba(112,157,199,0.08)',
    },

    'input:focus + &': {
      boxShadow: 'inset 0 1px 2px 0 rgba(50,50,93,0.14), inset 0 3px 4px 0 rgba(112,157,199,0.08)',
    },

    'input:active + &': {
      boxShadow: 'inset 0 1px 2px 0 rgba(50,50,93,0.14), inset 0 3px 4px 0 rgba(112,157,199,0.08)',
    },
  },
  modifiers: {
    hasError: {
      borderColor: COLORS.DANGER,
    },
  },
}));


const [RadioCircleInnerTag, themeCircleInner] = createThemeTag(`${name}CircleInner`, ({ COLORS }: *): * => ({
  root: props => ({
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-4px',
    marginTop: '-4px',
    width: '8px',
    height: '8px',

    borderRadius: '50%',
    opacity: props.checked ? 1 : 0,
  }),
  modifiers: {
    color: {
      primary: { backgroundColor: COLORS.PRIMARY },
      secondary: { backgroundColor: COLORS.SECONDARY },
    },
    disabled: {
      backgroundColor: COLORS.GRAY_50,
    },
  },
}));


const [RadioTextTag, themeText] = createThemeTag(`${name}Text`, ({ COLORS }: *): * => ({
  root: {
    color: COLORS.SECONDARY_TEXT_COLOR,
    fontSize: COLORS.BODY_TEXT,
    cursor: 'pointer',
    paddingLeft: '8px',
  },
}));


const [RadioWrapperTag, themeRadioWrapper] = createThemeTag(`${name}Wrapper`, {
  root: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
});

const [RadioButtonTag, themeRadioButton] = createThemeTag(`${name}Button`, {
  root: {
    flex: 1,

    '&:first-child > *': {
      borderRightStyle: 'unset',
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },

    '&:last-child > *': {
      borderLeftStyle: 'unset',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },

    '&:not(:first-child):not(:last-child) > *': {
      borderRadius: 0,
    },
  },
});

const [RadioTag, themeRadio] = createThemeTag(name, {
  root: {
    opacity: 0,
    position: 'absolute',
  },
});


const theme = {
  ...themeCircle,
  ...themeCircleInner,
  ...themeText,
  ...themeRadioWrapper,
  ...themeRadioButton,
  ...themeRadio,
};


export {
  theme,
  RadioCircleTag,
  RadioTag,
  RadioWrapperTag,
  RadioCircleInnerTag,
  RadioButtonTag,
  RadioTextTag,
};
