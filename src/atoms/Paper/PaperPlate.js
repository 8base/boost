import React from 'react';

import { createStyledTag, createTheme } from '../../utils';

type PaperPlateProps = {|
  children?: React$Node,
|};

const name = 'paperPlate';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, {
  backgroundColor: '#FFFFFF',
  borderRadius: '5px 5px 0 0',
  boxShadow: '0 2px 10px 0 rgba(0,0,0,0.16)',
  height: '100%',
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
});

function PaperPlate({
  children,
  ...rest
  }: PaperPlateProps) {
  return <StyledTag tagName="div" { ...rest }>{ children }</StyledTag>;
}

export { PaperPlate, theme };
