// @flow

import React from 'react';

import { TagOuter, TagInner } from './Tag.theme';

type TagProps = {
  /** tag content */
  children?: React$Node,
  /** tag background color */
  color?: string,
  condensed?: boolean,
};

const Tag = ({ children, condensed = false, ...rest }: TagProps) => (
  <TagOuter condensed={ condensed } { ...rest } tagName="span">
    <TagInner tagName="span">{ children }</TagInner>
  </TagOuter>
);

Tag.defaultProps = {
  color: 'PRIMARY',
};

export { Tag };
