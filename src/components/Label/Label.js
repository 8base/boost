// @flow
import React from 'react';

import { LabelTag } from './Label.theme';

type LabelProps = {|
  kind?: 'primary' | 'secondary' | 'disabled',
  for?: string,
  children?: string,
  text?: string,
|};

function Label({
  text,
  children,
  ...rest
  }: LabelProps) {
  return (
    <LabelTag
      { ...rest }
      tagName="label"
    >
      { children || text }
    </LabelTag>
  );
}

Label.defaultProps = {
  kind: 'primary',
};

export { Label };
