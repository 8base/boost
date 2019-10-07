import React from 'react';
import * as glyphs from './glyphs';
import { storiesOf } from '@storybook/react';
import { Icon, Row, Text, Grid } from '../../';

storiesOf('Components/Icon', module)
  .add('all icons', () => (
    <Grid.Layout columns="auto auto auto auto auto" gap="sm">
      {
        Object.keys(glyphs).map((name) => (
          <Grid.Box key={ name } >
            <Row ><Icon name={ name } /><Text>{ name }</Text></Row>
          </Grid.Box>
        ))
      }
    </Grid.Layout>
  ))

  .add('with color', () => (
    <Row alignItems="center">
      <Icon name="Alert" color="DANGER" />
      <Icon name="DismissData" color="LIGHT_BLUE" />
      <Icon name="FirewallOn" color="BLUE" />
      <Icon name="Search" color="GREEN" />
      <Icon name="House" color="LIGHT_GRAY1" />
    </Row>
  ))

  .add('with size', () => (
    <Row alignItems="center">
      <Icon name="Search" size="xs" />
      <Icon name="Search" size="sm" />
      <Icon name="Search" size="md" />
      <Icon name="Search" size="lg" />
      <Icon name="Search" size="xl" />
    </Row>
  ));

