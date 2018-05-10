import React from 'react';

import { createStyledTag, createTheme } from '../../utils';

type HeadingProps = {|
  children?: React$Node,
  kind?: 'primary' | 'secondary' | 'disabled',
  text?: string,
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  weight?: 'light' | 'normal' | 'semibold' | 'bold',
|};

const name = 'heading';

const theme = createTheme(name, (colors) => ({
  modifiers: {
    type: {
      h1: {
        fontSize: '48px',
      },
      h2: {
        fontSize: '32px',
      },
      h3: {
        fontSize: '24px',
      },
      h4: {
        fontSize: '20px',
      },
      h5: {
        fontSize: '14px',
      },
      h6: {
        fontSize: '12px',
      },
    },
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
    },
    weight: {
      light: {
        fontWeight: 300,
      },
      normal: {
        fontWeight: 400,
      },
      semibold: {
        fontWeight: 600,
      },
      bold: {
        fontWeight: 700,
      },
    },
  },
  defaults: {
    kind: 'primary',
    weight: 'normal',
  },
}));

const StyledTag = createStyledTag(name, {
  fontFamily: 'Poppins',
  lineHeight: 'normal',
  margin: 0,
});

function Heading({
  text,
  children,
  type,
  ...rest
  }: HeadingProps) {
  return <StyledTag tagName={ type } type={ type } { ...rest }>{ children || text }</StyledTag>;
}

export { Heading, theme };
