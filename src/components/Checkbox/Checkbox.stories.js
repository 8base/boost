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
  asStory('Components/Checkbox', module, (story, { Checkbox, Column }) => {
    story
      .add('commmon', () => (
        <Column>
          <Checkbox checked />
          <Checkbox label="Without Check" />
          <Checkbox label="With Check" checked />
          <Checkbox label="With error" checked hasError />
          <Checkbox label="With disabled" checked disabled />
        </Column>
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
