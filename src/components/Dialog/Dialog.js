import React from 'react';

import { Modal } from '../Modal';
import { Card } from '../Card';
import type { PropSizes } from '../../types';

import { DialogBody } from './DialogBody';
import { DialogFooter } from './DialogFooter';
import { DialogHeader } from './DialogHeader';
import { DialogTag, DialogInnerTag } from './Dialog.theme';

type DialogProps = {
  children?: React$Node,
  isOpen?: boolean,
  onClose?: (any) => void,
  onOpen?: (any) => void,
  shouldCloseOnOverlayClick?: boolean,
  shouldCloseOnEscPress ?: boolean,
  padding?: PropSizes,
  tagName?: string,
  stretch?: boolean,
};


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
  stretch,
  ...rest
  }: DialogProps) => {
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
          <DialogTag tagName={ tagName } size={ size } stretch={ stretch }>
            <Card padding={ padding } args={ args } onClose={ onClose } stretch={ stretch }>
              {
                typeof children === 'function'
                  ? (args) => <DialogInnerTag stretch={ stretch }>{ children(args) }</DialogInnerTag>
                  : <DialogInnerTag stretch={ stretch }>{ children }</DialogInnerTag>
              }
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
