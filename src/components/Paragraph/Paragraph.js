//@flow

import React from 'react';

import { ParagraphTag } from './Paragraph.theme';
import { COLORS } from '../../theme';

type ParagraphProps = {
  children?: React$Node | string | number,
  text?: string | number,
  color?: $Keys<typeof COLORS>,
  align?: 'left' | 'center' | 'right',
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold',
  verticalAlign?: string,
};

const Paragraph = ({ text, children, ...rest }: ParagraphProps) => (
  <ParagraphTag { ...rest } tagName="p">
    { children || text }
  </ParagraphTag>
);

Paragraph.defaultProps = {
  color: 'PRIMARY_TEXT_COLOR',
  weight: 'normal',
};

export { Paragraph };
