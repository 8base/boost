import React from 'react';

import { createStyledTag, createTheme } from '../../utils';
import { Grid } from '../Grid';
import { Heading } from '../typography/Heading';

type DialogHeaderProps = {|
  children?: React$Node,
  heading: string,
|};

const name = 'dialogHeader';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, {
  alignItems: 'center',
  display: 'flex',
  height: '4rem',
  padding: '1.5rem',
  position: 'relative',
});

const CloseStyledTag = createStyledTag(name, {
  cursor: 'pointer',
  userSelect: 'none',
});

function DialogHeader({
  heading,
  onClose,
  ...rest
  }: DialogHeaderProps) {
  return (
    <StyledTag { ...rest } tagName="div">
      <Grid.Layout columns="auto 1fr auto" stretch>
        <Grid.Box>
          <Heading type="h5" text={ heading } weight="semibold" />
        </Grid.Box>
        <Grid.Box />
        <Grid.Box justifyContent="center">
          <CloseStyledTag tagName="div" onClick={ onClose }>✕</CloseStyledTag>
        </Grid.Box>
      </Grid.Layout>
    </StyledTag>
  );
}

export { DialogHeader, theme };
