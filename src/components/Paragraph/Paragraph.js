//@flow

import React from 'react';

import { ParagraphTag } from './Paragraph.theme';

type ParagraphProps = {
  children?: React$Node,
  kind?: 'primary' | 'secondary' | 'disabled' | 'white',
  text?: string,
};

const Paragraph = ({
  text,
  children,
  ...rest
  }: ParagraphProps) => {
  return (
    <ParagraphTag
      { ...rest }
      tagName="p"
    >
      { children || text }
    </ParagraphTag>
  );
};

Paragraph.defaultProps = {
  kind: 'primary',
};

export { Paragraph };
