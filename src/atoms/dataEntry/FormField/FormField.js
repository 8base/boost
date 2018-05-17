// @flow

import React from 'react';

import { createStyledTag, createTheme } from 'utils';
import { Label } from 'atoms/typography/Label';
import type { InputType, MetaType } from '../formTypes';

type FormFieldProps = {
  children?: React$Node,
  label?: string,
  stretch?: boolean,
  input: InputType,
  meta: MetaType,
};

const name = 'formField';

const theme = createTheme(name, {
  modifiers: { },
  defaults: {},
});

const FormFieldTag = createStyledTag(name, props => ({
  position: 'relative',
  display: 'inline-flex',
  flexDirection: 'column',

  width: props.stretch ? '100%' : 'auto',
}));
FormFieldTag.displayName = 'FormFieldTag';

const ControlErrorWrapperTag = createStyledTag(name, {
  display: 'block',
  position: 'absolute',
  bottom: 0,
  height: 0,
  lineHeight: 1,
});

const ControlErrorTag = createStyledTag(name, props => ({
  height: '1.2rem',
  color: props.theme.COLORS.RED,
  lineHeight: 2,
}));

const FormField = ({
  meta,
  label,
  children,
  ...rest
  }: FormFieldProps) => {
  const { error, touched } = meta;
  const hasError = !!error && !!touched;
  const hasLabel = !!label;

  return (
    <FormFieldTag { ...rest } tagName="div">
      <If condition={ hasLabel }>
        <Label kind="secondary">{ label }</Label>
      </If>
      { children }
      <ControlErrorWrapperTag tagName="div">
        <ControlErrorTag hasError={ hasError } tagName="div">{ error }</ControlErrorTag>
      </ControlErrorWrapperTag>
    </FormFieldTag>
  );
};

export { FormField, theme };
