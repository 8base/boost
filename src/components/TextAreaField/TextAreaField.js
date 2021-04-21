// @flow

import React from 'react';

import { TextArea } from '../TextArea';
import { FormField } from '../Form/FormField';
import * as formUtils from '../../utils/forms';

type TextAreaFieldProps = {
  /** number of textarea columns */
  cols?: number,
  /** number of textarea rows */
  rows?: number,
  /** placeholder */
  placeholder?: string,
  /** field label */
  label?: string,
  /** when true then stretch to the maximal width */
  stretch?: boolean,
  /** form input object */
  input: Object,
  /** form meta object */
  meta?: Object,
  /** show error only for touched fields */
  showErrorOnTouched?: boolean,
};


function TextAreaField({
  cols,
  input,
  label,
  meta,
  placeholder,
  rows,
  stretch,
  showErrorOnTouched,
  ...rest
}: TextAreaFieldProps) {
  const { name, value, onChange } = input;

  const hasError = formUtils.hasError(meta, showErrorOnTouched);

  return (
    <FormField label={ label } stretch={ stretch } input={ input } meta={ meta } showErrorOnTouched={ showErrorOnTouched }>
      <TextArea
        { ...rest }
        hasError={ hasError }
        name={ name }
        onChange={ onChange }
        placeholder={ placeholder }
        value={ value }
        cols={ cols }
        rows={ rows }
        stretch={ stretch }
      />
    </FormField>
  );
}

TextAreaField.defaultProps = {
  showErrorOnTouched: true,
};

export { TextAreaField };
