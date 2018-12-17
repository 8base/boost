//@flow

import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';

type ParagraphProps = {|
  children?: React$Node,
  kind?: 'primary' | 'secondary' | 'disabled' | 'white',
  text?: string,
|};

const name = 'paragraph';

const theme = createComponentTheme(name, ({ COLORS, SIZES }: *) => ({
  root: {
    fontWeight: 400,
    fontSize: SIZES.BODY_TEXT,
    lineHeight: 2,
    margin: 0,
  },
  modifiers: {
    kind: {
      primary: {
        color: COLORS.DARK_PRIMARY_TEXT_COLOR,
      },
      secondary: {
        color: COLORS.DARK_SECONDARY_TEXT_COLOR,
      },
      disabled: {
        color: COLORS.DARK_DISABLED_TEXT_COLOR,
      },
      white: {
        color: COLORS.WHITE,
      },
    },
  },
  defaults: {
    kind: 'primary',
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
