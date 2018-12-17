// @flow

import { createStyledTag, createComponentTheme } from '../../utils';

const name = 'code';

const themeWrapper = createComponentTheme(`${name}Wrapper`, ({ COLORS, SIZES }: *) => ({
  root: {
    border: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
    borderRadius: SIZES.MAIN_BORDER_RADIUS,
  },
}));

const themeCounter = createComponentTheme(`${name}Counter`, ({ COLORS }: *) => ({
  root: {
    color: COLORS.DARK_GRAY1,
    fontFamily: 'Courier',
  },
}));

const themeBody = createComponentTheme(`${name}Body`, ({ COLORS }: *) => ({
  root: {
    color: COLORS.DARK_GRAY1,
    fontFamily: 'Courier',
  },
}));

const themeNumberic = createComponentTheme(`${name}Numberic`, ({ COLORS }: *) => ({
  root: {
    backgroundColor: COLORS.LIGHT_GRAY5,
    borderRight: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
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
  fontSize: props.theme.SIZES.BODY_TEXT,
  lineHeight: '2',
}));

const CodeNumericTag = createStyledTag(`${name}Numberic`, (props) => ({
  height: props.height ? 'auto' : '100%',
  padding: '20px 0 40px',
  borderTopLeftRadius: props.theme.SIZES.MAIN_BORDER_RADIUS,
  borderBottomLeftRadius: props.theme.SIZES.MAIN_BORDER_RADIUS,
}));

const CodeNumberWrapperTag = createStyledTag(`${name}NumberWrapper`, (props) => ({
  height: props.height ? `${props.height}px` : 'auto',
  display: 'block',
  width: '32px',
  flexShrink: 0,
  position: 'relative',
}));

const CodeNumberPlateTag = createStyledTag(`${name}NumberPlate`, {
  height: '100%',
  display: 'block',
  width: '32px',
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
  padding: '20px',
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
