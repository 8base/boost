// @flow

import React from 'react';

import { HeadingTag } from './Heading.theme';

type HeadingProps = {
  children?: React$Node,
  kind?: 'primary' | 'secondary' | 'disabled' | 'white',
  text?: string,
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold',
};


function Heading({
  text,
  children,
  type,
  ...rest
  }: HeadingProps) {
  return (
    <HeadingTag
      { ...rest }
      tagName={ type }
      type={ type }
    >
      { children || text }
    </HeadingTag>
  );
}

Heading.defaultProps = {
  kind: 'primary',
  weight: 'normal',
};

export { Heading };
