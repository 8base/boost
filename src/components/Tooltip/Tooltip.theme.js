import { createStyledTag, createComponentTheme } from '../../utils';

const name = 'tooltip';

const tooltipMessageTheme = createComponentTheme(`${name}Message`, ({ COLORS, SIZES }: *) => ({
  root: {
    padding: '12px',
    backgroundColor: COLORS.BLACK,
    color: COLORS.WHITE,
    fontSize: SIZES.OVERLINE_2,
    borderRadius: SIZES.MAIN_BORDER_RADIUS,
    boxShadow: '2px 0 10px 0 rgba(0, 0, 0, 0.16)',
  },
}));

const theme = {
  ...tooltipMessageTheme,
};

const TooltipMessageTag = createStyledTag(`${name}Message`);

const TooltipTargetTag = createStyledTag(`${name}Target`);

export {
  theme,
  TooltipMessageTag,
  TooltipTargetTag,
};
