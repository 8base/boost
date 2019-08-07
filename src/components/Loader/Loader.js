// @flow
import React from 'react';

import { LoaderTag, LoaderWrapperTag } from './Loader.theme';
import { COLORS } from '../../theme';

// $FlowIgnore
import LoaderSvg from './Loader.svg';

type LoaderProps = {
  size?: 'sm' | 'md' | 'lg',
  stretch?: boolean,
  color?: $Keys<typeof COLORS>,
};

function Loader(props: LoaderProps) {
  const uiLoader = (
    <LoaderTag { ...props } tagName="div" role="loader">
      <LoaderSvg width="100%" height="100%" />
    </LoaderTag>
  );

  if (props.stretch) {
    return <LoaderWrapperTag role="loader">{ uiLoader }</LoaderWrapperTag>;
  }

  return uiLoader;
}

Loader.defaultProps = {
  stretch: false,
  size: 'md',
  color: 'RED',
};

export { Loader };
