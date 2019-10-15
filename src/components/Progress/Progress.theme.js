// @flow

import { createThemeTag } from '../../theme/createThemeTag';


const name = 'progress';


const [ProgressTag, themeProgress] = createThemeTag(name, {
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});

const [ProgressBodyTag, themeBody] = createThemeTag(`${name}Body`, {
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});

const HEIGHT_BY_SIZE = {
  sm: 8,
  md: 12,
  lg: 16,
};

const [ProgressInnerTag, themeInner] = createThemeTag(`${name}Inner`, ({ COLORS }: *) => ({
  root: ({ size }) => ({
    flex: '1',
    height: HEIGHT_BY_SIZE[size],
    background: COLORS.GRAY_20,
    borderRadius: '8px',
  }),
}));

const [ProgressValueTag, themeValue] = createThemeTag(`${name}Value`, ({ COLORS }: *) => ({
  root: ({ size, color }) => ({
    height: '100%',
    backgroundColor: COLORS[color],
    borderRadius: HEIGHT_BY_SIZE[size],
  }),
}));

const [ProgressTextTag, themeText] = createThemeTag(`${name}Text`, ({ COLORS, SIZES }: *) => ({
  root: {
    marginLeft: '20px',
    minWidth: '40px',
    fontSize: SIZES.BODY_TEXT,
    lineHeight: SIZES.BODY_TEXT_LH,
    color: COLORS.GRAY_40,
  },
}));

const [ProgressLabelTag, themeLabel] = createThemeTag(`${name}Label`, ({ COLORS, SIZES }: *) => ({
  root: {
    fontSize: SIZES.BODY_TEXT,
    lineHeight: SIZES.BODY_TEXT_LH,
    color: COLORS.GRAY_40,
  },
}));

const theme = {
  ...themeProgress,
  ...themeBody,
  ...themeInner,
  ...themeValue,
  ...themeText,
  ...themeLabel,
};

export {
  theme,
  ProgressTag,
  ProgressBodyTag,
  ProgressInnerTag,
  ProgressValueTag,
  ProgressTextTag,
  ProgressLabelTag,
};
