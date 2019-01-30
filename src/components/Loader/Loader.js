// @flow
import React from 'react';

import { LoaderTag, LoaderWrapperTag } from './Loader.theme';

import LoaderSvg from './Loader.svg';

type LoaderProps = {
  size?: 'sm' | 'md' | 'lg',
  stretch?: boolean,
};

function Loader(props: LoaderProps) {
  if (props.stretch) {
    return (
      <LoaderWrapperTag role="loader">
        <LoaderTag { ...props } tagName="div">
          <LoaderSvg width="100%" height="100%" />
        </LoaderTag>
      </LoaderWrapperTag>
    );
  }

  return (
    <LoaderTag { ...props } tagName="div" role="loader">
      <LoaderSvg width="100%" height="100%" />
    </LoaderTag>
  );
}

Loader.defaultProps = {
  stretch: false,
  size: 'md',
};

export { Loader };
