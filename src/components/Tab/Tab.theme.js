import { createThemeTag } from '../../theme/createThemeTag';

const name = 'tab';

const [TabOuter, themeTabOuter] = createThemeTag(name, ({ FONTS }: *) => ({
  root: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '32px',
    padding: '6px 12px',
    borderRadius: '5px 5px 0 0',
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    ...FONTS.SUBTITLE,

    '&:not(.active)': {
      opacity: 0.7,
      borderRadius: '5px 5px 0 0',
    },
  },
}));

const theme = {
  ...themeTabOuter,
};

export {
  TabOuter,
  theme,
};

