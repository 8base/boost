//@flow

import { createThemeTag } from '../../theme/createThemeTag';

const name = 'avatar';

const COLORS = ['#ffd012', '#a6e50f', '#00bb6e', '#9975d0', '#4da1ff', '#1968cb', '#ff6d4a', '#EB518E', '#eb4235'];

const getBackgroundColorByName = (firstName: ?string) => {
  const index = firstName ? Math.abs(((firstName.charCodeAt(0) - 64) % COLORS.length)) : 0;

  return COLORS[index];
};

const [AvatarTag, themeAvatar] = createThemeTag(name, ({ COLORS }: *) => ({
  root: (props) => ({
    borderRadius: '100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: getBackgroundColorByName(props.firstName),
    color: COLORS.WHITE,
    fontWeight: 600,

    [`&:hover ${AvatarHandleTag}`]: {
      bottom: 0,
    },
  }),
  modifiers: {
    size: {
      xs: {
        width: '16px',
        height: '16px',
        fontSize: '1rem',
      },
      sm: {
        width: '32px',
        height: '32px',
        fontSize: '16px',
      },
      md: {
        width: '48px',
        height: '48px',
        fontSize: '20px',
      },
      lg: {
        width: '80px',
        height: '80px',
        fontSize: '24px',
      },
      xl: {
        width: '100px',
        height: '100px',
        fontSize: '32px',
      },
      stretch: {
        width: '100%',
        height: '100%',
      },
    },
  },
}));

const [AvatarHandleTag, themeHandle] = createThemeTag(`${name}Handle`, ({ COLORS }: *) => ({
  root: {
    position: 'absolute',
    bottom: '-30%',
    left: '0',
    right: '0',
    height: '30%',
    cursor: 'pointer',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    background: 'rgba(0, 0, 0, .75)',
    fontSize: '8px',
    transition: 'all .15s ease-in-out',
    userSelect: 'none',
    color: COLORS.SECONDARY_TEXT_COLOR,
  },
}));

const [AvatarImgTag, themeAvatarImg] = createThemeTag(`${name}Img`, {
  root: {
    width: '100%',
  },
});

const theme = {
  ...themeHandle,
  ...themeAvatar,
  ...themeAvatarImg,
};

export { theme, AvatarImgTag, AvatarTag, AvatarHandleTag };

