import React from 'react';

export default (asStory) => {
  asStory('ATOMS/TYPOGRAPHY/Icon', module, (story, { Icon }) => {
    story
      .add('all icons', () => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon name="Check" />
          <Icon name="ChevronDown" />
          <Icon name="CloudDatabase" />
          <Icon name="Diagram" />
          <Icon name="Dots" />
          <Icon name="FirewallOn" />
          <Icon name="Gear" />
          <Icon name="Group" />
          <Icon name="Lock" />
          <Icon name="Mail" />
          <Icon name="MapPin" />
          <Icon name="Search" />
          <Icon name="SpeedMeter" />
          <Icon name="Trashcan" />
          <Icon name="TreeView" />
        </div>
      ))
      .add('with custom color', () => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon name="CloudDatabase" color="LIGHT_BLUE" />
          <Icon name="FirewallOn" color="BLUE" />
          <Icon name="Search" color="GREEN" />
          <Icon name="Dots" color="LIGHT_GRAY1" />
        </div>
      ))
      .add('with custom sizes', () => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon name="Check" size="xs" />
          <Icon name="Check" size="sm" />
          <Icon name="Check" size="md" />
          <Icon name="Check" size="lg" />
        </div>
      ));
  });
};
