import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';
import LoaderSvg from './Loader.svg';

type LoaderProps = {|
  size?: 'sm' | 'md' | 'lg',
|};

const name = 'loader';

const theme = createComponentTheme(name, {
  modifiers: {
    size: {
      sm: {
        width: '32px',
        height: '32px',
      },
      md: {
        width: '64px',
        height: '64px',
      },
      lg: {
        width: '80px',
        height: '80px',
      },
    },
  },
  defaults: {
    size: 'md',
  },
});

const LoaderTag = createStyledTag(name);
LoaderTag.displayName = 'LoaderTag';

const WrapperTag = createStyledTag(`${name}Wrapper`, () => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  width: '100%',
  height: '100%',
}));
WrapperTag.displayName = 'WrapperTag';

const LoaderIcon = () => <LoaderSvg />;

function Loader(props: LoaderProps) {
  if (props.stretch) {
    return <WrapperTag role="loader"><LoaderTag { ...props } tagName={ LoaderIcon } /></WrapperTag>;
  }

  return <LoaderTag { ...props } tagName={ LoaderIcon } role="loader" />;
}

Loader.defaultProps = {
  stretch: false,
};

export { Loader, theme };
