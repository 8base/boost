import React from 'react';

import { Button, ButtonGroup } from '../../';

export default {
  title: 'Components/ButtonGroup',
};

export const common = () => (
  <ButtonGroup>
    <Button variant="outlined">Button</Button>
    <Button variant="outlined">Button</Button>
    <Button>Button</Button>
    <Button variant="outlined">Button</Button>
  </ButtonGroup>
);

common.story = {
  name: 'common',
};
