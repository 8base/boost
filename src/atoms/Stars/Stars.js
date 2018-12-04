import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';

type StarsProps = {|
|};

const name = 'stars';

const theme = createComponentTheme(name, {
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
