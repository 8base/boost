import React from 'react';

import { createTheme } from '../../utils';
import { Card } from '../Card';
import type { PropSizes } from '../../types';

type DialogBodyProps = {|
  children?: React$Node,
  padding?: PropSizes,
|};

const name = 'dialogBody';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

function DialogBody({
  children,
  ...rest
  }: DialogBodyProps) {
  return <Card.Body { ...rest }>{ children }</Card.Body>;
}

export { DialogBody, theme };
