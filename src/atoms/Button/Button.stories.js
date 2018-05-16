import React from 'react';

export default (asStory) => {
  asStory('ATOMS/Button', module, (story, { Button }) => {
    story
      .add('with text', () => (
        <Button text="Text" />
      ))
      .add('with loading', () => (
        <React.Fragment>
          <Button text="Text" loading />
          <Button text="Text" kind="secondary" loading />
        </React.Fragment>
      ))
      .add('with children', () => (
        <Button>Children</Button>
      ))
      .add('with kind secondary', () => (
        <Button text="Text" kind="secondary" />
      ))
      .add('with submit type', () => (
        <Button type="submit" text="Submit" />
      ));
  });
};
