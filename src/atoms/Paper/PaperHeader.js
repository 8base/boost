import React from 'react';

import { createStyledTag, createTheme } from 'utils';
import { Heading } from 'atoms/typography/Heading';

type PaperHeaderProps = {|
  children?: React.Node,
  title: string,
|};

const name = 'paperHeader';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, ({
  alignItems: 'center',
  display: 'flex',
  height: '80px',
  justifyContent: 'space-between',
  padding: '0 1.5em',
}));

function PaperHeader({
  children,
  title,
  ...rest
  }: PaperHeaderProps) {
  return (
    <StyledTag { ...rest } tagName="div">
      <Heading type="h4" text={ title } />
      { children }
    </StyledTag>
  );
}

export { PaperHeader, theme };
