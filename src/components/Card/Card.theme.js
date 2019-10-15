// @flow
import { createThemeTag } from '../../theme/createThemeTag';


const offsetSizes = {
  none: '0',
  xs: '4px',
  sm: '12px',
  md: '24px',
  lg: '32px',
  xl: '40px',
};

const offsetModifier = {
  padding: {
    none: { padding: offsetSizes.none },
    xs: { padding: offsetSizes.xs },
    sm: { padding: offsetSizes.sm },
    md: { padding: offsetSizes.md },
    lg: { padding: offsetSizes.lg },
    xl: { padding: offsetSizes.xl },
  },
};


const [CardBodyTag, cardBodyTheme] = createThemeTag('cardBody', {
  root: props => ({
    overflow: props.scrollable && 'auto',
  }),
  modifiers: {
    stretch: {
      display: 'flex',
      flex: 1,
      width: '100%',
    },
    padding: {
      none: { padding: '0' },
      xs: { padding: '4px' },
      sm: { padding: '12px' },
      md: { padding: '24px' },
      lg: { padding: '32px' },
      xl: { padding: '40px' },
    },
  },
});


const [CardFooterTag, cardFooterTheme] = createThemeTag('cardFooter', ({ COLORS }: *): * => ({
  root: {
    flexShrink: 0,
    borderTop: `1px solid ${COLORS.GRAY_20}`,
  },
  modifiers: {
    ...offsetModifier,
  },
}));


const [CardSectionTag, cardSectionTheme] = createThemeTag('cardSection', ({ COLORS }: *) => ({
  root: {
    '&:not(:last-child)': {
      borderBottom: `1px solid ${COLORS.GRAY_20}`,
    },
  },
  modifiers: {
    hoverable: {
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '0 2px 10px 0 rgba(208, 215, 221, 0.6)',
      },
    },
    stretch: {
      display: 'flex',
      flex: 1,
      width: '100%',
    },
    ...offsetModifier,
  },
}));


const [CardHeaderTag, cardHeaderTheme] = createThemeTag('cardHeader', ({ COLORS }: *): * => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    flexShrink: 0,
    height: '64px',

    borderBottom: `1px solid ${COLORS.GRAY_20}`,
  },
  modifiers: {
    padding: {
      none: { padding: '0' },
      xs: { padding: '0 4px' },
      sm: { padding: '0 12px' },
      md: { padding: '0 24px' },
      lg: { padding: '0 32px' },
      xl: { padding: '0 40px' },
    },
  },
}));


const theme = {
  ...cardBodyTheme,
  ...cardSectionTheme,
  ...cardFooterTheme,
  ...cardHeaderTheme,
};

export {
  theme,
  CardBodyTag,
  CardSectionTag,
  CardFooterTag,
  CardHeaderTag,
};
