import React from 'react';

import { Heading, Grid } from '../../';

export default {
  title: 'Components/Heading',
  component: Heading,
};

export const common = () => (
  <Grid.Layout gap="xl">
    <Grid.Box>
      <Heading type="h1">Heading 1</Heading>
      <Heading type="h2">Heading 2</Heading>
      <Heading type="h3">Heading 3</Heading>
      <Heading type="h4">Heading 4</Heading>
      <Heading type="h5">Heading 5</Heading>
    </Grid.Box>
  </Grid.Layout>
);

common.story = {
  name: 'common',
};
