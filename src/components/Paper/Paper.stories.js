import React from 'react';

import { storiesOf } from '@storybook/react';
import { Paper, Row } from '../../';

storiesOf('Components/Paper', module)
  .add('default', () => (
    <Paper padding="md">Paper</Paper>
  ))
  .add('with padding', () => (
    <Row>
      <Paper padding="none">none</Paper>
      <Paper padding="xs">xs</Paper>
      <Paper padding="sm">sm</Paper>
      <Paper padding="md">md</Paper>
      <Paper padding="lg">lg</Paper>
      <Paper padding="xl">xl</Paper>
    </Row>
  ))
  .add('with borderRadius', () => (
    <Row>
      <Paper padding="lg" borderRadius="top">top</Paper>
      <Paper padding="lg" borderRadius="bottom">bottom</Paper>
      <Paper padding="lg" borderRadius="all">all</Paper>
    </Row>
  ));

