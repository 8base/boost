// @flow

import React from 'react';
import fp from 'lodash/fp';

import { createStyledTag, createComponentTheme } from '../../utils';
import { getContrastColor } from './Tag.utils';

type TagProps = {|
  /** tag content */
  children?: React$Node,
  /** tag background color */
  color?: string,
|};

const name = 'tag';

const theme = createComponentTheme(name, ({ COLORS }: *): * => ({
  root: {
    margin: 0,
    height: '24px',
    padding: '0 8px',
    borderRadius: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modifiers: {
    color: fp.mapValues(
      (color) => ({
        backgroundColor: color,
        color: getContrastColor(color, {
          lightColor: COLORS.LIGHT_PRIMARY_TEXT_COLOR,
          darkColor: COLORS.PRIMARY_TEXT_COLOR,
        }),
      }),
      COLORS,
    ),
  },

  defaults: {
    color: 'PRIMARY',
  },
}));

const TagOuter = createStyledTag(name);

const Tag = ({ children, ...rest }: TagProps) => (
  <TagOuter { ...rest } tagName="span">{ children }</TagOuter>
);

Tag.defaultProps = {
  ...theme[name].defaults,
};

export { Tag, theme };
