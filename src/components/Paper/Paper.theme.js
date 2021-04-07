import { createThemeTag } from '../../theme/createThemeTag';


const name = 'paper';

const [PaperTag, theme] = createThemeTag(name, ({ COLORS, SIZES }: *) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100%',

    background: COLORS.WHITE,
    color: COLORS.BLACK,
    boxShadow: '0px 2px 10px rgb(50 60 71 / 10%)',
    position: 'relative',
    overflow: 'hidden',
  },

  modifiers: {
    padding: {
      none: { padding: '0' },
      xs: { padding: '4px' },
      sm: { padding: '8px' },
      md: { padding: '16px' },
      lg: { padding: '24px' },
      xl: { padding: '32px' },
      xxl: { padding: '48px' },
    },
    borderRadius: {
      top: {
        borderTopLeftRadius: SIZES.MAIN_BORDER_RADIUS,
        borderTopRightRadius: SIZES.MAIN_BORDER_RADIUS,
      },
      bottom: {
        borderBottomLeftRadius: SIZES.MAIN_BORDER_RADIUS,
        borderBottomhtRadius: SIZES.MAIN_BORDER_RADIUS,
      },
      all: {
        borderRadius: SIZES.MAIN_BORDER_RADIUS,
      },
    },
    stretch: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
  },
}));


export {
  PaperTag,
  theme,
};

