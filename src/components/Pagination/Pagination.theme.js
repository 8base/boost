//@flow

import { createThemeTag } from '../../theme/createThemeTag';

const name = 'pagination';

const [PaginationTag, themePagination] = createThemeTag(name, () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  modifiers: {
  },
}));

const [PaginationItemTag, themePaginationItem] = createThemeTag(`${name}Item`, ({ COLORS }: *) => ({
  root: {
    height: 36,
    marginRight: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    flexShrink: 0,
    color: COLORS.GRAY5,
    cursor: 'pointer',
    userSelect: 'none',

    '&:hover': {
      color: COLORS.PRIMARY_TEXT_COLOR,
    },

    '&:last-child': {
      marginRight: 0,
    },
  },
  modifiers: {
    active: {
      fontSize: 14,
      color: COLORS.WHITE,
      pointerEvents: 'none',

      '&:before': {
        content: '\'\'',
        backgroundColor: COLORS.LIGHT_BLUE,
        borderRadius: 18,
        position: 'absolute',
        left: '- calc((28px - 100%) / 2)',
        top: 4,
        width: 28,
        height: 28,
        zIndex: -1,
      },
    },
    disabled: {
      pointerEvents: 'none',
    },
  },
}));

const [PaginationItemsTag, themePaginationItems] = createThemeTag(`${name}Items`, () => ({
  root: {
    display: 'flex',
    padding: '0 24px',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  modifiers: {
  },
}));

const theme = {
  ...themePagination,
  ...themePaginationItem,
  ...themePaginationItems,
};

export { theme, PaginationTag, PaginationItemsTag, PaginationItemTag };

