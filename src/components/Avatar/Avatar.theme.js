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
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: getBackgroundColorByName(props.firstName),
    color: COLORS.WHITE,
    fontWeight: 600,
  }),
  modifiers: {
    pickVariant: {
      bottom: {
        [`&:hover ${AvatarHandleTag}`]: {
          bottom: '0',
        },
      },
      fullWidth: {
        [`&:hover > ${AvatarHandleFullWidthTag}`]: {
          background: 'rgba(50, 60, 71, 0.7);',

          [`${AvatarHandleIconContainerTag}`]: {
            opacity: 1,
          },
        },
      },
    },
    variant: {
      circle: {
        borderRadius: '100%',
      },
      square: {
        borderRadius: '0%',
      },
      rounded: {
        borderRadius: '17%',
      },
    },
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
      xxl: {
        width: '120px',
        height: '120px',
        fontSize: '48px',
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

const [AvatarHandleFullWidthTag, themeHandleFullWidth] = createThemeTag(`${name}HandleFullWidth`, ({ COLORS }: *) => ({
  root: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    height: '100%',
    cursor: 'pointer',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    background: 'rgba(50, 60, 71, 0)',
    fontSize: '8px',
    transition: 'all .15s ease-in-out',
    userSelect: 'none',
    color: COLORS.WHITE,
  },
  modifiers: {
    variant: {
      circle: {
        borderRadius: '100%',
      },
      square: {
        borderRadius: '0%',
      },
      rounded: {
        borderRadius: '17%',
      },
    },
  },
}));

const [AvatarHandleIconContainerTag, themeHandleIconContainer] = createThemeTag(`${name}HandleIconContainer`, ({ COLORS }: *) => ({
  root: {
    color: COLORS.WHITE,
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',

    '> div:nth-child(2)': {
      paddingTop: '2px',
      position: 'relative',
      top: '1px',
    },
    opacity: 0,
  },
  modifiers: {
    size: {
      xs: {
        '> div:nth-child(2)': {
          display: 'none',
        },
      },
      sm: {
        '> div:nth-child(2)': {
          display: 'none',
        },
      },
      md: {
        fontSize: '6px',
      },
      lg: {
        fontSize: '12px',
      },
      xl: {
        fontSize: '14px',
      },
      xxl: {
        fontSize: '14px',
      },
      stretch: {
        fontSize: '2rem',
      },
    },
  },
}));

const [AvatarImgTag, themeAvatarImg] = createThemeTag(`${name}Img`, {
  root: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const theme = {
  ...themeHandle,
  ...themeAvatar,
  ...themeAvatarImg,
  ...themeHandleFullWidth,
  ...themeHandleIconContainer,
};

export { theme, AvatarImgTag, AvatarTag, AvatarHandleTag, AvatarHandleFullWidthTag, themeHandleFullWidth, AvatarHandleIconContainerTag };
