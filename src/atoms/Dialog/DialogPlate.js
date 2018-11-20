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
  tagName?: string,
|};

const name = 'dialogPlate';

const theme = createTheme(name, {
  modifiers: {
    size: {
      xs: {
        width: '300px',
      },
      sm: {
        width: '400px',
      },
      md: {
        width: '500px',
      },
      lg: {
        width: '600px',
      },
      xl: {
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
  maxHeight: '90%',
});

function DialogPlate({
  children,
  id,
  isOpen,
  onOpen,
  onClose,
  shouldCloseOnOverlayClick,
  size,
  args,
  tagName,
  ...rest
  }: DialogPlateProps) {
  return (
    <Modal id={ id } isOpen={ isOpen } onOpen={ onOpen } onClose={ onClose } args={ args } shouldCloseOnOverlayClick={ shouldCloseOnOverlayClick }>
      {
        ({ args, onClose }) => (
          <StyledTag tagName={ tagName } size={ size }>
            <Card.Plate { ...rest } args={ args } onClose={ onClose }>
              { children }
            </Card.Plate>
          </StyledTag>
        )
      }
    </Modal>
  );
}

DialogPlate.defaultProps = {
  ...theme[name].defaults,
  tagName: 'div',
};

export { DialogPlate, theme };
