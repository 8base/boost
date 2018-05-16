import React from 'react';

const onChange = () => null;

export default (asStory) => {
  asStory('ATOMS/DATA ENTRY/InputField', module, (story, { InputField }) => {
    story
      .add('without value', () => (
        <InputField label="Input" input={{ name: 'input', onChange }} />
      ))
      .add('with value', () => (
        <InputField label="Input" input={{ name: 'input', value: 'value', onChange }} />
      ))
      .add('with placeholder', () => (
        <InputField label="Input" placeholder="placeholder" input={{ name: 'input', onChange }} />
      ))
      .add('with stretch', () => (
        <InputField label="Input" stretch input={{ name: 'input', onChange }} />
      ))
      .add('with error', () => (
        <InputField label="Input" input={{ name: 'input', onChange }} meta={{ error: 'Required', touched: true }} />
      ))
      .add('without label', () => (
        <InputField input={{ name: 'input', onChange }} />
      ));
  });
};

