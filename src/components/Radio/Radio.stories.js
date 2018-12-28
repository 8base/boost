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
  asStory('Components/Radio', module, (story, { Radio, Column, Row }) => {
    story
      .add('common', () => (
        <Column>
          <Radio.Item label="Without selected" value={ 1 } selectedValue={ 2 } />
          <Radio.Item label="With selected" value={ 1 } selectedValue={ 1 } />
          <Radio.Item label="With disabled" disabled value={ 1 } selectedValue={ 1 } />
        </Column>
      ))
      .add('with custom gap', () => (
        <Row gap="md">
          <Radio.Group value={ 1 } gap="none">
            <Radio.Item label="Radio" color="primary" value={ 1 } />
            <Radio.Item label="Radio" color="primary" value={ 2 } />
            <Radio.Item label="Radio" color="primary" value={ 3 } />
          </Radio.Group>
          <Radio.Group value={ 1 } gap="xs">
            <Radio.Item label="Radio" color="primary" value={ 1 } />
            <Radio.Item label="Radio" color="primary" value={ 2 } />
            <Radio.Item label="Radio" color="primary" value={ 3 } />
          </Radio.Group>
          <Radio.Group value={ 1 } gap="sm">
            <Radio.Item label="Radio" color="primary" value={ 1 } />
            <Radio.Item label="Radio" color="primary" value={ 2 } />
            <Radio.Item label="Radio" color="primary" value={ 3 } />
          </Radio.Group>
          <Radio.Group value={ 1 } gap="md">
            <Radio.Item label="Radio" color="primary" value={ 1 } />
            <Radio.Item label="Radio" color="primary" value={ 2 } />
            <Radio.Item label="Radio" color="primary" value={ 3 } />
          </Radio.Group>
          <Radio.Group value={ 1 } gap="lg">
            <Radio.Item label="Radio" color="primary" value={ 1 } />
            <Radio.Item label="Radio" color="primary" value={ 2 } />
            <Radio.Item label="Radio" color="primary" value={ 3 } />
          </Radio.Group>
          <Radio.Group value={ 1 } gap="xl">
            <Radio.Item label="Radio" color="primary" value={ 1 } />
            <Radio.Item label="Radio" color="primary" value={ 2 } />
            <Radio.Item label="Radio" color="primary" value={ 3 } />
          </Radio.Group>
        </Row>
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
      ));
  });
};
