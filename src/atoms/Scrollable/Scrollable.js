// @flow

import React from 'react';
import { createStyledTag, createTheme } from '../../utils';

type ScrollableProps = {|
|};

const name = 'scrollable';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const ScrollableWrapper = createStyledTag(name, {
  width: '100%',
  height: '100%',
  overflowY: 'auto',
});

const ScrollableContent = createStyledTag(name, {
  height: '100%',
});

function Scrollable({
  children,
  ...rest
  }: ScrollableProps) {
  return (
    <ScrollableWrapper { ...rest } tagName="div">
      <ScrollableContent tagName="div">{ children }</ScrollableContent>
    </ScrollableWrapper>
  );
}

export { Scrollable, theme };
