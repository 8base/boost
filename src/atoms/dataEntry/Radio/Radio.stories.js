// @flow

import React, { Component } from 'react';

class RadioState extends Component<*, Object> {
  state = {
    value: 2,
  }

  changeValue = (value: number) => this.setState({ value })

  render() {
    return this.props.children({ value: this.state.value, changeValue: this.changeValue });
  }
}

export default (asStory: *) => {
  asStory('ATOMS/DATA ENTRY/Radio', module, (story, { Radio }) => {
    story
      .add('with selected value', () => (
        <Radio.Item label="Radio" value={ 1 } selectedValue={ 1 } />
      ))
      .add('with secondary color', () => (
        <Radio.Item label="Radio" color="secondary" value={ 1 } />
      ))
      .add('with group', () => (
        <Radio.Group value={ 1 }>
          <Radio.Item label="Radio" color="primary" value={ 1 } />
          <Radio.Item label="Radio" color="primary" value={ 2 } />
          <Radio.Item label="Radio" color="primary" value={ 3 } />
        </Radio.Group>
      ))
      .add('with options', () => (
        <Radio.Group
          value={ 2 }
          options={ [
            { label: 'Radio 1', value: 1 },
            { label: 'Radio 2', value: 2 },
            { label: 'Radio 3', value: 3 },
          ] }
        />
      ))
      .add('with row direction', () => (
        <Radio.Group value={ 1 } direction="row">
          <Radio.Item label="Radio" color="primary" value={ 1 } />
          <Radio.Item label="Radio" color="primary" value={ 2 } />
          <Radio.Item label="Radio" color="primary" value={ 3 } />
        </Radio.Group>
      ))
      .add('with custom gap', () => (
        <Radio.Group value={ 1 } gap="xs">
          <Radio.Item label="Radio" color="primary" value={ 1 } />
          <Radio.Item label="Radio" color="primary" value={ 2 } />
          <Radio.Item label="Radio" color="primary" value={ 3 } />
        </Radio.Group>
      ))
      .add('with state', () => (
        <RadioState>
          {
            ({ value, changeValue }) => (
              <Radio.Group value={ value } onChange={ changeValue }>
                <Radio.Item label="Radio" color="primary" value={ 1 } />
                <Radio.Item label="Radio" color="primary" value={ 2 } />
                <Radio.Item label="Radio" color="primary" value={ 3 } />
              </Radio.Group>
            )
          }
        </RadioState>
      ))
      .add('with disabled', () => (
        <RadioState>
          {
            ({ value, changeValue }) => (
              <Radio.Group value={ value } onChange={ changeValue }>
                <Radio.Item label="Radio" color="primary" value={ 1 } />
                <Radio.Item label="Radio" disabled value={ 2 } />
                <Radio.Item label="Radio" color="primary" value={ 3 } />
              </Radio.Group>
            )
          }
        </RadioState>
      ));
  });
};
