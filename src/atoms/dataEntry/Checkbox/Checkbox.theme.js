// @flow

import { createStyledTag, createComponentTheme, getThemeColors } from '../../../utils';

const name = 'checkbox';

const theme = createComponentTheme(name, (colors: *): * => ({
  modifiers: {
    hasError: {
      borderColor: 'red',
    },
    disabled: {
      backgroundColor: colors.LIGHT_GRAY4,
    },
    color: {
      primary: { color: colors.PRIMARY },
      secondary: { color: colors.SECONDARY },
    },
  },
}));

const CheckboxWrapperTag = createStyledTag(name, {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

const CheckboxSquareTag = createStyledTag(name, props => ({
  position: 'relative',
  width: '2.5rem',
  height: '2.5rem',

  background: 'white',
  border: `1px solid ${getThemeColors(props).PRIMARY_BORDER_COLOR}`,
  borderRadius: '.5rem',
  transition: 'all .3s ease',
}));

const CheckboxIconTag = createStyledTag(name, props => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  opacity: props.checked ? 1 : 0,
  lineHeight: 1,
  transition: 'all .15s ease-in-out',
}));

const CheckboxTag = createStyledTag(name, {
  display: 'none',
});

const CheckboxTextTag = createStyledTag(name, props => ({
  paddingLeft: '1.2rem',
  fontSize: '1.4rem',
  cursor: 'pointer',
  color: getThemeColors(props).SECONDARY_TEXT_COLOR,
}));

export { theme, CheckboxSquareTag, CheckboxTag, CheckboxWrapperTag, CheckboxTextTag, CheckboxIconTag };

