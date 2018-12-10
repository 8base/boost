// @flow

import { createStyledTag, createComponentTheme } from '../../utils';

const name = 'code';

const themeWrapper = createComponentTheme(`${name}Wrapper`, (colors: *, sizes: *) => ({
  root: {
    border: `1px solid ${colors.PRIMARY_BORDER_COLOR}`,
    borderRadius: sizes.MAIN_BORDER_RADIUS,
  },
}));

const themeCounter = createComponentTheme(`${name}Counter`, (colors: *) => ({
  root: {
    color: colors.DARK_GRAY1,
    fontFamily: 'Courier',
  },
}));

const themeBody = createComponentTheme(`${name}Body`, (colors: *) => ({
  root: {
    color: colors.DARK_GRAY1,
    fontFamily: 'Courier',
  },
}));

const themeNumberic = createComponentTheme(`${name}Numberic`, (colors: *) => ({
  root: {
    backgroundColor: colors.LIGHT_GRAY5,
    borderRight: `1px solid ${colors.PRIMARY_BORDER_COLOR}`,
  },
}));

const theme = {
  ...themeWrapper,
  ...themeCounter,
  ...themeBody,
  ...themeNumberic,
};


const CodeWrapperTag = createStyledTag(`${name}Wrapper`, (props) => ({
  height: props.height ? `${props.height}px` : '100%',
  overflow: 'hidden',
}));

const CodePlateTag = createStyledTag(`${name}Plate`, {
  display: 'flex',
  width: '100%',
  overflow: 'hidden',
  alignItems: 'stretch',
});

const CodeLineCounterTag = createStyledTag(`${name}Counter`, (props) => ({
  opacity: '0.5',
  textAlign: 'center',
  fontSize: props.theme.SIZES.MAIN_FONT_SIZE,
  lineHeight: '2',
}));

const CodeNumericTag = createStyledTag(`${name}Numberic`, (props) => ({
  height: props.height ? 'auto' : '100%',
  padding: '2rem 0 4rem',
  borderTopLeftRadius: props.theme.SIZES.MAIN_BORDER_RADIUS,
  borderBottomLeftRadius: props.theme.SIZES.MAIN_BORDER_RADIUS,
}));

const CodeNumberWrapperTag = createStyledTag(`${name}NumberWrapper`, (props) => ({
  height: props.height ? `${props.height}px` : 'auto',
  display: 'block',
  width: '3rem',
  flexShrink: 0,
  position: 'relative',
}));

const CodeNumberPlateTag = createStyledTag(`${name}NumberPlate`, {
  height: '100%',
  display: 'block',
  width: '3rem',
  position: 'absolute',
  overflow: 'hidden',
});

const CodeBodyWrapperTag = createStyledTag(`${name}BodyWrapper`, (props) => ({
  overflow: 'hidden',
  height: props.height ? `${props.height}px` : '100%',
  width: '100%',
}));

const CodeBodyTag = createStyledTag(`${name}Body`, {
  overflow: 'auto',
  height: '100%',
  padding: '2rem',
  lineHeight: '2',
  fontWeight: 'normal',


  fontFamily: 'Courier',
});

export {
  theme,
  CodeBodyTag,
  CodeWrapperTag,
  CodeNumericTag,
  CodePlateTag,
  CodeLineCounterTag,
  CodeBodyWrapperTag,
  CodeNumberWrapperTag,
  CodeNumberPlateTag,
};
