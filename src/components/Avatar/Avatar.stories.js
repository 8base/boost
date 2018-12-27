/* eslint-disable no-alert */

import React from 'react';

export default (asStory) => {
  asStory('Components/Avatar', module, (story, { Avatar, Row, Column }) => {
    story
      .add('common', () => (
        <Column gap="lg">
          <Row>
            <Avatar />
            <Avatar name="Madelyn" />
            <Avatar src="https://randomuser.me/api/portraits/women/76.jpg" />
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
        <Avatar src="https://randomuser.me/api/portraits/women/76.jpg" onPick={ () => alert(1) } pickLabel="Change" />
      ));
  });
};
