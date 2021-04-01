import React from 'react';
import * as glyphs from './glyphs';
import { Icon, Row, Text, Grid } from '../../';

export default {
  title: 'Components/Icon',
  component: Icon,
};

export const allIcons = () => (
  <Grid.Layout columns="auto auto auto auto auto" gap="sm">
    { Object.keys(glyphs).map(name => (
      <Grid.Box key={ name }>
        <Row>
          <Icon name={ name } />
          <Text>{ name }</Text>
        </Row>
      </Grid.Box>
    )) }
  </Grid.Layout>
);

allIcons.story = {
  name: 'all icons',
};

export const withColor = () => (
  <Row alignItems="center">
    <Icon name="Alert" color="DANGER" />
    <Icon name="DismissData" color="BLUE_10" />
    <Icon name="FirewallOn" color="BLUE_30" />
    <Icon name="Search" color="GREEN_40" />
    <Icon name="House" color="GRAY_40" />
  </Row>
);

withColor.story = {
  name: 'with color',
};

export const withSize = () => (
  <Row alignItems="center">
    <Icon name="Search" size="xs" />
    <Icon name="Search" size="sm" />
    <Icon name="Search" size="md" />
    <Icon name="Search" size="lg" />
    <Icon name="Search" size="xl" />
  </Row>
);

withSize.story = {
  name: 'with size',
};

export const withCustomSize = () => (
  <Row alignItems="center">
    <Icon name="House" size="custom" customSize="100px" />
    <Icon name="House" size="custom" customSize="2rem" />
  </Row>
);

withCustomSize.story = {
  name: 'with custom size',
};
