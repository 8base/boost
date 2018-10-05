import React from 'react';

export default (asStory) => {
  asStory('ATOMS/Menu', module, (story, { Menu }) => {
    story
      .add('s size', () => (
        <Menu.Plate>
          <Menu.Item>Tramman</Menu.Item>
          <Menu.Item>Gripman</Menu.Item>
          <Menu.Item>Proalliance</Menu.Item>
        </Menu.Plate>
      ))
      .add('m size', () => (
        <Menu.Plate size="m">
          <Menu.Item>Tramman</Menu.Item>
          <Menu.Item>Gripman</Menu.Item>
          <Menu.Item>Proalliance</Menu.Item>
        </Menu.Plate>
      ));
  });
};
