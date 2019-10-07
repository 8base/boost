import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button, Row, Column, Icon } from '../../';

storiesOf('Components/Button', module)
  .add('common', () => (
    <Column>
      <Row>
        <Button color="primary">Button</Button>
        <Button color="danger">Button</Button>
        <Button color="neutral">Button</Button>
        <Button color="primary" variant="outlined">Button</Button>
        <Button color="danger" variant="outlined">Button</Button>
        <Button color="neutral" variant="outlined">Button</Button>
      </Row>
      <Row>
        <Button color="primary" loading>Button</Button>
        <Button color="danger" loading>Button</Button>
        <Button color="neutral" loading>Button</Button>
        <Button color="primary" variant="outlined" loading>Button</Button>
        <Button color="danger" variant="outlined" loading>Button</Button>
        <Button color="neutral" variant="outlined" loading>Button</Button>
      </Row>
      <Row>
        <Button size="sm">Button</Button>
        <Button size="md">Button</Button>
        <Button size="lg">Button</Button>
      </Row>
      <Row>
        <Button disabled>Button</Button>
        <Button rounded>Button</Button>
        <Button squared><Icon name="Trashcan" /></Button>
        <Button>
          <Icon name="Trashcan" />
              Delete
        </Button>
      </Row>
      <Row style={{ width: '100%' }}>
        <Button stretch>Button</Button>
      </Row>
    </Column>
  ));

