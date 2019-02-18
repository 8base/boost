// @flow
import { createThemeTag } from '../../theme/createThemeTag';

const name = 'secondaryNavigationItem';

const [SecondaryNavigationItemTag, rootTheme] = createThemeTag(name, ({ COLORS }: *) => ({
  root: {
    height: 28,
    display: 'flex',
    backgroundColor: 'inherit',
    textDecoration: 'none',
    userSelect: 'none',
    position: 'relative',
    paddingLeft: 4,
    paddingRight: 20,
    justifyContent: 'space-between',

    [`&.active ${SecondaryNavigationItemActionsTag}`]: {
      visibility: 'visible',
    },

    '&.active': {
      backgroundColor: COLORS.WHITE,
      paddingLeft: 0,
      borderLeft: `4px solid ${COLORS.DSM.NAVIGATION_COLORS.DSM_DB_SELECTED}`,
    },
  },
  modifiers: {
    hovered: {
      backgroundColor: COLORS.WHITE,

      [`& ${SecondaryNavigationItemActionsTag}`]: {
        visibility: 'visible',
      },
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

const [SecondaryNavigationItemActionsTag, actionsTheme] = createThemeTag(`${name}Actions`, () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    visibility: 'hidden',
  },
}));

const theme = {
  ...rootTheme,
  ...labelTheme,
  ...actionsTheme,
};


export {
  theme,
  SecondaryNavigationItemTag,
  SecondaryNavigationItemLabelTag,
  SecondaryNavigationItemActionsTag,
};

