import React from 'react';

import * as glyphs from './glyphs';

export default (asStory) => {
  asStory('Components/Icon', module, (story, { Icon, Column, Row, Text }) => {
    story
      .add('all icons', () => (
        <Column>
          {
            Object.keys(glyphs).map((name) => <Row key={ name }><Icon name={ name } /><Text>{ name }</Text></Row>)
          }
        </Column>
      ))
      .add('with custom color', () => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon name="Alert" color="DANGER" />
          <Icon name="CloudDatabase" color="LIGHT_BLUE" />
          <Icon name="FirewallOn" color="BLUE" />
          <Icon name="Search" color="GREEN" />
          <Icon name="Dots" color="LIGHT_GRAY1" />
        </div>
      ))
      .add('with custom sizes', () => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon name="Check" size="sm" />
          <Icon name="Check" size="md" />
          <Icon name="Check" size="lg" />
        </div>
      ));
  });
};
