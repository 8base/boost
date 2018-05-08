import React from 'react';

export default (asStory) => {
  asStory('Atoms/Link', module, (story, { Link, Avatar }) => {
    story
      .add('with text', () => (
        <Link to="https://randomuser.me/api/portraits/women/76.jpg" text="Link" />
      ))
      .add('with children', () => (
        <Link to="https://randomuser.me/api/portraits/women/87.jpg">
          <Avatar src="https://randomuser.me/api/portraits/women/87.jpg" />
        </Link>
      ));
  });
};