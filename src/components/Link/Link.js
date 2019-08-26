// @flow

import React from 'react';
import { LinkTag } from './Link.theme';

type LinkProps = {
  children?: React$Node,
  color?: string,
  tagName?: any,
  text?: string,
  underline?: boolean,
};

function Link({
  text,
  children,
  tagName,
  ...rest
}: LinkProps) {
  return (
    <LinkTag
      { ...rest }
      tagName={ tagName }
    >
      { text || children }
    </LinkTag>
  );
}

Link.defaultProps = {
  color: 'LIGHT_BLUE',
  underline: false,
  tagName: 'a',
};

export { Link };
