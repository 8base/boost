import { createThemeTag } from '../../theme/createThemeTag';

const name = 'tab';

const [TabOuter, themeTabOuter] = createThemeTag(name, () => ({
  root: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '32px',
    padding: '6px 12px',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#323C47',
    borderRadius: '5px 5px 0 0',
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',

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

