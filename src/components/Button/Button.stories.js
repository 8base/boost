import React from 'react';

import { Button, Row, Column, Icon } from '../../';

export default {
  title: 'Components/Button',
  component: Button,
};

export const common = () => (
  <Column>
    <Row>
      <Button color="primary">Button</Button>
      <Button color="danger">Button</Button>
      <Button color="warning">Button</Button>
      <Button color="success">Button</Button>
      <Button color="neutral">Button</Button>
      <Button disabled>Button</Button>
    </Row>
    <Row>
      <Button color="primary" loading>Button</Button>
      <Button color="danger" loading>Button</Button>
      <Button color="warning" loading>Button</Button>
      <Button color="success" loading>Button</Button>
      <Button color="neutral" loading>Button</Button>
    </Row>
    <Row>
      <Button color="primary" variant="outlined">Button</Button>
      <Button color="danger" variant="outlined">Button</Button>
      <Button color="warning" variant="outlined">Button</Button>
      <Button color="success" variant="outlined">Button</Button>
    </Row>
    <Row>
      <Button color="primary" variant="outlined" loading>Button</Button>
      <Button color="danger" variant="outlined" loading>Button</Button>
      <Button color="warning" variant="outlined" loading>Button</Button>
      <Button color="success" variant="outlined" loading>Button</Button>
    </Row>
    <Row>
      <Button color="primary" variant="link">Button Link</Button>
      <Button color="danger" variant="link">Button Link</Button>
      <Button color="success" variant="link">Button Link</Button>
      <Button color="neutral" variant="link">Button Link</Button>
      <Button disabled variant="link">Button Link</Button>
    </Row>
    <Row>
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
    </Row>
    <Row>
      <Button rounded>Button</Button>
      <Button squared>
        <Icon name="Trashcan" />
      </Button>
      <Button>
        <Icon name="Trashcan" />
        Delete
      </Button>
    </Row>
    <Row style={{ width: '100%' }}>
      <Button stretch>Button</Button>
    </Row>
  </Column>
);

common.story = {
  name: 'common',
};
