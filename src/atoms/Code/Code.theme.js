// @flow

import { createStyledTag, createTheme } from '../../utils';

const name = 'code';

const theme = createTheme(name, {
});

const CodeWrapperTag = createStyledTag(name, (props) => ({
  border: `1px solid ${props.theme.COLORS.LIGHT_GRAY1}`,
  borderRadius: props.theme.SIZES.MAIN_BORDER_RADIUS,
  display: 'flex',

  '&:before': {
    content: '""',
    display: 'block',
    width: '3rem',
    backgroundColor: props.theme.COLORS.LIGHT_GRAY5,
    borderRight: `1px solid ${props.theme.COLORS.LIGHT_GRAY1}`,
    zIndex: -1,
  },
}));

const CodeBodyTag = createStyledTag(name, (props) => ({
  padding: '2rem',
  fontFamily: 'Courier',
  lineHeight: '2',
  color: props.theme.COLORS.DARK_GRAY1,
  fontWeight: 'normal',
}));

export {
  theme,
  CodeBodyTag,
  CodeWrapperTag,
};
