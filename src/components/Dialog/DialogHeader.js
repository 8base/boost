import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';
import { Card } from '../Card';
import { Text } from '../Text';
import { Icon } from '../Icon';
import type { PropSizes } from '../../types';

type DialogHeaderProps = {|
  children?: React$Node,
  title: string,
  padding?: PropSizes,
|};

const name = 'dialogHeader';

const theme = createComponentTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const CloseTag = createStyledTag(`${name}Close`, {
  cursor: 'pointer',
  userSelect: 'none',
  position: 'absolute',
  right: '20px',

  '&:hover': {
    color: '#8698a7',
  },
});
CloseTag.displayName = 'CloseTag';

function DialogHeader({
  title,
  onClose,
  ...rest
  }: DialogHeaderProps) {
  return (
    <Card.Header offset="lg" { ...rest }>
      <Text weight="semibold" color="DARK_GRAY1">{ title }</Text>
      <CloseTag onClick={ onClose }>
        <Icon size="sm" name="Delete" title="Close Dialog" />
      </CloseTag>
    </Card.Header>
  );
}

export { DialogHeader, theme };
