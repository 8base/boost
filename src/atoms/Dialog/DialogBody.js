import React from 'react';

import { createTheme, createStyledTag } from '../../utils';
import { Card } from '../Card';
import type { PropSizes } from '../../types';

type DialogBodyProps = {|
  children?: React$Node,
  padding?: PropSizes,
  scrollable?: boolean,
|};

const name = 'dialogBody';

const theme = createTheme(name, {
  modifiers: {
    scrollable: {
      maxHeight: 'calc(60vh - 14rem)',
    },
  },
  defaults: {
    scrollable: false,
  },
});

const DialogBodyTag = createStyledTag(name, {});

const DialogBody = ({ children, ...rest }: DialogBodyProps) => (
  <DialogBodyTag tagName={ Card.Body } { ...rest }>
    { children }
  </DialogBodyTag>
);

export { DialogBody, theme };
