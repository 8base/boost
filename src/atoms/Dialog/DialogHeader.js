import React from 'react';

import { createStyledTag, createTheme } from '../../utils';
import { Card } from '../Card';
import { Heading } from '../typography/Heading';

type DialogHeaderProps = {|
  children?: React$Node,
  title: string,
|};

const name = 'dialogHeader';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const CloseStyledTag = createStyledTag(name, {
  cursor: 'pointer',
  userSelect: 'none',
  position: 'absolute',
  right: '2rem',
  fontWeight: 600,
  fontSize: '2rem',
  color: '#d0d7dd',

  '&:hover': {
    color: '#8698a7',
  },
});

function DialogHeader({
  title,
  onClose,
  ...rest
  }: DialogHeaderProps) {
  return (
    <Card.Header offset="lg" { ...rest }>
      <Heading type="h4">{ title }</Heading>
      <CloseStyledTag tagName="div" onClick={ onClose }>×</CloseStyledTag>
    </Card.Header>
  );
}

export { DialogHeader, theme };
