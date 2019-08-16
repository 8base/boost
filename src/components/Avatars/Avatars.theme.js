//@flow

import { createThemeTag } from '../../theme/createThemeTag';

const name = 'avatars';

const [AvatarsTag, themeAvatars] = createThemeTag(name, () => ({
  root: () => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& > *:not(:first-child)': {
      marginLeft: -10,
    },
  }),
}));

const [AvatarsCounterTag, themeCounterAvatars] = createThemeTag(`${name}Counter`, ({ COLORS }: *) => ({
  root: () => ({
    borderRadius: '100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: COLORS.DSM_DARK_BLUE,
    color: COLORS.WHITE,
    fontWeight: 600,
    fontSize: '100%',
    cursor: 'pointer',
    zIndex: 2,
  }),
  modifiers: {
    size: {
      xs: {
        width: '16px',
        height: '16px',
      },
      sm: {
        width: '32px',
        height: '32px',
      },
      md: {
        width: '48px',
        height: '48px',
      },
      lg: {
        width: '80px',
        height: '80px',
      },
      xl: {
        width: '100px',
        height: '100px',
      },
      stretch: {
        width: '100%',
        height: '100%',
      },
    },
  },
}));


const [AvatarsHandleTag, themeHandleAvatars] = createThemeTag(`${name}Handle`, ({ COLORS }: *) => ({
  root: () => ({
    borderRadius: '100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    border: `1px dashed ${COLORS.LIGHT_GRAY1}`,
    color: COLORS.PRIMARY_TEXT_COLOR,
    cursor: 'pointer',
    zIndex: 1,

    '&:hover': {
      border: `1px dashed ${COLORS.GRAY5}`,
    },
  }),
  modifiers: {
    size: {
      xs: {
        width: '16px',
        height: '16px',
      },
      sm: {
        width: '32px',
        height: '32px',
      },
      md: {
        width: '48px',
        height: '48px',
      },
      lg: {
        width: '80px',
        height: '80px',
      },
      xl: {
        width: '100px',
        height: '100px',
      },
      stretch: {
        width: '100%',
        height: '100%',
      },
    },
  },
}));

const theme = {
  ...themeAvatars,
  ...themeHandleAvatars,
  ...themeCounterAvatars,
};

export { theme, AvatarsTag, AvatarsHandleTag, AvatarsCounterTag };
