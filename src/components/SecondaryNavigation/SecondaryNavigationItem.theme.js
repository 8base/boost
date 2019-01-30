// @flow
import { createThemeTag } from '../../theme/createThemeTag';


const name = 'secondaryNavigationItem';


const [SecondaryNavigationItemTag, rootTheme] = createThemeTag(name, ({ COLORS }: *) => ({
  root: {
    height: '32px',
    display: 'flex',
    backgroundColor: 'inherit',
    textDecoration: 'none',
    userSelect: 'none',
    position: 'relative',

    '&:hover': {
      backgroundColor: COLORS.WHITE,
    },

    '&.active': {
      backgroundColor: COLORS.WHITE,
    },
  },
}));


const [SecondaryNavigationItemBarTag, barTheme] = createThemeTag(`${name}Bar`, ({ COLORS }: *) => ({
  root: {
    width: '4px',
    backgroundColor: 'inherit',

    '.active > &': {
      backgroundColor: COLORS.DSM.NAVIGATION_COLORS.DSM_DB_SELECTED,
    },
  },
}));

const [SecondaryNavigationItemLabelTag, labelTheme] = createThemeTag(`${name}Label`, () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20px',
    backgroundColor: 'inherit',
    opacity: '0.9',
  },
}));

const theme = {
  ...rootTheme,
  ...barTheme,
  ...labelTheme,
};


export {
  theme,
  SecondaryNavigationItemTag,
  SecondaryNavigationItemBarTag,
  SecondaryNavigationItemLabelTag,
};

