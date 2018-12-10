import { createStyledTag, createComponentTheme } from '../../utils';

const name = 'progress';

const themeInner = createComponentTheme(`${name}Inner`, (colors: *) => ({
  root: {
    heigth: '1.2rem',
    background: colors.LIGHT_GRAY4,
    borderRadius: '1.2rem',
  },
}));

const themeValue = createComponentTheme(`${name}Value`, (colors: *) => ({
  root: {
    backgroundColor: colors.PRIMARY,
    borderRadius: '1.2rem',
  },
}));

const themeText = createComponentTheme(`${name}Text`, (colors: *, sizes: *) => ({
  root: {
    fontSize: sizes.MEDIUM_FONT_SIZE,
    fontWeight: '600',
    color: colors.PRIMARY,
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
