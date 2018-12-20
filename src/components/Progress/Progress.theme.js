// @flow

import { createStyledTag, createComponentTheme } from '../../utils';

const name = 'progress';

const themeInner = createComponentTheme(`${name}Inner`, ({ COLORS }: *) => ({
  root: {
    heigth: '12px',
    background: COLORS.LIGHT_GRAY4,
    borderRadius: '12px',
  },
}));

const themeValue = createComponentTheme(`${name}Value`, ({ COLORS }: *) => ({
  root: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: '12px',
  },
}));

const themeText = createComponentTheme(`${name}Text`, ({ COLORS, SIZES }: *) => ({
  root: {
    fontSize: SIZES.BODY_TEXT,
    lineHeight: SIZES.BODY_TEXT_LH,
    fontWeight: '600',
    color: COLORS.PRIMARY,
  },
}));

const theme = {
  ...themeInner,
  ...themeValue,
  ...themeText,
};


const ProgressOuterTag = createStyledTag(name, {
  width: '100%',
  display: 'flex',
});

const ProgressInnerTag = createStyledTag(`${name}Inner`, {
  flex: '1',
});

const ProgressValueTag = createStyledTag(`${name}Value`, {
  height: '100%',
});

const ProgressTextTag = createStyledTag(`${name}Text`, {
  marginLeft: '12px',
  width: '36px',
});


export {
  theme,
  ProgressOuterTag,
  ProgressInnerTag,
  ProgressValueTag,
  ProgressTextTag,
};
