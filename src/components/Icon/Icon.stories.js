import React from 'react';

export default (asStory) => {
  asStory('Components/Icon', module, (story, { Icon }) => {
    story
      .add('all icons', () => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon name="Alert" />
          <Icon name="PaperClip" />
          <Icon name="APIToken" />
          <Icon name="Check" />
          <Icon name="ChevronDown" />
          <Icon name="CloudDatabase" />
          <Icon name="Delete" />
          <Icon name="Diagram" />
          <Icon name="DismissData" />
          <Icon name="Dots" />
          <Icon name="EditPencil" />
          <Icon name="Environment" />
          <Icon name="FirewallOn" />
          <Icon name="Gear" />
          <Icon name="GraphQL" />
          <Icon name="Group" />
          <Icon name="HelpCenter" />
          <Icon name="Home" />
          <Icon name="Lock" />
          <Icon name="Mail" />
          <Icon name="MapPin" />
          <Icon name="Planet" />
          <Icon name="Search" />
          <Icon name="SpeedMeter" />
          <Icon name="Trashcan" />
          <Icon name="TreeView" />
          <Icon name="Contract" />
          <Icon name="Customers" />
          <Icon name="House" />
          <Icon name="Screens" />
          <Icon name="Settings" />
          <Icon name="DataBuilder" />
          <Icon name="Logic" />
        </div>
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
