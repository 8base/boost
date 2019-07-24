import { createThemeTag } from '../../theme/createThemeTag';

const name = 'divider';

const [DividerOuter, themeOuter] = createThemeTag(name, () => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'stretch',
    marginTop: '32px',
    marginBottom: '32px',
    height: '18px',
  },
}));

const [DividerInner, themeInner] = createThemeTag(`${name}Inner`, ({ COLORS }) => ({
  root: {
    height: '1px',
    backgroundColor: COLORS.LIGHT_GRAY1,
    width: '100%',
  },
}));

const [DividerTitle, themeTitle] = createThemeTag(`${name}Title`, ({ COLORS }) => ({
  root: {
    fontSize: '12px',
    fontFamily: 'inherit',
    fontWeight: 600,
    color: COLORS.DSM_DARK_GREY_1,
    lineHeight: '18px',
    whiteSpace: 'nowrap',
    flexGrow: 2,
    marginRight: '8px',
    marginLeft: '8px',
  },
}));

const theme = {
  ...themeOuter,
  ...themeInner,
  ...themeTitle,
};

export {
  DividerOuter,
  DividerInner,
  DividerTitle,
  theme,
};

