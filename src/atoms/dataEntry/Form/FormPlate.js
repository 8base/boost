import React from 'react';

import { createStyledTag, createTheme } from 'utils';
import { FlexLayout } from '../../FlexLayout/FlexLayout';

type FormPlateProps = {|
  /** callback called on form submit */
  onSubmit?: Function,
  /** when true then stretch form by the parent */
  stretch?: boolean,
  /** form content */
  children?: React$Node,
|}

const name = 'formPlate';

const theme = createTheme(name, {
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
      <FlexLayout { ...rest }>{ children }</FlexLayout>
    </FormStyledTag>
  );
}

FormPlate.defaultProps = {
  ...theme[name].defaults,
  component: 'form',
  direction: 'column',
};

export { FormPlate, theme };
