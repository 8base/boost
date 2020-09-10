import { createThemeTag } from '../../theme/createThemeTag';

const name = 'divider';

const [DividerOuter, themeOuter] = createThemeTag(name, () => ({
  root: props => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'stretch',
    marginTop: props.noOffset ? '0' : '24px',
    marginBottom: props.noOffset ? '0' : '24px',
    height: '18px',
  }),
}));

const [DividerInner, themeInner] = createThemeTag(`${name}Inner`, ({ COLORS }) => ({
  root: {
    height: '1px',
    backgroundColor: COLORS.PRIMARY_BORDER_COLOR,
    width: '100%',
  },
}));

const [DividerTitle, themeTitle] = createThemeTag(`${name}Title`, ({ FONTS }) => ({
  root: {
    fontFamily: 'inherit',
    ...FONTS.OVERLINE_2,
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

