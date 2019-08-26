import React from 'react';

import { HeaderCloseTag } from './Dialog.theme';
import { Card } from '../Card';
import { Text } from '../Text';
import { Icon } from '../Icon';
import type { PropSizes } from '../../types';

type DialogHeaderProps = {
  children?: React$Node,
  title: string,
  padding?: PropSizes,
};


function DialogHeader({
  title,
  onClose,
  ...rest
}: DialogHeaderProps) {
  return (
    <Card.Header offset="lg" { ...rest }>
      <Text weight="semibold">{ title }</Text>
      <HeaderCloseTag onClick={ onClose }>
        <Icon size="sm" name="Delete" title="Close Dialog" />
      </HeaderCloseTag>
    </Card.Header>
  );
}

export { DialogHeader };
