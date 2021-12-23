import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Checkbox, Column } from '../../';


const Container = styled('div')`
  max-width: 100px;
`;

class CheckboxState extends Component<*, Object> {
  state = {
    checked: false,
  }

  changeCheck = (checked: boolean) => this.setState({ checked })

  render() {
    return this.props.children({ checked: this.state.checked, changeCheck: this.changeCheck });
  }
}

class CheckboxInderteminateState extends Component<*, Object> {
  state = {
    options: [{ label: 'Orange', checked: true }, { label: 'Mango', checked: false }],
    indeterminate: true,
    checked: false,
  }

  setAllOptionsTo(checked) {
    this.setState((prevState) => ({
      ...prevState,
      options: prevState.options.map(option => ({ ...option, checked })),
    }));
  }

  onChange = () => {
    if (this.state.indeterminate || this.state.checked) {
      this.setState((prevState) => ({ ...prevState, indeterminate: false, checked: false }));
      this.setAllOptionsTo(false);
    } else {
      this.setState((prevState) => ({ ...prevState, indeterminate: false, checked: true }));
      this.setAllOptionsTo(true);
    }
  }

  onOptionChange = (option) => {
    this.setState((prevState) => {
      const newOptions = prevState.options.map(item => option === item ? { ...item, checked: !item.checked } : item);
      const isAllChecked = newOptions.every(item => item.checked);
      const isAllUnchecked = newOptions.every(item => !item.checked);

      return ({
        ...prevState,
        indeterminate: !isAllChecked && !isAllUnchecked,
        checked: isAllChecked,
        options: newOptions,
      });
    });
  }

  render() {
    return this.props.children({ state: this.state, onChange: this.onChange, onOptionChange: this.onOptionChange });
  }
}


export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export const common = () => (
  <Column>
    <Checkbox checked />
    <Checkbox label="Without Check" />
    <Checkbox label="With Check" checked />
    <Checkbox label="With error" checked hasError />
    <Checkbox label="With disabled" checked disabled />
    <Container>
      <Checkbox label="With overflow" nowrap checked />
    </Container>
    <Checkbox label="With indeterminate" indeterminate />
  </Column>
);

common.story = {
  name: 'common',
};

export const withState = () => (
  <CheckboxState>
    { ({ checked, changeCheck }) => (
      <Checkbox label="Checkbox" checked={ checked } onChange={ changeCheck } />
    ) }
  </CheckboxState>
);

withState.story = {
  name: 'with state',
};

export const withIndeterminate = () => (
  <CheckboxInderteminateState>
    { ({ state, onChange, onOptionChange }) => (
      <Column>
        <Checkbox
          label="Fruits"
          onChange={ onChange }
          indeterminate={ state.indeterminate }
          checked={ state.checked }
        />

        { state.options.map(option => (
          <Checkbox
            key={ option.label }
            label={ option.label }
            checked={ option.checked }
            onChange={ () => onOptionChange(option) }
          />
        )) }
      </Column>
    ) }
  </CheckboxInderteminateState>
);

withIndeterminate.story = {
  name: 'with indeterminate',
};
