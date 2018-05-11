import React from 'react';
import { Field } from 'react-final-form';

import { createStyledTag, createTheme } from '../../utils';

type FormFieldProps = {|
  children?: React.Node,
|};

const name = 'formField';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, {});

function FormField({
  name,
  component,
  ...rest
  }: FormFieldProps) {
  return (
    <Field name={ name }>
      { ({ input }) => (
        <StyledTag { ...rest } { ...input } tagName={ component } />
      ) }
    </Field>
  );
}

export { FormField, theme };
