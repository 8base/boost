// @flow
import { createStyledTag, createComponentTheme } from '../../utils';

const name = 'secondaryNavigationItem';

const rootTheme = createComponentTheme(name, ({ COLORS }: *) => ({
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


const barTheme = createComponentTheme(`${name}Bar`, ({ COLORS }: *) => ({
  root: {
    width: '4px',
    backgroundColor: 'inherit',

    '.active > &': {
      backgroundColor: COLORS.DSM.NAVIGATION_COLORS.DSM_DB_SELECTED,
    },
  },
}));

const labelTheme = createComponentTheme(`${name}Label`, () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20px',
    backgroundColor: 'inherit',
    opacity: '0.9',
  },
}));

export const theme = {
  ...rootTheme,
  ...barTheme,
  ...labelTheme,
};

export const SecondaryNavigationItemTag = createStyledTag(name);

export const SecondaryNavigationItemBarTag = createStyledTag(`${name}Bar`);

export const SecondaryNavigationItemLabelTag = createStyledTag(`${name}Label`);
