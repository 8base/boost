import React from 'react';

import { createStyledTag, createTheme } from 'utils';

type StarsProps = {|
|};

const name = 'stars';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, {
  color: '#FFCB00',
  lineHeight: 'normal',
  fontSize: '24px',
});

function Stars(props: StarsProps) {
  return <StyledTag { ...props } tagName="div">★★★★★</StyledTag>;
}

export { Stars, theme };
