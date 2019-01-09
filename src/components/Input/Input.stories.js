import React from 'react';

export default (asStory) => {
  asStory('Components/Input', module, (story, { Input, StateContainer }) => {
    story
      .add('default', () => (
        <Input name="input" onChange={ () => null } />
      ))
      .add('with value', () => (
        <Input name="input" value="value" onChange={ () => null } />
      ))
      .add('with placeholder', () => (
        <Input name="input" placeholder="custom placeholder" onChange={ () => null } />
      ))
      .add('with error', () => (
        <Input name="input" hasError onChange={ () => null } />
      ))
      .add('with stretch=false', () => (
        <Input name="input" stretch={ false } onChange={ () => null } />
      ))
      .add('with custom width', () => (
        <Input name="input" width={ 5 } onChange={ () => null } />
      ))
      .add('with left icon', () => (
        <Input name="input" leftIcon="i" />
      ))
      .add('with right icon', () => (
        <Input name="input" rightIcon="i" />
      ))
      .add('with right icon and error', () => (
        <Input name="input" rightIcon="i" hasError hideErrorIndicator />
      ))
      .add('with html auto-complete', () => (
        <Input name="input" autoComplete />
      ))
      .add('with center align', () => (
        <Input name="input" align="center" />
      ))
      .add('with clear button', () => (
        <StateContainer value="Text">
          <Input name="input" clearable />
        </StateContainer>
      ));
  });
};
