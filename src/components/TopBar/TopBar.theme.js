//@flow

import { createThemeTag } from '../../theme/createThemeTag';

const name = 'topBar';

const [TopBarTag, themeTopBar] = createThemeTag(name, ({ COLORS }: *) => ({
  root: (props) => ({
    width: '100%',
    minHeight: '52px',
    padding: '8px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: COLORS[props.color],
    position: 'relative',
  }),
}));

const [TopBarCloseTag, themeTopBarClose] = createThemeTag(`${name}Close`, () => ({
  root: {
    position: 'absolute',
    right: 24,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginRight: '0 !important',
  },
}));

const theme = {
  ...themeTopBar,
  ...themeTopBarClose,
};

export { theme, TopBarTag, TopBarCloseTag };

