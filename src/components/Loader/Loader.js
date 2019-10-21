// @flow
import React from 'react';

import { LoaderTag, LoaderWrapperTag, LoaderCircleTag } from './Loader.theme';
import { COLORS } from '../../theme';

type LoaderProps = {
  size?: 'sm' | 'md' | 'lg',
  stretch?: boolean,
  color?: $Keys<typeof COLORS>,
};

function Loader(props: LoaderProps) {
  const uiLoader = (
    <LoaderTag { ...props } tagName="div" role="loader">
      <LoaderCircleTag { ...props } delay="0" />
      <LoaderCircleTag { ...props } delay="0.9s" />
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
  color: 'RED_30',
};

export { Loader };

