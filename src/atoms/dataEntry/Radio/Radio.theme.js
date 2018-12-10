// @flow

import { createStyledTag, createComponentTheme } from '../../../utils';

const name = 'radio';

const themeCircle = createComponentTheme(`${name}Circle`, (colors: *): * => ({
  root: {
    background: colors.WHITE,
    border: `1px solid ${colors.PRIMARY_BORDER_COLOR}`,
  },
  modifiers: {
    hasError: {
      borderColor: colors.DANGER,
    },
  },
}));


const themeCircleInner = createComponentTheme(`${name}CircleInner`, (colors: *): * => ({
  modifiers: {
    color: {
      primary: { backgroundColor: colors.PRIMARY },
      secondary: { backgroundColor: colors.SECONDARY },
    },
    disabled: {
      backgroundColor: colors.GRAY4,
    },
  },
}));

const themeText = createComponentTheme(`${name}Text`, (colors: *): * => ({
  root: {
    color: colors.SECONDARY_TEXT_COLOR,
    fontSize: colors.MAIN_FONT_SIZE,
  },
}));


const theme = {
  ...themeCircle,
  ...themeCircleInner,
  ...themeText,
};


const RadioWrapperTag = createStyledTag(`${name}Wrapper`, {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

const RadioCircleTag = createStyledTag(`${name}Circle`, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '2.5rem',
  height: '2.5rem',

  borderRadius: '50%',
  transition: 'opacity .3s ease',
});

const RadioCircleInnerTag = createStyledTag(`${name}CircleInner`, props => ({
  display: 'block',
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginLeft: '-.4rem',
  marginTop: '-.4rem',
  width: '.8rem',
  height: '.8rem',

  borderRadius: '50%',
  opacity: props.selected ? 1 : 0,
}));

const RadioTag = createStyledTag(name, {
  display: 'none',
});

const RadioTextTag = createStyledTag(`${name}Text`, {
  cursor: 'pointer',
  paddingLeft: '1.2rem',
});

export { theme, RadioCircleTag, RadioTag, RadioWrapperTag, RadioCircleInnerTag, RadioTextTag };
