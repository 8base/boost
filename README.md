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
import { EightBaseBoostProvider, defaultTheme } from '@8base/boost';
import merge from 'deepmerge';

/** You can use deepmerge package to override properties of the default theme. */
const customTheme = merge(defaultTheme, {
  /** Change the pallete of the color. */
  COLORS: {
    PRIMARY_BUTTON_BACKGROUND_COLOR: '#FFFFFF'
  },
  /** Change the custom components styles if it needed. */
  button: {
    modifiers: {
      disabled: {
        backgroundColor: '#000000',
      }
    }
  }
})

const App = () => {
  return (
    <EightBaseBoostProvider theme={ customTheme }>
      ...
    </EightBaseBoostProvider>
  )
}
```
