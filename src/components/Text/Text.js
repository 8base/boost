// @flow

import React from 'react';

import { TextTag } from './Text.theme';
import { COLORS } from '../../theme';

type TextProps = {
  /** text to display in the component */
  children?: React$Node | string | number,
  /** another way to set displayed text */
  text?: string | number,
  /** possible text colors */
  color?: $Keys<typeof COLORS>,
  /** disabled text state*/
  disabled?: boolean,
  /** set style to bold or other weights */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold',
  /** text align */
  align?: 'left' | 'center' | 'right',
  /** when true then cut text with ellipsis */
  ellipsis?: boolean,
  /** possible types of the css cursor property */
  cursor?: 'pointer' | 'default' | 'auto',
  /** modern text kinds */
  kind?: 'overline-2' | 'overline-1' | 'small-2' | 'small-1' | 'body' | 'subtitle',
};

function Text({
  text,
  children,
  ...rest
}: TextProps) {
  return <TextTag { ...rest } tagName="span">{ children || text }</TextTag>;
}

Text.defaultProps = {
  kind: 'body',
  ellipsis: false,
};

export { Text };
