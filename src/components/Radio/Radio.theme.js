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
      backgroundColor: COLORS.GRAY4,
    },
  },
}));


const [RadioTextTag, themeText] = createThemeTag(`${name}Text`, ({ COLORS }: *): * => ({
  root: {
    color: COLORS.SECONDARY_TEXT_COLOR,
    fontSize: COLORS.BODY_TEXT,
    cursor: 'pointer',
    paddingLeft: '12px',
  },
}));


const [RadioWrapperTag, themeRadioWrapper] = createThemeTag(`${name}Wrapper`, {
  root: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
});


const [RadioTag, themeRadio] = createThemeTag(name, {
  root: {
    display: 'none',
  },
});


const theme = {
  ...themeCircle,
  ...themeCircleInner,
  ...themeText,
  ...themeRadioWrapper,
  ...themeRadio,
};


export {
  theme,
  RadioCircleTag,
  RadioTag,
  RadioWrapperTag,
  RadioCircleInnerTag,
  RadioTextTag,
};
