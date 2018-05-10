import React from 'react';
import { Form } from 'react-final-form';

import { createStyledTag, createTheme } from '../../utils';

type FormPlateProps = {|
  children?: Function,
|};

const name = 'formPlate';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, {
  flex: 1,
  height: '100%',
});

function FormPlate({
  children,
  onSubmit,
  initialValues,
  ...rest
  }: FormPlateProps) {
  return (<Form onSubmit={ onSubmit } initialValues={ initialValues } render={ ({ handleSubmit, reset, submitting, pristine, values }) => (
    <StyledTag tagName="form" onSubmit={ handleSubmit } { ...rest }>{ children({ reset, submitting, pristine, values }) }</StyledTag>
  ) } />);
}

export { FormPlate, theme };
