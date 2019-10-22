// @flow

import React from 'react';

import { ThemeProvider } from '../../';
import { createThemeTag } from '../createThemeTag';
import { parseThemes } from '../createTheme';

describe('createThemeTag', () => {
  const [Text, themeText] = createThemeTag('text', ({ COLORS, SIZES }) => ({
    root: {
      fontFamily: 'serif',
      backgroundColor: 'white',
    },
    modifiers: {
      kind: {
        primary: {
          color: COLORS.PRIMARY,
        },
        secondary: {
          color: 'gray',
        },
      },
      large: {
        height: SIZES.LARGE,
      },
    },
  }));

  const [Subtitle, themeSubtitle] = createThemeTag('subtitle', {
    root: props => ({
      color: 'black',
      height: props.height,
    }),
  });

  const originalTheme = {
    COLORS: {
      PRIMARY: 'blue',
      SECONDARY: 'green',
    },
    SIZES: {
      SMALL: '10px',
      MEDIUM: '14px',
      LARGE: '20px',
    },
    Z_INDEX: {},
    FONTS: {},
    components: {
      ...themeText,
      ...themeSubtitle,
    },
  };

  it('should create custom theme with extended colors and root', () => {
    const theme = parseThemes(originalTheme, {
      SIZES: {
        LARGE: '60px',
      },
      components: {
        text: {
          root: {
            fontFamily: 'calibry',
            textDecoration: 'underline',
          },
        },
      },
    });

    const wrapper = render(
      <ThemeProvider theme={ theme }>
        <Text large kind="primary" />
      </ThemeProvider>,
    );

    expect(wrapper).toMatchInlineSnapshot(`
.emotion-0 {
  font-family: calibry;
  background-color: white;
  -webkit-text-decoration: underline;
  text-decoration: underline;
  color: blue;
  height: 60px;
}

<div
  class="emotion-0 emotion-1"
/>
`);
  });

  it('should create custom theme with extended modifiers', () => {
    const theme = parseThemes(originalTheme, {
      components: {
        text: ({ SIZES }) => ({
          root: {
            fontFamily: 'calibry',
          },
          modifiers: {
            large: {
              height: SIZES.MEDIUM,
            },
          },
        }),
      },
    });

    const wrapper = render(
      <ThemeProvider theme={ theme }>
        <Text large />
      </ThemeProvider>,
    );

    expect(wrapper).toMatchInlineSnapshot(`
.emotion-0 {
  font-family: calibry;
  background-color: white;
  height: 14px;
}

<div
  class="emotion-0 emotion-1"
/>
`);
  });

  it('should create custom theme with extended modifiers', () => {
    const theme = parseThemes(originalTheme, {
      components: {
        subtitle: ({ SIZES }) => ({
          root: (props, styles) => ({
            ...styles,
            heihgt: SIZES.SMALL,
          }),
        }),
      },
    });

    const wrapper = render(
      <ThemeProvider theme={ theme }>
        <Subtitle />
      </ThemeProvider>,
    );

    expect(wrapper).toMatchInlineSnapshot(`
.emotion-0 {
  color: black;
  heihgt: 10px;
}

<div
  class="emotion-0 emotion-1"
/>
`);
  });
});
