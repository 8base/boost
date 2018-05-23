// @flow

import { createStyledTag, createTheme, getThemeColors } from 'utils';

const name = 'radio';

const theme = createTheme(name, (colors: *): * => ({
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

const RadioWrapperTag = createStyledTag(name, {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

const RadioCircleTag = createStyledTag(name, props => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '2.5rem',
  height: '2.5rem',

  background: 'white',
  border: `1px solid ${getThemeColors(props).PRIMARY_BORDER_COLOR}`,
  borderRadius: '50%',
  transition: 'opacity .3s ease',
}));

const RadioInnerCircleTag = createStyledTag(name, props => ({
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

const RadioTextTag = createStyledTag(name, props => ({
  paddingLeft: '1.2rem',
  fontSize: '1.4rem',
  cursor: 'pointer',
  color: getThemeColors(props).DARK_SECONDARY_TEXT_COLOR,
}));

export { theme, RadioCircleTag, RadioTag, RadioWrapperTag, RadioInnerCircleTag, RadioTextTag };
