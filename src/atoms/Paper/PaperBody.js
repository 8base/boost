import React from 'react';

import { createStyledTag, createTheme } from '../../utils';

type PaperBodyProps = {|
  children?: React.Node,
|};

const name = 'paperBody';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, {
  borderTop: '1px solid #E9EFF4',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  paddingBottom: '1.5rem',
});

function PaperBody({
  children,
  ...rest
  }: PaperBodyProps) {
  return <StyledTag { ...rest } tagName="div">{ children }</StyledTag>;
}

export { PaperBody, theme };
