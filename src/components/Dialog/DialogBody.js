import React from 'react';

import { DialogBodyTag } from './Dialog.theme';
import { Card } from '../Card';
import type { PropSizes } from '../../types';

type DialogBodyProps = {|
  children?: React$Node,
  padding?: PropSizes,
  scrollable?: boolean,
|};

const DialogBody = ({ children, ...rest }: DialogBodyProps) => (
  <DialogBodyTag tagName={ Card.Body } { ...rest }>
    { children }
  </DialogBodyTag>
);

export { DialogBody };
