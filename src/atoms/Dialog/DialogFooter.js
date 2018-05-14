import React from 'react';

import { createStyledTag, createTheme } from '../../utils';
import { Grid } from '../Grid';
import { Button } from '../Button';

type DialogFooterProps = {|
  children?: React$Node,
|};

const name = 'dialogFooter';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, {
  borderTop: '1px solid #EBEBEB',
  padding: '1rem 1.5rem',
});

function DialogFooter({
  children,
  actions = [],
  ...rest
  }: DialogFooterProps) {
  return (
    <StyledTag { ...rest } tagName="div">
      <Grid.Layout gap="xs" columns="1fr auto">
        <Grid.Box column="1" />
        { React.Children.toArray(
          actions.map(({ text, onClick }, index) => <Grid.Box key={ index } column={ index + 2 }><Button kind={ index === 0 ? 'secondary' : 'primary' } text={ text } onClick={ onClick } /></Grid.Box>),
        ) }
      </Grid.Layout>
    </StyledTag>
  );
}

export { DialogFooter, theme };
