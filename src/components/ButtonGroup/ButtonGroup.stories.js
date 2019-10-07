import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button, ButtonGroup } from '../../';

storiesOf('Components/ButtonGroup', module)
  .add('common', () => (
    <ButtonGroup>
      <Button variant="outlined">Button</Button>
      <Button variant="outlined">Button</Button>
      <Button>Button</Button>
      <Button variant="outlined">Button</Button>
    </ButtonGroup>
  ));

