import React from 'react';

import { createComponentTheme, createStyledTag } from '../../utils';
import { Card } from '../Card';
import type { PropSizes } from '../../types';

type DialogBodyProps = {|
  children?: React$Node,
  padding?: PropSizes,
  scrollable?: boolean,
|};

const name = 'dialogBody';

const theme = createComponentTheme(name, {});

const DialogBodyTag = createStyledTag(name, {
  flexShrink: 1,
});

const DialogBody = ({ children, ...rest }: DialogBodyProps) => (
  <DialogBodyTag tagName={ Card.Body } { ...rest }>
    { children }
  </DialogBodyTag>
);

export { DialogBody, theme };
