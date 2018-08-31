import React from 'react';

export default (asStory) => {
  asStory('ATOMS/Button', module, (story, { Button, Row, Column, Icon }) => {
    story
      .add('with text', () => (
        <Button text="Text" />
      ))
      .add('with loading', () => (
        <React.Fragment>
          <Button color="neutral" text="TextTextTextText" loading />
          <br />
          <Button text="Text" color="secondary" loading />
        </React.Fragment>
      ))
      .add('with children', () => (
        <Button>Children</Button>
      ))
      .add('with submit type', () => (
        <Button text="Submit" type="submit" />
      ))
      .add('with disabled modifiers', () => (
        <Row>
          <Button text="Disabled" color="primary" disabled />
          <Button text="Disabled" color="secondary" disabled />
          <Button text="Disabled" color="neutral" disabled />
        </Row>
      ))
      .add('with custom colors and variant', () => (
        <Column style={{ background: '#999' }}>
          <Row>
            <Button text="Raised" color="primary" />
            <Button text="Raised" color="secondary" />
            <Button text="Raised" color="red" />
            <Button text="Raised" color="neutral" />
            <Button text="Raised" color="white" />
          </Row>
          <Row>
            <Button text="Outlined" color="primary" variant="outlined" />
            <Button text="Outlined" color="secondary" variant="outlined" />
            <Button text="Outlined" color="red" variant="outlined" />
            <Button text="Outlined" color="neutral" variant="outlined" />
            <Button text="Outlined" color="white" variant="outlined" />
          </Row>
        </Column>
      ))
      .add('with custom sizes', () => (
        <Row>
          <Button text="Small Button" size="sm" />
          <Button text="Medium Button" size="md" />
          <Button text="Large Button" size="lg" />
        </Row>
      ))
      .add('with stretch', () => (
        <Button text="Stretch" stretch />
      ))
      .add('with icon', () => (
        <Button color="secondary" variant="outlined">
          <Icon size="xs" name="Check" color="GREEN" />
          <span>Succes</span>
        </Button>
      ));
  });
};
