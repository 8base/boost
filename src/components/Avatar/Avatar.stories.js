/* eslint-disable no-alert */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { Avatar, Row, Column } from '../../';

storiesOf('Components/Avatar', module)
  .add('common', () => (
    <Column gap="lg">
      <Row>
        <Avatar />
        <Avatar firstName="Madelyn" lastName="Clantz" />
        <Avatar firstName="0" lastName="Wiers" />
        <Avatar src="https://randomuser.me/api/portraits/women/17.jpg" />
      </Row>
      <Row>
        <Avatar size="xl" />
        <Avatar size="lg" />
        <Avatar size="md" />
        <Avatar size="sm" />
        <Avatar size="xs" />
      </Row>
    </Column>
  ))
  .add('with pick', () => (
    <Avatar src="https://randomuser.me/api/portraits/women/17.jpg" onPick={ () => alert(1) } pickLabel="Change" />
  ));

