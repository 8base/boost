import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';
import { Modal } from '../Modal';
import { Card } from '../Card';
import type { PropSizes } from '../../types';

type DialogPlateProps = {|
  children?: React$Node,
  isOpen?: boolean,
  onClose?: (any) => void,
  onOpen?: (any) => void,
  shouldCloseOnOverlayClick?: boolean,
  shouldCloseOnEscPress ?: boolean,
  padding?: PropSizes,
  tagName?: string,
|};

const name = 'dialogPlate';

const theme = createComponentTheme(name, {
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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxHeight: '90%',
  flex: '0 1 90%',
});

function DialogPlate({
  children,
  id,
  isOpen,
  onOpen,
  onClose,
  shouldCloseOnOverlayClick,
  shouldCloseOnEscPress,
  size,
  args,
  tagName,
  ...rest
  }: DialogPlateProps) {
  return (
    <Modal
      id={ id }
      isOpen={ isOpen }
      onOpen={ onOpen }
      onClose={ onClose }
      args={ args }
      shouldCloseOnOverlayClick={ shouldCloseOnOverlayClick }
      shouldCloseOnEscPress={ shouldCloseOnEscPress }
    >
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
