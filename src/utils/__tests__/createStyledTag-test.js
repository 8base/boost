import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from '../../';
import { createStyledTag } from '../';

describe('As developer, I can create tag by provided theme and passed styles.', () => {
  const theme = {
    name: {
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
      defaults: {
        kind: 'primary',
      },
    },
  };

  it('with style object', () => {
    const StyledTag = createStyledTag('name', {
      height: '10px',
    });

    const tree = renderer.create(<ThemeProvider theme={ theme }><StyledTag tagName="div" size="md">Children</StyledTag></ThemeProvider>);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('with style function', () => {
    const StyledTag = createStyledTag('name', (props) => ({
      height: '10px',
      gridGap: props.gap,
    }));

    const tree = renderer.create(<ThemeProvider theme={ theme }><StyledTag tagName="div" gap="10px">Children</StyledTag></ThemeProvider>);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
