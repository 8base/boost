// @flow

import { createThemeTag } from '../../theme/createThemeTag';


const name = 'progress';


const [ProgressOuterTag, themeProgress] = createThemeTag(name, {
  root: {
    width: '100%',
    display: 'flex',
  },
});

const [ProgressInnerTag, themeInner] = createThemeTag(`${name}Inner`, ({ COLORS }: *) => ({
  root: {
    flex: '1',
    heigth: '12px',
    background: COLORS.LIGHT_GRAY4,
    borderRadius: '12px',
  },
}));

const [ProgressValueTag, themeValue] = createThemeTag(`${name}Value`, ({ COLORS }: *) => ({
  root: {
    height: '100%',
    backgroundColor: COLORS.PRIMARY,
    borderRadius: '12px',
  },
}));

const [ProgressTextTag, themeText] = createThemeTag(`${name}Text`, ({ COLORS, SIZES }: *) => ({
  root: {
    marginLeft: '12px',
    width: '40px',
    fontSize: SIZES.BODY_TEXT,
    lineHeight: SIZES.BODY_TEXT_LH,
    fontWeight: '600',
    color: COLORS.PRIMARY,
  },
}));

const theme = {
  ...themeProgress,
  ...themeInner,
  ...themeValue,
  ...themeText,
};


export {
  theme,
  ProgressOuterTag,
  ProgressInnerTag,
  ProgressValueTag,
  ProgressTextTag,
};
