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
    button: ({ COLORS, SIZES }) => ({
      root: {
        fontSize: SIZES.SMALL_FONT_SIZE,
      },
      modifiers: {
        disabled: {
          backgroundColor: COLORS.RED,
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


## Icons

### Extends icons pack
To expand icons pack you should add [babel-plugin-inline-react-svg](https://www.npmjs.com/package/babel-plugin-inline-react-svg) or describe svg 
components manual.

```js
import { EightBaseBoostProvider, createTheme } from '@8base/boost';

import SomeSvgIcon from './some-svg-icon.svg';
import AnotherSvgIcon from './another-svg-icon.svg';

const icons = {
  SomeSvgIcon,
  AnotherSvgIcon,
}

const App = () => {
  return (
    <EightBaseBoostProvider icons={ icons }>
      ...
      <Icon name="AnotherSvgIcon" size="lg" color="RED" />
    </EightBaseBoostProvider>
  )
}
```


### Using with fontawesome
At the first you need to add install aswesome font to the index.html [as described in the fontawesome docs](https://fontawesome.com/start).

```js
import { EightBaseBoostProvider, createTheme } from '@8base/boost';

const App = () => {
  return (
    <EightBaseBoostProvider>
      ...
      <Icon className="fas fa-igloo" color="RED" size="lg" />
    </EightBaseBoostProvider>
  )
}
```
