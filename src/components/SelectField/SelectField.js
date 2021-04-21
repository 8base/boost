import React from 'react';

import * as formUtils from '../../utils/forms';
import { Select } from '../Select';
import { FormField } from '../Form/FormField';

type SelectFieldProps = {
  /** array of select options */
  options: Array<Object>,
  /** placeholder */
  placeholder?: string,
  /** field label */
  label?: string,
  /** when true then stretch to the maximal width */
  stretch?: boolean,
  /** form input object */
  input?: InputType,
  /** form meta object */
  meta?: MetaType,
  /** custom value component */
  valueComponent ?: React$Node,
  /** controlled search value */
  inputValue?: string,
  /** callback to control search value */
  onInputChange?: (value: string, event?: SyntheticInputEvent<HTMLInputElement>) => void,
  /** show error only for touched fields */
  showErrorOnTouched?: boolean,
};

class SelectField extends React.Component<SelectFieldProps> {
  static defaultProps = {
    showErrorOnTouched: true,
  };

  collectFormFieldProps() {
    const { meta, input, stretch, label, showErrorOnTouched } = this.props;

    return { meta, input, stretch, label, showErrorOnTouched };
  }

  collectSelectProps() {
    const {
      input = {}, meta, placeholder, options, multiple, isMulti, creatable, stretch, filterOption, getOptionValue, getOptionLabel, showErrorOnTouched,
    } = this.props;

    const hasError = formUtils.hasError(meta, showErrorOnTouched);

    return {
      ...this.props,
      name: input.name,
      value: input.value,
      hasError,
      placeholder,
      options,
      stretch,
      multiple,
      isMulti,
      creatable,
      filterOption,
      getOptionValue,
      getOptionLabel,
      onChange: input.onChange,
    };
  }

  render() {
    const collectedFormFieldProps = this.collectFormFieldProps();
    const collectedSelectProps = this.collectSelectProps();

    return (
      <FormField { ...collectedFormFieldProps }>
        <Select { ...collectedSelectProps } />
      </FormField>
    );
  }
}

export { SelectField };
