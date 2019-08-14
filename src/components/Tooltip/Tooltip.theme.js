import { createThemeTag } from '../../theme/createThemeTag';
import { Z_INDEX } from '../../theme';


const name = 'tooltip';

const [TooltipMessageTag, tooltipMessageTheme] = createThemeTag(`${name}Message`, ({ COLORS, SIZES }: *) => ({
  root: {
    padding: '4px 8px',
    backgroundColor: COLORS.BLACK,
    color: COLORS.WHITE,
    fontSize: SIZES.OVERLINE_2,
    borderRadius: SIZES.MAIN_BORDER_RADIUS,
    boxShadow: '2px 0 10px 0 rgba(0, 0, 0, 0.16)',
    zIndex: Z_INDEX.TOOLTIP,
  },
}));

const [TooltipTargetTag, themeTarget] = createThemeTag(`${name}Target`);

const theme = {
  ...tooltipMessageTheme,
  ...themeTarget,
};


export {
  theme,
  TooltipMessageTag,
  TooltipTargetTag,
};
