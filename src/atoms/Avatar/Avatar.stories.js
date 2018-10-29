/* eslint-disable no-alert */

import React from 'react';

export default (asStory) => {
  asStory('ATOMS/Avatar', module, (story, { Avatar }) => {
    story
      .add('with default modifiers', () => (
        <React.Fragment>
          <Avatar />
          <Avatar name="Madelyn" />
          <Avatar src="https://randomuser.me/api/portraits/women/76.jpg" />
        </React.Fragment>
      ))
      .add('with pick', () => (
        <Avatar src="https://randomuser.me/api/portraits/women/76.jpg" onPick={ () => alert(1) } pickLabel="Change" />
      ))
      .add('with custom size modifiers', () => (
        <Avatar src="https://randomuser.me/api/portraits/women/87.jpg" size="xs" />
      ));
  });
};
