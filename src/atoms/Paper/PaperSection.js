import React from 'react';

import { createStyledTag, createTheme } from '../../utils';

type PaperSectionProps = {|
  children?: React.Node,
  padding?: 'md' | 'none',
|};

const name = 'paperSection';

const theme = createTheme(name, {
  modifiers: {
    padding: {
      md: {
        padding: '1.5rem',
      },
      none: {},
    },
  },
  defaults: {
    padding: 'md',
  },
});

const StyledTag = createStyledTag(name, {
  '& + *': {
    borderTop: '1px solid #E9EFF4',
  },
  '&:last-child': {
    paddingBottom: 0,
  },
});

function PaperSection({
  children,
  ...rest
  }: PaperSectionProps) {
  return <StyledTag { ...rest } tagName="div">{ children }</StyledTag>;
}

export { PaperSection, theme };
