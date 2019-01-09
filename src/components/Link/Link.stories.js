import React from 'react';

export default (asStory) => {
  asStory('Components/Link', module, (story, { Link, Avatar }) => {
    story
      .add('common', () => (
        <Link to="https://randomuser.me/api/portraits/women/76.jpg" text="With text" />
      ))
      .add('with children', () => (
        <Link to="https://randomuser.me/api/portraits/women/87.jpg">
          <Avatar src="https://randomuser.me/api/portraits/women/87.jpg" />
        </Link>
      ));
  });
};
