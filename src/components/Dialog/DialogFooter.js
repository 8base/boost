import React from 'react';

import { Card } from '../Card';
import { Row } from '../FlexLayout';
import type { PropSizes } from '../../types';

type DialogFooterProps = {|
  children?: React$Node,
  padding?: PropSizes,
|};

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

export { DialogFooter };
