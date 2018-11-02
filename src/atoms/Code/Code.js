// @flow

import React from 'react';
import { CodeWrapperTag, CodeBodyTag } from './Code.theme';

type CodeProps = {
  children: React$Node,
}

const Code = ({ children }: CodeProps) => (
  <CodeWrapperTag>
    <CodeBodyTag>
      { children }
    </CodeBodyTag>
  </CodeWrapperTag>
);

export {
  Code,
};
