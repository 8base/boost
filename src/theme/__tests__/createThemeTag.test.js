import React from 'react';

import { ThemeProvider } from '../../';
import { createThemeTag } from '../';
import { parseThemes } from '../createTheme';

describe('createThemeTag', () => {
  const themeMock = {
    root: {
      height: '10px',
    },
    modifiers: {
      kind: {
        primary: {
          color: '#000',
        },
        secondary: {
          color: '#fff',
        },
      },
      size: {
        xs: {
          width: '100px',
        },
        md: {
          width: '200px',
        },
      },
    },
  };

  it('should create tag with root object and modifeirs', () => {
    const [StyledTag, theme] = createThemeTag('name', themeMock);

    const wrapper = render(
      <ThemeProvider theme={{ components: theme }}>
        <StyledTag tagName="div" size="md" kind="secondary" />
      </ThemeProvider>,
    );

    expect(wrapper).toMatchInlineSnapshot(`
.emotion-0 {
  height: 10px;
  color: #fff;
  width: 200px;
}

<div
  class="emotion-0 emotion-1"
/>
`);
  });

  it('should create tag with root function', () => {
    const [StyledTag, theme] = createThemeTag('name', () => ({
      root: props => ({
        height: '10px',
        gridGap: props.gap,
      }),
    }));

    const wrapper = render(
      <ThemeProvider theme={{ components: theme }}>
        <StyledTag tagName="div" gap="10px" />
      </ThemeProvider>,
    );

    expect(wrapper).toMatchInlineSnapshot(`
<div
  class="emotion-0 emotion-1"
/>
`);
  });

  it('should create tag with custom colors and zisez', () => {
    const [StyledTag, theme] = createThemeTag('name', ({ COLORS, SIZES }) => ({
      root: {
        color: 'black',
        backgroundColor: COLORS.PRIMARY,
        height: SIZES.MAIN,
      },
    }));

    const wrapper = render(
      <ThemeProvider
        theme={ parseThemes({
          COLORS: { PRIMARY: 'blue' },
          SIZES: { MAIN: '14px' },
          components: theme,
        }) }
      >
        <StyledTag tagName="div" />
      </ThemeProvider>,
    );

    expect(wrapper).toMatchInlineSnapshot(`
.emotion-0 {
  color: black;
  background-color: blue;
  height: 14px;
}

<div
  class="emotion-0 emotion-1"
/>
`);
  });
});
