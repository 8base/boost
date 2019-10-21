import { createThemeTag } from '../../theme/createThemeTag';
import { Z_INDEX } from '../../theme';


const name = 'tooltip';

const [TooltipMessageTag, tooltipMessageTheme] = createThemeTag(`${name}Message`, ({ COLORS, SIZES }: *) => ({
  root: {
    padding: '12px 16px',
    backgroundColor: '#3D4751',
    color: COLORS.WHITE,
    borderRadius: SIZES.MAIN_BORDER_RADIUS,
    boxShadow: '2px 0 10px 0 rgba(0, 0, 0, 0.16)',
    zIndex: Z_INDEX.TOOLTIP,
  },

  modifiers: {
    placement: {
      bottom: {
        marginTop: '8px',
      },
      top: {
        marginBottom: '8px',
      },
      right: {
        marginLeft: '8px',
      },
      left: {
        marginRight: '8px',
      },
    },
  },
}));

const [TooltipArrowTag, tooltipArrowTheme] = createThemeTag(`${name}Arrow`, () => ({
  root: {
    position: 'absolute',
    height: '0',
    width: '0',
    borderStyle: 'solid',
  },

  modifiers: {
    placement: {
      bottom: {
        top: '-8px',
        borderWidth: '0 4px 8px 4px',
        borderColor: 'transparent transparent #3D4751 transparent',
      },
      top: {
        bottom: '-8px',
        borderWidth: '8px 4px 0 4px',
        borderColor: '#3D4751 transparent transparent transparent',
      },
      right: {
        left: '-8px',
        borderWidth: '4px 8px 4px 0',
        borderColor: 'transparent #3D4751  transparent transparent',
      },
      left: {
        right: '-8px',
        borderWidth: '4px 0 4px 8px',
        borderColor: 'transparent transparent transparent #3D4751',
      },
    },
  },
}));


const [TooltipTargetTag, themeTarget] = createThemeTag(`${name}Target`, {
  root: {
    display: 'inline-block',
  },
});

const theme = {
  ...tooltipMessageTheme,
  ...tooltipArrowTheme,
  ...themeTarget,
};


export {
  theme,
  TooltipMessageTag,
  TooltipTargetTag,
  TooltipArrowTag,
};
