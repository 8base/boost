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
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
};

const HEIGHT_SEPARATOR_BY_SIZE = {
  xs: 8,
  sm: 12,
  md: 18,
  lg: 20,
};

const BORDER_RADIUS_BY_SIZE = {
  xs: 4,
  sm: 4,
  md: 8,
  lg: 12,
};

const [ProgressInnerTag, themeInner] = createThemeTag(`${name}Inner`, ({ COLORS }: *) => ({
  root: ({ size, backgroundColor }) => ({
    position: 'relative',
    zIndex: 1,
    flex: '1',
    height: HEIGHT_BY_SIZE[size],
    background: COLORS[backgroundColor],
    borderRadius: BORDER_RADIUS_BY_SIZE[size],
  }),
}));

const [ProgressValueTag, themeValue] = createThemeTag(`${name}Value`, ({ COLORS }: *) => ({
  root: ({ size, color, showSeparator }) => ({
    height: '100%',
    backgroundColor: COLORS[color],
    borderRadius: BORDER_RADIUS_BY_SIZE[size],
    borderTopRightRadius: showSeparator ? 0 : BORDER_RADIUS_BY_SIZE[size],
    borderBottomRightRadius: showSeparator ? 0 : BORDER_RADIUS_BY_SIZE[size],
  }),
}));

const [ProgressSeparatorTag, themeSeparator] = createThemeTag(`${name}Separator`, ({ COLORS }: *) => ({
  root: ({ size }) => ({
    position: 'absolute',
    width: '2px',
    borderRadius: '1px',
    backgroundColor: COLORS.GRAY_30,
    height: HEIGHT_SEPARATOR_BY_SIZE[size],
    top: '50%',
    transform: 'translate(-50%, -50%)',
  }),
}));

const [ProgressTextTag, themeText] = createThemeTag(`${name}Text`, ({ FONTS }: *) => ({
  root: {
    marginLeft: '20px',
    minWidth: '40px',
    ...FONTS.BODY_3,
  },
}));

const [ProgressLabelTag, themeLabel] = createThemeTag(`${name}Label`, ({ FONTS }: *) => ({
  root: {
    ...FONTS.BODY_3,
  },
}));

const [ProgressDescriptionTag, themeDescription] = createThemeTag(`${name}Description`, ({ FONTS }: *) => ({
  root: {
    ...FONTS.BODY_3,
  },
}));

const theme = {
  ...themeProgress,
  ...themeBody,
  ...themeInner,
  ...themeValue,
  ...themeSeparator,
  ...themeText,
  ...themeLabel,
  ...themeDescription,
};

export {
  theme,
  ProgressTag,
  ProgressBodyTag,
  ProgressInnerTag,
  ProgressValueTag,
  ProgressSeparatorTag,
  ProgressTextTag,
  ProgressLabelTag,
  ProgressDescriptionTag,
};
