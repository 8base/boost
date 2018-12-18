// @flow

import React, { Component } from 'react';

class CheckboxState extends Component<*, Object> {
  state = {
    checked: false,
  }

  changeCheck = (checked: boolean) => this.setState({ checked })

  render() {
    return this.props.children({ checked: this.state.checked, changeCheck: this.changeCheck });
  }
}

export default (asStory: *) => {
  asStory('Components/Checkbox', module, (story, { Checkbox }) => {
    story
      .add('with check', () => (
        <Checkbox label="Checkbox" checked />
      ))
      .add('with error', () => (
        <Checkbox label="Checkbox" checked hasError />
      ))
      .add('with disabled', () => (
        <Checkbox label="Checkbox" checked disabled />
      ))
      .add('without label', () => (
        <Checkbox checked />
      ))
      .add('without secondary color', () => (
        <Checkbox color="secondary" label="Checkbox" checked />
      ))
      .add('with state', () => (
        <CheckboxState>
          {
            ({ checked, changeCheck }) => <Checkbox label="Checkbox" checked={ checked } onChange={ changeCheck } />
          }
        </CheckboxState>
      ));
  });
};
