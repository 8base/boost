import React from 'react';

import { createStyledTag, createTheme } from '../../utils';
import { Modal } from '../Modal';
import { Card } from '../Card';
import type { PropSizes } from '../../types';

type DialogPlateProps = {|
  children?: React$Node,
  isOpen?: boolean,
  onClose?: (any) => void,
  onOpen?: (any) => void,
  shouldCloseOnOverlayClick?: boolean,
  padding?: PropSizes,
|};

const name = 'dialogPlate';

const theme = createTheme(name, {
  modifiers: {
    size: {
      sm: {
        width: '400px',
      },
      md: {
        width: '600px',
      },
      lg: {
        width: '800px',
      },
    },
  },
  defaults: {
    size: 'md',
    padding: 'md',
  },
});

const StyledTag = createStyledTag(name, {
  boxSizing: 'border-box',
  border: '1px solid #E9EFF4',
  borderRadius: '6px',
  backgroundColor: '#FFFFFF',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.1)',
});

function DialogPlate({
  children,
  isOpen,
  onOpen,
  onClose,
  shouldCloseOnOverlayClick,
  size,
  ...rest
  }: DialogPlateProps) {
  return (
    <Modal isOpen={ isOpen } onOpen={ onOpen } onClose={ onClose } shouldCloseOnOverlayClick={ shouldCloseOnOverlayClick }>
      <StyledTag tagName="div" size={ size }>
        <Card.Plate { ...rest }>
          { children }
        </Card.Plate>
      </StyledTag>
    </Modal>
  );
}

DialogPlate.defaultProps = theme[name].defaults;

export { DialogPlate, theme };
