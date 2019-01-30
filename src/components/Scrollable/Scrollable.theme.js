import { createThemeTag } from '../../theme/createThemeTag';


const name = 'scrollable';

const [ScrollableWrapper, themeWrapper] = createThemeTag(name, {
  root: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
});

const [ScrollableContent, themeContent] = createThemeTag(`${name}Content`, {
  root: {
    height: '100%',
  },
});

const theme = {
  ...themeWrapper,
  ...themeContent,
};

export {
  theme,
  ScrollableWrapper,
  ScrollableContent,
};
