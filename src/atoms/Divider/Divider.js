import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';

type DividerProps = {|
|};

const name = 'stars';

const theme = createComponentTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, (props) => ({
  backgroundColor: props.theme.COLORS.DARK_DIVIDER_COLOR,
  height: '1px',
  border: 'none',
  width: '100%',
  margin: '1rem 0',
}));

function Divider(props: DividerProps) {
  return <StyledTag { ...props } tagName="hr" />;
}

export { Divider, theme };
