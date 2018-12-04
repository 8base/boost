// @flow

import { createStyledTag, createComponentTheme } from '../../utils';

const name = 'code';

const theme = createComponentTheme(name, {
});

const CodeWrapperTag = createStyledTag(name, (props) => ({
  height: props.height ? `${props.height}px` : '100%',
  border: `1px solid ${props.theme.COLORS.LIGHT_GRAY1}`,
  borderRadius: props.theme.SIZES.MAIN_BORDER_RADIUS,
  overflow: 'hidden',
}));

const CodePlateTag = createStyledTag(name, {
  display: 'flex',
  width: '100%',
  overflow: 'hidden',
  alignItems: 'stretch',
});

const CodeLineCounterTag = createStyledTag(name, (props) => ({
  opacity: '0.5',
  color: props.theme.COLORS.DARK_GRAY1,
  fontSize: '1.4rem',
  fontFamily: 'Courier',
  lineHeight: '2',
  textAlign: 'center',
}));

const CodeNumericTag = createStyledTag(name, (props) => ({
  height: props.height ? 'auto' : '100%',
  padding: '2rem 0 4rem',
  backgroundColor: props.theme.COLORS.LIGHT_GRAY5,
  borderRight: `1px solid ${props.theme.COLORS.LIGHT_GRAY1}`,
  borderTopLeftRadius: props.theme.SIZES.MAIN_BORDER_RADIUS,
  borderBottomLeftRadius: props.theme.SIZES.MAIN_BORDER_RADIUS,
}));

const CodeNumberWrapperTag = createStyledTag(name, (props) => ({
  height: props.height ? `${props.height}px` : 'auto',
  display: 'block',
  width: '3rem',
  flexShrink: 0,
  position: 'relative',
}));

const CodeNumberPlateTag = createStyledTag(name, {
  height: '100%',
  display: 'block',
  width: '3rem',
  position: 'absolute',
  overflow: 'hidden',
});

const CodeBodyWrapperTag = createStyledTag(name, (props) => ({
  overflow: 'hidden',
  height: props.height ? `${props.height}px` : '100%',
  width: '100%',
}));

const CodeBodyTag = createStyledTag(name, (props) => ({
  overflow: 'auto',
  padding: '2rem',
  fontFamily: 'Courier',
  lineHeight: '2',
  color: props.theme.COLORS.DARK_GRAY1,
  fontWeight: 'normal',
  height: '100%',
}));

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
