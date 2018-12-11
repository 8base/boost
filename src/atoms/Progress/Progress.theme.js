import { createStyledTag, createComponentTheme } from '../../utils';

const name = 'progress';

const themeInner = createComponentTheme(`${name}Inner`, ({ COLORS }: *) => ({
  root: {
    heigth: '1.2rem',
    background: COLORS.LIGHT_GRAY4,
    borderRadius: '1.2rem',
  },
}));

const themeValue = createComponentTheme(`${name}Value`, ({ COLORS }: *) => ({
  root: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: '1.2rem',
  },
}));

const themeText = createComponentTheme(`${name}Text`, ({ COLORS, SIZES }: *) => ({
  root: {
    fontSize: SIZES.MEDIUM_FONT_SIZE,
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
  marginLeft: '1.2rem',
  width: '3.6rem',
});


export {
  theme,
  ProgressOuterTag,
  ProgressInnerTag,
  ProgressValueTag,
  ProgressTextTag,
};
