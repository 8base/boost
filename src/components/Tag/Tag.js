// @flow

import React from 'react';

import { TagOuter } from './Tag.theme';

type TagProps = {
  /** tag content */
  children?: React$Node,
  /** tag background color */
  color?: string,
};


const Tag = ({ children, ...rest }: TagProps) => (
  <TagOuter { ...rest } tagName="span">{ children }</TagOuter>
);

Tag.defaultProps = {
  color: 'PRIMARY',
};

export { Tag };
