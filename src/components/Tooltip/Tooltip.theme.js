import { createThemeTag } from '../../theme/createThemeTag';


const name = 'tooltip';

const [TooltipMessageTag, tooltipMessageTheme] = createThemeTag(`${name}Message`, ({ COLORS, SIZES }: *) => ({
  root: {
    padding: '12px',
    backgroundColor: COLORS.BLACK,
    color: COLORS.WHITE,
    fontSize: SIZES.OVERLINE_2,
    borderRadius: SIZES.MAIN_BORDER_RADIUS,
    boxShadow: '2px 0 10px 0 rgba(0, 0, 0, 0.16)',
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
