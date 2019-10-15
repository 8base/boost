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
import { BoostProvider, Button } from '@8base/boost';

const App = () => {
  return (
    <BoostProvider>
      ...
      <Button>Some Text</Button>
    </BoostProvider>
  )
}
```

### Usage with custom theme

```js
import { BoostProvider, createTheme } from '@8base/boost';


const customTheme = createTheme({
  /** Change the pallete of the color. */
  COLORS: {
    PRIMARY: '#3EB7F9',
    PRIMARY_TEXT_COLOR: 'darkorange',
    SECONDARY_TEXT_COLOR: 'orange',
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
        fontSize: SIZES.OVERLINE_1,
      },
      modifiers: {
        disabled: {
          backgroundColor: COLORS.RED_30,
        },
      },
    }),
  },
});


const App = () => {
  return (
    <BoostProvider theme={ customTheme }>
      ...
    </BoostProvider>
  )
}
```


## Icons

### Extends icons pack
To expand icons pack you should add [babel-plugin-inline-react-svg](https://www.npmjs.com/package/babel-plugin-inline-react-svg) or describe svg 
components manual.

```js
import { BoostProvider, createTheme } from '@8base/boost';

import SomeSvgIcon from './some-svg-icon.svg';
import AnotherSvgIcon from './another-svg-icon.svg';

const icons = {
  SomeSvgIcon,
  AnotherSvgIcon,
}

const App = () => {
  return (
    <BoostProvider icons={ icons }>
      ...
      <Icon name="AnotherSvgIcon" size="lg" color="DANGER" />
    </BoostProvider>
  )
}
```


### Using with fontawesome
At the first you need to add install aswesome font to the index.html [as described in the fontawesome docs](https://fontawesome.com/start).

```js
import { BoostProvider, createTheme } from '@8base/boost';

const App = () => {
  return (
    <BoostProvider>
      ...
      <Icon className="fas fa-igloo" color="DANGER" size="lg" />
    </BoostProvider>
  )
}
```
