// @flow

import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';
import { FlexLayout } from '../FlexLayout';

type FormPlateProps = {
  /** callback called on form submit */
  onSubmit?: Function,
  /** when true then stretch form by the parent */
  stretch?: boolean,
  /** form content */
  children?: React$Node,
  /** component to use instead of form tag */
  component?: React$Node,
};

const name = 'formPlate';

const theme = createComponentTheme(name, {
  modifiers: {
    stretch: {
      height: '100%',
      width: '100%',
    },
  },
  defaults: {
    stretch: false,
  },
});

const FormStyledTag = createStyledTag(name, {
  flex: 1,
});

function FormPlate({
  children,
  onSubmit,
  component,
  ...rest
  }: FormPlateProps) {
  return (
    <FormStyledTag
      tagName={ component }
      onSubmit={ onSubmit }
    >
      <FlexLayout
        { ...rest }
      >
        { children }
      </FlexLayout>
    </FormStyledTag>
  );
}

FormPlate.defaultProps = {
  ...theme[name].defaults,
  component: 'form',
  direction: 'column',
  gap: 'md',
  alignItems: 'stretch',

};

export { FormPlate, theme };
