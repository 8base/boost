[![Build Status](https://travis-ci.org/8base/boost.svg?branch=master)](https://travis-ci.org/8base/boost)

# 8base UI Kit
Storybook - https://8base.github.io/boost/

## Start local
```
yarn storybook
```

## Update snapshots
```
docker  pull vorobeez/puppeteer-e2e-chrome:74.0.3729.169-1

docker run --privileged --name e2e-chrome -p 9222:9222 -d vorobeez/puppeteer-e2e-chrome:74.0.3729.169-1

yarn e2e:update
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
          backgroundColor: COLORS.RED,
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
      <Icon name="AnotherSvgIcon" size="lg" color="RED" />
    </BoostProvider>
  )
}
```


### Using with fontawesome
At the first you need to add install awesome font to the index.html [as described in the fontawesome docs](https://fontawesome.com/start).

```js
import { BoostProvider, createTheme } from '@8base/boost';

const App = () => {
  return (
    <BoostProvider>
      ...
      <Icon className="fas fa-igloo" color="RED" size="lg" />
    </BoostProvider>
  )
}
```
