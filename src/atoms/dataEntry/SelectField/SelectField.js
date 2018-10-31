import React from 'react';

import { createTheme } from '../../../utils';
import * as formUtils from '../../../utils/forms';
import { Select } from '../Select';
import { FormField } from '../Form/FormField';

type SelectFieldProps = {|
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
|};

const name = 'selectField';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

class SelectField extends React.Component<SelectFieldProps> {
  onChange = (selectedOption) => {
    const value = Array.isArray(selectedOption)
      ? selectedOption.map(({ value }) => value)
      : (selectedOption.value || null);

    this.props.input.onChange(value);
  };

  collectFormFieldProps() {
    const { meta, input, stretch, label } = this.props;

    return { meta, input, stretch, label };
  }

  collectSelectProps() {
    const { input, meta, placeholder, options, stretch } = this.props;

    const hasError = formUtils.hasError(meta);

    const value = (
      Array.isArray(input.value)
        ? options.filter((option) => input.value.indexOf(option.value) !== -1)
        : options.find((option) => option.value === input.value)
    ) || null;

    return {
      ...this.props,
      name: input.name,
      value,
      hasError,
      placeholder,
      options,
      stretch,
      onChange: this.onChange,
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

export { SelectField, theme };

