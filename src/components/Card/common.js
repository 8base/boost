// @flow

const offsetSizes = {
  none: '0',
  xs: '4px',
  sm: '12px',
  md: '20px',
  lg: '24px',
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

export { offsetModifier };
