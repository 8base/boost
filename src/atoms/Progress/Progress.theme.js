import { createStyledTag, createTheme } from '../../utils';

const name = 'progress';

export const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

export const ProgressOuterTag = createStyledTag(name, {
  width: '100%',
  display: 'flex',
});

export const ProgressInnerTag = createStyledTag(`${name}Inner`, ({ theme }) => ({
  heigth: '1.2rem',
  flex: '1',
  background: theme.COLORS.LIGHT_GRAY4,
  borderRadius: '1.2rem',
}));

export const ProgressValueTag = createStyledTag(`${name}Value`, ({ theme }) => ({
  backgroundColor: theme.COLORS.PRIMARY,
  borderRadius: '1.2rem',
  height: '100%',
}));

export const ProgressTextTag = createStyledTag(`${name}Text`, ({ theme }) => ({
  fontSize: '13px',
  fontWeight: '600',
  marginLeft: '1.2rem',
  whiteSpace: 'nowrap',
  color: theme.COLORS.PRIMARY,
  width: '3.6rem',
}));
