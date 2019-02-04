import { createThemeTag } from '../../theme/createThemeTag';


const name = 'modal';

const [OverlayTag, themeOverlay] = createThemeTag(`${name}Overlay`, ({ Z_INDEX }: *) => ({
  root: {
    alignItems: 'center',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,

    background: 'rgba(60, 87, 118, 0.6)',
    zIndex: Z_INDEX.MODAL,
  },
}));

const [ModalTag, themeModal] = createThemeTag(name, {
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const theme = {
  ...themeOverlay,
  ...themeModal,
};

export {
  ModalTag,
  OverlayTag,
  theme,
};

