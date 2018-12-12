import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';

type StarsProps = {|
|};

const name = 'stars';

const theme = createComponentTheme(name, ({ COLORS }: *) => ({
  root: {
    color: COLORS.YELLOW,
    fontSize: '24px',
  },
  modifiers: {
  },
  defaults: {
  },
}));

const StyledTag = createStyledTag(name, {
  lineHeight: 'normal',
});

function Stars(props: StarsProps) {
  return <StyledTag { ...props } tagName="div">★★★★★</StyledTag>;
}

export { Stars, theme };
