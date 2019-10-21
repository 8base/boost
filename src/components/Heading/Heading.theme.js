// @flow
import { createThemeTag } from '../../theme/createThemeTag';


const name = 'heading';

const [HeadingTag, theme] = createThemeTag(name, ({ FONTS }: *) => ({
  root: {
    margin: 0,
  },
  modifiers: {
    type: {
      h1: {
        ...FONTS.H1,
      },
      h2: {
        ...FONTS.H2,
      },
      h3: {
        ...FONTS.H3,
      },
      h4: {
        ...FONTS.H4,
      },
      h5: {
        ...FONTS.H5,
      },
    },
    ellipsis: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  },
}));

export {
  HeadingTag,
  theme,
};

