import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';

type DividerProps = {|
|};

const name = 'divider';

const theme = createComponentTheme(name, (colors: *) => ({
  root: {
    backgroundColor: colors.LIGHT_GRAY4,
    height: '1px',
  },
  modifiers: {
  },
  defaults: {
  },
}));

const StyledTag = createStyledTag(name, {
  border: 'none',
  width: '100%',
  margin: '1rem 0',
});

function Divider(props: DividerProps) {
  return <StyledTag { ...props } tagName="hr" />;
}

export { Divider, theme };
