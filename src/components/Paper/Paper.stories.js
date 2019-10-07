import React from 'react';

import { Paper, Row } from '../../';

export default {
  title: 'Components/Paper',
};

export const defaultStory = () => <Paper padding="md">Paper</Paper>;

defaultStory.story = {
  name: 'default',
};

export const withPadding = () => (
  <Row>
    <Paper padding="none">none</Paper>
    <Paper padding="xs">xs</Paper>
    <Paper padding="sm">sm</Paper>
    <Paper padding="md">md</Paper>
    <Paper padding="lg">lg</Paper>
    <Paper padding="xl">xl</Paper>
  </Row>
);

withPadding.story = {
  name: 'with padding',
};

export const withBorderRadius = () => (
  <Row>
    <Paper padding="lg" borderRadius="top">
      top
    </Paper>
    <Paper padding="lg" borderRadius="bottom">
      bottom
    </Paper>
    <Paper padding="lg" borderRadius="all">
      all
    </Paper>
  </Row>
);

withBorderRadius.story = {
  name: 'with borderRadius',
};
