import React from 'react';

export default (asStory) => {
  asStory('Components/CheckboxField', module, (story, { CheckboxField }) => {
    story
      .add('default', () => (
        <CheckboxField label="CheckboxField" />
      ))
      .add('with checked', () => (
        <CheckboxField label="CheckboxField" input={{ value: true }} />
      ))
      .add('with error', () => (
        <CheckboxField label="CheckboxField" input={{ value: false }} meta={{ error: 'Required', touched: true }} />
      ));
  });
};
