// @flow

import React from 'react';

import { createThemeTag } from '../../theme/createThemeTag';

import { FlexLayout } from '../FlexLayout';

import { FormField, theme as formFieldTheme } from './FormField';
import { FormSection } from './FormSection';
import { FormSectionBody } from './FormSectionBody';
import { FormError, theme as formErrorTheme } from './FormError';
import { FormSectionTitle, theme as formSectionTitleTheme } from './FormSectionTitle';


type FormPlateProps = {
  /** callback called on form submit */
  onSubmit?: Function,
  /** when true then stretch form by the parent */
  stretch?: boolean,
  /** form content */
  children?: React$Node,
  /** component to use instead of form tag */
  component?: React$Node,
  /** custom class name */
  className?: string,
};

const name = 'form';

const [FormTag, formTheme] = createThemeTag(name, {
  root: {
    flex: 1,
  },
  modifiers: {
    stretch: {
      height: '100%',
      width: '100%',
    },
  },
});

const theme = {
  ...formTheme,
  ...formFieldTheme,
  ...formSectionTitleTheme,
  ...formErrorTheme,
};

const Form = ({
  children,
  onSubmit,
  component,
  className,
  ...rest
  }: FormPlateProps) => {
  return (
    <FormTag
      tagName={ component }
      onSubmit={ onSubmit }
      className={ className }
    >
      <FlexLayout { ...rest } >
        { children }
      </FlexLayout>
    </FormTag>
  );
};

Form.defaultProps = {
  stretch: false,
  component: 'form',
  direction: 'column',
  gap: 'md',
  alignItems: 'stretch',
};


Form.displayName = 'Form';

Form.Field = FormField;
Form.Section = FormSection;
Form.SectionBody = FormSectionBody;
Form.SectionTitle = FormSectionTitle;
Form.Error = FormError;

export { Form, theme };
