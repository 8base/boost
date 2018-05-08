import React from 'react';

import { createStyledTag, createTheme } from '../../utils';
import { Modal } from '../Modal'
import { DialogHeader } from './DialogHeader'
import { DialogBody } from './DialogBody'
import { DialogFooter } from './DialogFooter'

type DialogPlateProps = {|
  actions?: Array<{
    onClick?: (event?: SyntheticMouseEvent) => void,
    text?: string,
  }>,
  children?: React$Node,
  heading: string,
  isOpen?: boolean,
  onClose?: (any) => void,
  onOpen?: (any) => void,
  shouldCloseOnOverlayClick?: boolean,
|};

const name = 'dialogPlate';

const theme = createTheme(name, {
  modifiers: {
    size: {
      md: {
        width: '600px',
      },
    },
  },
  defaults: {
    size: 'md',
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
  heading,
  actions,
  isOpen,
  onOpen,
  onClose,
  shouldCloseOnOverlayClick,
  ...rest
  }: DialogPlateProps) {
  return (
    <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose} shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}>
      <StyledTag tagName="div" {...rest}>
        <DialogHeader heading={heading} onClose={onClose} />
        <DialogBody>{children}</DialogBody>
        <DialogFooter actions={actions} />
      </StyledTag>
    </Modal>
  );
}

export { DialogPlate, theme };