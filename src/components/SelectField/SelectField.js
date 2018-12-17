import React from 'react';

import { createComponentTheme } from '../../utils';
import * as formUtils from '../../utils/forms';
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
  /** custom value component */
  valueComponent ?: React$Node,
|};

const name = 'selectField';

const theme = createComponentTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

class SelectField extends React.Component<SelectFieldProps> {
  onChange = (selectedOption) => {
    let value = null;

    if (Array.isArray(selectedOption)) {
      value = selectedOption.map(({ value }) => value);
    } else if (selectedOption) {
      ({ value } = selectedOption);
    }

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

