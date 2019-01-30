// @flow

import React from 'react';
import { ScrollableWrapper, ScrollableContent } from './Scrollable.theme';

type ScrollableProps = {|
  children: React$Node,
|};

function Scrollable({
  children,
  ...rest
  }: ScrollableProps) {
  return (
    <ScrollableWrapper { ...rest } tagName="div">
      <ScrollableContent modifiers={ rest } tagName="div">{ children }</ScrollableContent>
    </ScrollableWrapper>
  );
}

export { Scrollable };
