import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';
import { Modal } from '../Modal';
import { Card } from '../Card';
import type { PropSizes } from '../../types';

import { DialogBody, theme as dialogBodyTheme } from './DialogBody';
import { DialogFooter, theme as dialogFooterTheme } from './DialogFooter';
import { DialogHeader, theme as dialogHeaderTheme } from './DialogHeader';

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

const name = 'dialog';

const dialogTheme = createComponentTheme(name, {
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

const theme = {
  ...dialogTheme,
  ...dialogBodyTheme,
  ...dialogFooterTheme,
  ...dialogHeaderTheme,
};

const DialogTag = createStyledTag(name, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxHeight: '90%',
  flex: '0 1 90%',
});

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
  tagName,
  ...rest
  }: DialogPlateProps) => {
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
          <DialogTag tagName={ tagName } size={ size }>
            <Card { ...rest } args={ args } onClose={ onClose }>
              { children }
            </Card>
          </DialogTag>
        )
      }
    </Modal>
  );
};

Dialog.defaultProps = {
  ...dialogTheme[name].defaults,
  tagName: 'div',
};

Dialog.Body = DialogBody;
Dialog.Header = DialogHeader;
Dialog.Footer = DialogFooter;

export { Dialog, theme };
