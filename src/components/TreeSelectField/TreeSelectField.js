// @flow

import React from 'react';

import * as formUtils from '../../utils/forms';
import { TreeSelect } from '../TreeSelect';
import { FormField } from '../Form/FormField';
import type { InputType, MetaType } from '../../types';

type TreeSelectFieldProps = {
  /** array of select options option */
  options: Object | Object[],
  /** placeholder */
  placeholder?: string,
  /** field label */
  label?: string,
  /** when true then stretch to the maximal width */
  stretch?: boolean,
  /** form input object */
  input: InputType,
  /** form meta object */
  meta?: MetaType,
  /** show error only for touched fields */
  showErrorOnTouched?: boolean,
};

class TreeSelectField extends React.Component<TreeSelectFieldProps> {
  static defaultProps = {
    showErrorOnTouched: true,
  };

  onChange = (currenNode: Object, selectedNodes: Object[]) => {
    const { input } = this.props;
    const value = selectedNodes.map(({ value }) => (value));

    input.onChange && input.onChange(value);
  };

  collectFormFieldProps() {
    const { meta, input, stretch, label, showErrorOnTouched } = this.props;

    return { meta, input, stretch, label, showErrorOnTouched };
  }

  collectSelectProps() {
    const { input, meta, placeholder, options, stretch, showErrorOnTouched } = this.props;

    const hasError = formUtils.hasError(meta, showErrorOnTouched);

    return {
      ...this.props,
      name: input.name,
      value: input.value,
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
        <TreeSelect { ...collectedSelectProps } />
      </FormField>
    );
  }
}

export { TreeSelectField };

