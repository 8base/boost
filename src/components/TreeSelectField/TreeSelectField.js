// @flow

import React from 'react';

import * as formUtils from '../../utils/forms';
import { TreeSelect } from '../TreeSelect';
import { FormField } from '../Form/FormField';
import type { InputType, MetaType } from '../../types';

type TreeSelectFieldProps = {
  /** array of select data option */
  data: Object,
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
};

class TreeSelectField extends React.Component<TreeSelectFieldProps> {

  onChange = (currenNode: Object, selectedNodes: Object[]) => {
    const { input } = this.props;
    const value = selectedNodes.map(({ value, label }) => ({ value, label }));

    input.onChange && input.onChange(value);
  };

  collectFormFieldProps() {
    const { meta, input, stretch, label } = this.props;

    return { meta, input, stretch, label };
  }

  collectSelectProps() {
    const { input, meta, placeholder, data, stretch } = this.props;

    const hasError = formUtils.hasError(meta);

    return {
      ...this.props,
      name: input.name,
      value: input.value,
      hasError,
      placeholder,
      data,
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

