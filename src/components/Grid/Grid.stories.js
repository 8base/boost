import React from 'react';

export default (asStory) => {
  asStory('Components/Grid', module, (story, { Grid }) => {
    story
      .add('with default modifiers', () => (
        <Grid.Layout>
          <Grid.Box>1</Grid.Box>
          <Grid.Box>2</Grid.Box>
          <Grid.Box>3</Grid.Box>
        </Grid.Layout>
      ))
      .add('with inline modifier', () => (
        <Grid.Layout inline columns="auto auto auto">
          <Grid.Box>1</Grid.Box>
          <Grid.Box>2</Grid.Box>
          <Grid.Box>3</Grid.Box>
        </Grid.Layout>
      ))
      .add('with gap modifiers', () => (
        <Grid.Layout gap="md">
          <Grid.Box>1</Grid.Box>
          <Grid.Box>2</Grid.Box>
          <Grid.Box>3</Grid.Box>
        </Grid.Layout>
      ))
      .add('with padding modifiers', () => (
        <Grid.Layout padding="md">
          <Grid.Box>1</Grid.Box>
          <Grid.Box>2</Grid.Box>
          <Grid.Box>3</Grid.Box>
        </Grid.Layout>
      ))
      .add('with stretch column', () => (
        <Grid.Layout columns="300px minmax(200px, 1fr) 200px">
          <Grid.Box>300px</Grid.Box>
          <Grid.Box>stretch</Grid.Box>
          <Grid.Box>200px</Grid.Box>
        </Grid.Layout>
      ))
      .add('with grid areas', () => (
        <Grid.Layout columns="auto" areas={ [
          ['avatar', 'info', 'rating', 'rate', 'actions'],
          ['avatar', 'skills', 'skills', 'skills', 'actions'],
        ] }>
          <Grid.Box area="avatar">avatar</Grid.Box>
          <Grid.Box area="info">info</Grid.Box>
          <Grid.Box area="rating">rating</Grid.Box>
          <Grid.Box area="rate">rate</Grid.Box>
          <Grid.Box area="actions">actions</Grid.Box>
          <Grid.Box area="skills">skills</Grid.Box>
        </Grid.Layout>
      ));
  });
};
