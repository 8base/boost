// @flow

import React from 'react';

import { TagOuter, TagInner } from './Tag.theme';

type TagProps = {
  /** tag content */
  children?: React$Node,
  /** tag background color */
  color?: string,
};

const Tag = ({ children, ...rest }: TagProps) => (
  <TagOuter { ...rest } tagName="span">
    <TagInner tagName="span">{ children }</TagInner>
  </TagOuter>
);

Tag.defaultProps = {
  color: 'PRIMARY',
};

export { Tag };
