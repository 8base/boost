import React from 'react';

import { createTheme } from '../../utils';
import { Card } from '../Card';
import { Row } from '../FlexLayout';

type DialogFooterProps = {|
  children?: React$Node,
|};

const name = 'dialogFooter';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

function DialogFooter({
  children,
  ...rest
  }: DialogFooterProps) {
  return (
    <Card.Footer offset="lg" { ...rest }>
      <Row justifyContent="end">
        { children }
      </Row>
    </Card.Footer>
  );
}

export { DialogFooter, theme };
