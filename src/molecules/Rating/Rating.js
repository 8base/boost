import React from 'react';
import { Grid, Stars, Text } from '../../atoms/atoms';

type RatingProps = {|
  value: number,
|};

function Rating({
  value,
  ...rest
  }: RatingProps) {
  return (
    <Grid.Layout gap="xs" autoColumns="min-content" inline {...rest}>
      <Grid.Box justifyContent="center"><Stars /></Grid.Box>
      <Grid.Box column={2} justifyContent="center"><Text kind="secondary">{value}</Text></Grid.Box>
    </Grid.Layout>
  );
}

export { Rating };