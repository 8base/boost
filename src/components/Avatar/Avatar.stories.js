/* eslint-disable no-alert */

import React from 'react';

import { Avatar, Row, Column } from '../../';

export default {
  title: 'Components/Avatar',
  component: Avatar,
};

export const common = () => (
  <Column gap="lg">
    <Row>
      <Avatar />
      <Avatar firstName="Madelyn" lastName="Clantz" />
      <Avatar firstName="0" lastName="Wiers" />
      { /* Wide image */ }
      <Avatar src="https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-1.2.1&auto=format&fit=crop&w=1930&q=80" />
      <Avatar src="https://randomuser.me/api/portraits/women/17.jpg" />
      <Avatar src="https://cdn.filestackcontent.com/security=policy:eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MjUyNDYwODAwMCwiaGFuZGxlIjoibXFBSVk5T1JKU1MweWpZbzhzUUcifQ==,signature:9cc918b40a68d76e681387fef3595a20ee386296a3f1197c1ee492e01c1fa577/mqAIY9ORJSS0yjYo8sQG" />
    </Row>
    <Row>
      <Avatar size="xxl" />
      <Avatar size="xl" />
      <Avatar size="lg" />
      <Avatar size="md" />
      <Avatar size="sm" />
      <Avatar size="xs" />
    </Row>
    <Row>
      <Avatar size="xl" variant="circle" />
      <Avatar size="xl" variant="square" />
      <Avatar size="xl" variant="rounded" />
    </Row>
  </Column>
);

common.story = {
  name: 'common',
};

export const withPick = () => (
  <Column>
    <Row>
      <Avatar
        src="https://randomuser.me/api/portraits/women/17.jpg"
        onPick={ () => alert(1) }
      />
      <Avatar
        src="https://randomuser.me/api/portraits/women/17.jpg"
        size="xxl"
        onPick={ () => alert(1) }
        pickLabel="Update"
        pickVariant="fullWidth"
        variant="rounded"
      />
    </Row>
  </Column>

);

withPick.story = {
  name: 'with pick',
};
