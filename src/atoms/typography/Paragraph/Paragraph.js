import React from 'react';

import { createStyledTag, createTheme } from '../../../utils';

type ParagraphProps = {|
  children?: React$Node,
  kind?: 'primary' | 'secondary' | 'disabled' | 'white',
  size: 'md' | 'lg',
  text?: string,
|};

const name = 'paragraph';

const theme = createTheme(name, (colors) => ({
  modifiers: {
    kind: {
      primary: {
        color: colors.DARK_PRIMARY_TEXT_COLOR,
      },
      secondary: {
        color: colors.DARK_SECONDARY_TEXT_COLOR,
      },
      disabled: {
        color: colors.DARK_DISABLED_TEXT_COLOR,
      },
      white: {
        color: colors.WHITE,
      },
    },
    size: {
      lg: {
        fontSize: '1.8rem',
      },
      md: {
        fontSize: '1.4rem',
      },
    },
  },
  defaults: {
    kind: 'primary',
    size: 'md',
  },
}));

const StyledTag = createStyledTag(name, {
  fontFamily: 'Poppins',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '28px',
  margin: 0,
});

function Paragraph({
  text,
  children,
  ...rest
  }: ParagraphProps) {
  return <StyledTag { ...rest } tagName="p">{ children || text }</StyledTag>;
}

export { Paragraph, theme };
