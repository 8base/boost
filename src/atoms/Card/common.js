// @flow

const offsetSizes = {
  none: '0',
  xs: '.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '2.5rem',
};

const offsetModifier = {
  offset: {
    none: { padding: offsetSizes.none },
    xs: { padding: offsetSizes.xs },
    sm: { padding: offsetSizes.sm },
    md: { padding: offsetSizes.md },
    lg: { padding: offsetSizes.lg },
    xl: { padding: offsetSizes.xl },
  },
};

export { offsetModifier };
