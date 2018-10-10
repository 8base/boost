import React from 'react';

export default (asStory) => {
  asStory('MOLECULES/Menu', module, (story, { Menu }) => {
    story
      .add('with some items', () => (
        <Menu.Plate>
          <Menu.Item>Tramman</Menu.Item>
          <Menu.Item>Gripman</Menu.Item>
          <Menu.Item>Proalliance</Menu.Item>
        </Menu.Plate>
      ));
  });
};
