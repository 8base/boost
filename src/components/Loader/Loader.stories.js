import React from 'react';

import { Loader, Row } from '../../';

export default {
  title: 'Components/Loader',
  component: Loader,
};

export const common = () => (
  <Row alignItems="center" gap="md">
    <Loader size="sm" />
    <Loader size="md" />
    <Loader size="lg" />
  </Row>
);

common.story = {
  name: 'common',
};

export const withStretch = () => (
  <div style={{ border: '1px solid gray', height: '300px' }}>
    <Loader stretch />
  </div>
);

withStretch.story = {
  name: 'with stretch',
};

export const withColor = () => (
  <Row alignItems="center" gap="lg" flexWrap="wrap">
    <Loader size="md" color="PRIMARY" />
    <Loader size="md" color="SUCCESS" />
    <Loader size="md" color="PURPLE_10" />
  </Row>
);

withColor.story = {
  name: 'with color',
};
