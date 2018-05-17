import React from 'react';

export default (asStory) => {
  asStory('ATOMS/TYPOGRAPHY/Icon', module, (story, { Icon }) => {
    story
      .add('all icons', () => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon name="ChevronDown" />
          <Icon name="Check" />
        </div>
      ))
      .add('with custom color', () => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon name="Check" color="primary" />
          <Icon name="Check" color="green" />
          <Icon name="Check" color="blue" />
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
