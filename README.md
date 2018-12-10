[![Build Status](https://travis-ci.org/8base/boost.svg?branch=master)](https://travis-ci.org/8base/boost)

# 8base UI Kit
Storybook - https://8base.github.io/boost/

## Start local
```
yarn storybook
```

## Usage

### Basic usage

```js
import { EightBaseBoostProvider, Button } from '@8base/boost';

const App = () => {
  return (
    <EightBaseBoostProvider>
      ...
      <Button>Some Text</Button>
    </EightBaseBoostProvider>
  )
}
```

### Usage with custom theme

```js
import { EightBaseBoostProvider, createTheme } from '@8base/boost';


const customTheme = createTheme({
  /** Change the pallete of the color. */
  COLORS: {
    PRIMARY: '#3EB7F9',
  },
  /** Change the custom components styles if it needed. */
  components: {
    input: {
      root: {
        borderColor: 'gray',
      },
      modifiers: {
        hasError: {
          borderColor: 'red',
        }
      }
    },
    button: (colors, sizes) => ({
      root: {
        fontSize: sizes.SMALL_FONT_SIZE,
      },
      modifiers: {
        disabled: {
          backgroundColor: colors.RED,
        },
      },
    }),
  },
});


const App = () => {
  return (
    <EightBaseBoostProvider theme={ customTheme }>
      ...
    </EightBaseBoostProvider>
  )
}
```
