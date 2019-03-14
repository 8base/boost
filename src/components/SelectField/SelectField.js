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
};

class SelectField extends React.Component<SelectFieldProps> {
  collectFormFieldProps() {
    const { meta, input, stretch, label } = this.props;

    return { meta, input, stretch, label };
  }

  collectSelectProps() {
    const { input, meta, placeholder, options, multiple, stretch } = this.props;

    const hasError = formUtils.hasError(meta);

    return {
      ...this.props,
      name: input.name,
      value: input.value,
      hasError,
      placeholder,
      options,
      stretch,
      multiple,
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

