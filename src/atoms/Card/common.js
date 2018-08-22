// @flow

const offsetSizes = {
  none: '0',
  xs: '.5rem',
  sm: '1rem',
  md: '2rem',
  lg: '3rem',
  xl: '4rem',
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

export { offsetModifier };
