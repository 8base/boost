//@flow

import React from 'react';

import { createStyledTag, createComponentTheme } from '../../../utils';

type ParagraphProps = {|
  children?: React$Node,
  kind?: 'primary' | 'secondary' | 'disabled' | 'white',
  size?: 'md' | 'lg',
  text?: string,
|};

const name = 'paragraph';

const theme = createComponentTheme(name, (colors: *, sizes: *) => ({
  root: {
    fontWeight: 400,
    fontSize: sizes.MAIN_FONT_SIZE,
    lineHeight: 2,
    margin: 0,
  },
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

const StyledTag = createStyledTag(name);

function Paragraph({
  text,
  children,
  ...rest
  }: ParagraphProps) {
  return <StyledTag { ...rest } tagName="p">{ children || text }</StyledTag>;
}

export { Paragraph, theme };
