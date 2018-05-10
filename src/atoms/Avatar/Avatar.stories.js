import React from 'react';

export default (asStory) => {
  asStory('Atoms/Avatar', module, (story, { Avatar }) => {
    story
      .add('with default modifiers', () => (
        <Avatar src="https://randomuser.me/api/portraits/women/76.jpg" />
      ))
      .add('with custom size modifiers', () => (
        <Avatar src="https://randomuser.me/api/portraits/women/87.jpg" size="xs" />
      ));
  });
};
