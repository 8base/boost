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
      .add('with error and row direction', () => (
        <InputField label="Input" direction="row" input={{ name: 'input', onChange }} meta={{ error: 'Required', touched: true }} />
      ))
      .add('without label', () => (
        <InputField input={{ name: 'input', onChange }} />
      ))
      .add('without error label and indicator', () => (
        <InputField hideErrorLabel hideErrorIndicator input={{ name: 'input', onChange }} meta={{ error: 'Required', touched: true }} />
      ))
      .add('with row direction', () => (
        <InputField direction="row" label="Input" input={{ name: 'input', onChange }} />
      ))
      .add('with row direction and stretch=false', () => (
        <InputField direction="row" stretch={ false } label="Input" input={{ name: 'input', onChange }} />
      ))
      .add('with square input', () => (
        <InputField direction="row" stretch={ false } square label="Input" input={{ name: 'input', onChange }} />
      ))
      .add('with center align', () => (
        <InputField input={{ name: 'input', onChange }} align="center" />
      ));
  });
};
