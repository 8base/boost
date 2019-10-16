// @flow

import { createThemeTag } from '../../theme/createThemeTag';

const name = 'code';

const [CodeWrapperTag, themeWrapper] = createThemeTag(`${name}Wrapper`, ({ COLORS, SIZES }: *) => ({
  root: props => ({
    border: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
    borderRadius: SIZES.MAIN_BORDER_RADIUS,
    height: props.height ? `${props.height}px` : '100%',
    overflow: 'hidden',
  }),
}));

const [CodeLineCounterTag, themeCounter] = createThemeTag(`${name}Counter`, ({ COLORS, SIZES, FONTS }: *) => ({
  root: {
    ...FONTS.BODY_1,
    fontFamily: 'Courier',
    opacity: '0.5',
    textAlign: 'center',
    lineHeight: 2,
  },
}));

const [CodeBodyTag, themeBody] = createThemeTag(`${name}Body`, ({ COLORS }: *) => ({
  root: {
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontFamily: 'Courier',
    overflow: 'auto',
    height: '100%',
    padding: '20px',
    lineHeight: 2,
  },
}));


const [CodeNumericTag, themeNumeric] = createThemeTag(`${name}Numeric`, ({ COLORS, SIZES }: *) => ({
  root: (props) => ({
    height: props.height ? 'auto' : '100%',
    backgroundColor: COLORS.GRAY_10,
    borderRight: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
    padding: '20px 0 40px',
    borderTopLeftRadius: SIZES.MAIN_BORDER_RADIUS,
    borderBottomLeftRadius: SIZES.MAIN_BORDER_RADIUS,
  }),
}));


const [CodePlateTag, themePlate] = createThemeTag(`${name}Plate`, {
  root: {
    display: 'flex',
    width: '100%',
    overflow: 'hidden',
    alignItems: 'stretch',
    position: 'relative',
  },
});


const [CodeNumberWrapperTag, themeNumberWrapper] = createThemeTag(`${name}NumberWrapper`, {
  root: (props) => ({
    height: props.height ? `${props.height}px` : 'auto',
    display: 'block',
    width: '32px',
    flexShrink: 0,
    position: 'relative',
  }),
});


const [CodeNumberPlateTag, themeNumberPlate] = createThemeTag(`${name}NumberPlate`, {
  root: {
    height: '100%',
    display: 'block',
    position: 'absolute',
    overflow: 'hidden',
    width: '32px',
  },
});


const [CodeBodyWrapperTag, themeBodyWrapper] = createThemeTag(`${name}BodyWrapper`, {
  root: (props) => ({
    overflow: 'hidden',
    height: props.height ? `${props.height}px` : '100%',
    width: '100%',
  }),
});

const [CodeCopyButtonWrapper, themeCopyButtonWrapper] = createThemeTag(`${name}CopyButtonWrapper`, {
  root: {
    position: 'absolute',
    top: '10px',
    right: '32px',
  },
});


const theme = {
  ...themeBodyWrapper,
  ...themeNumberWrapper,
  ...themeNumberPlate,
  ...themePlate,
  ...themeWrapper,
  ...themeCounter,
  ...themeBody,
  ...themeNumeric,
  ...themeCopyButtonWrapper,
};

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
  CodeCopyButtonWrapper,
};
