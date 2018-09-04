import React from 'react';

import { createStyledTag, createTheme } from '../../utils';
import LoaderIcon from './Loader.svg';

type LoaderProps = {|
  size?: 'sm' | 'md' | 'lg',
|};

const name = 'loader';

const theme = createTheme(name, {
  modifiers: {
    size: {
      sm: {
        width: '4rem',
        height: '4rem',
      },
      md: {
        width: '6rem',
        height: '6rem',
      },
      lg: {
        width: '8rem',
        height: '8rem',
      },
    },
  },
  defaults: {
    size: 'md',
  },
});

const StyledTag = createStyledTag(name, () => ({}));

const WrapperTag = createStyledTag(`${name}Wrapper`, () => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  width: '100%',
  height: '100%',
}));

function Loader(props: LoaderProps) {
  if (props.stretch) {
    return <WrapperTag><StyledTag { ...props } tagName={ LoaderIcon } /></WrapperTag>;
  }

  return <StyledTag { ...props } tagName={ LoaderIcon } />;
}

Loader.defaultProps = {
  stretch: false,
};

export { Loader, theme };
