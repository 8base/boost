import React from 'react';

export default (asStory) => {
  asStory('Components/Menu', module, (story, { Menu }) => {
    story
      .add('common', () => (
        <Menu>
          <Menu.Item>Tramman</Menu.Item>
          <Menu.Item>Gripman</Menu.Item>
          <Menu.Item disabled>Proalliance</Menu.Item>
        </Menu>
      ));
  });
};
