// @flow

import React, { Component } from 'react';
import { Radio, Column, Row } from '../../';

class RadioState extends Component<*, Object> {
  state = {
    value: 2,
  }

  changeValue = (value: number) => this.setState({ value })

  render() {
    return this.props.children({ value: this.state.value, changeValue: this.changeValue });
  }
}

export default {
  title: 'Components/Radio',
  component: Radio,
};

export const common = () => (
  <Column>
    <Radio.Item label="Without selected" value={ 1 } selectedValue={ 2 } />
    <Radio.Item label="With selected" value={ 1 } selectedValue={ 1 } />
    <Radio.Item label="With disabled" disabled value={ 1 } selectedValue={ 1 } />
  </Column>
);

common.story = {
  name: 'common',
};

export const button = () => (
  <RadioState>
    { ({ value, changeValue }) => (
      <Radio.Group value={ value } onChange={ changeValue } direction="row" gap="none">
        <Radio.Button label="Radio" value={ 1 } />
        <Radio.Button label="Radio" value={ 2 } />
        <Radio.Button label="Radio" value={ 3 } />
      </Radio.Group>
    ) }
  </RadioState>
);

button.story = {
  name: 'button',
};

export const withCustomGap = () => (
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
);

withCustomGap.story = {
  name: 'with custom gap',
};

export const withGroup = () => (
  <Radio.Group value={ 1 }>
    <Radio.Item label="Radio" color="primary" value={ 1 } />
    <Radio.Item label="Radio" color="primary" value={ 2 } />
    <Radio.Item label="Radio" color="primary" value={ 3 } />
  </Radio.Group>
);

withGroup.story = {
  name: 'with group',
};

export const withOptions = () => (
  <Radio.Group
    value={ 2 }
    options={ [
      { label: 'Radio 1', value: 1 },
      { label: 'Radio 2', value: 2 },
      { label: 'Radio 3', value: 3 },
    ] }
  />
);

withOptions.story = {
  name: 'with options',
};

export const withRowDirection = () => (
  <Radio.Group value={ 1 } direction="row">
    <Radio.Item label="Radio" color="primary" value={ 1 } />
    <Radio.Item label="Radio" color="primary" value={ 2 } />
    <Radio.Item label="Radio" color="primary" value={ 3 } />
  </Radio.Group>
);

withRowDirection.story = {
  name: 'with row direction',
};

export const withState = () => (
  <RadioState>
    { ({ value, changeValue }) => (
      <Radio.Group value={ value } onChange={ changeValue }>
        <Radio.Item label="Radio" color="primary" value={ 1 } />
        <Radio.Item label="Radio" color="primary" value={ 2 } />
        <Radio.Item label="Radio" color="primary" value={ 3 } />
      </Radio.Group>
    ) }
  </RadioState>
);

withState.story = {
  name: 'with state',
};
