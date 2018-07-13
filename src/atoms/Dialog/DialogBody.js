import React from 'react';

import { createStyledTag, createTheme } from '../../utils';

type DialogBodyProps = {|
  children?: React$Node,
|};

const name = 'dialogBody';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, (props) => ({
  padding: '1.5rem',
  borderTop: `1px solid ${props.theme.COLORS.DARK_DIVIDER_COLOR}`,
}));

function DialogBody({
  children,
  ...rest
  }: DialogBodyProps) {
  return <StyledTag { ...rest } tagName="div">{ children }</StyledTag>;
}

export { DialogBody, theme };
