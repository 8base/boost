import React from 'react';

import { Modal } from '../Modal';
import { Card } from '../Card';
import type { PropSizes } from '../../types';

import { DialogBody } from './DialogBody';
import { DialogFooter } from './DialogFooter';
import { DialogHeader } from './DialogHeader';
import { DialogTag } from './Dialog.theme';

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


const Dialog = ({
  children,
  id,
  isOpen,
  onOpen,
  onClose,
  shouldCloseOnOverlayClick,
  shouldCloseOnEscPress,
  size,
  args,
  padding,
  tagName,
  ...rest
  }: DialogPlateProps) => {
  return (
    <Modal
      { ...rest }
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
          <DialogTag tagName={ tagName } size={ size }>
            <Card padding={ padding } args={ args } onClose={ onClose }>
              { children }
            </Card>
          </DialogTag>
        )
      }
    </Modal>
  );
};

Dialog.defaultProps = {
  size: 'md',
  padding: 'md',
  tagName: 'div',
};

Dialog.displayName = 'Dialog';

Dialog.Body = DialogBody;
Dialog.Header = DialogHeader;
Dialog.Footer = DialogFooter;

export { Dialog };
