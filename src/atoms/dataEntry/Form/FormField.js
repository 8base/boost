// @flow

import React from 'react';

import { createStyledTag, createComponentTheme, getThemeSizes } from '../../../utils';
import * as formUtils from '../../../utils/forms';
import type { MetaType } from '../formTypes';

type FormFieldProps = {
  children?: React$Node,
  label?: string,
  stretch?: boolean,
  hideErrorLabel?: boolean,
  direction?: 'row' | 'column',
  meta: MetaType,
};

const name = 'formField';

const theme = createComponentTheme(name, {
  modifiers: {},
  defaults: {},
});

const FormFieldTag = createStyledTag(name, props => ({
  position: 'relative',
  display: 'inline-flex',
  width: props.stretch ? '100%' : 'auto',
}));

const FormFieldDirectionTag = createStyledTag(`${name}Direction`, props => ({
  display: 'inline-flex',
  flexDirection: props.direction === 'row' ? 'row-reverse' : 'column',
  alignItems: props.direction === 'row' ? 'center' : 'flex-start',
  justifyContent: props.direction === 'row' ? 'flex-end' : 'flex-start',
  width: props.stretch ? '100%' : 'auto',
}));

const ControlErrorWrapperTag = createStyledTag(`${name}ErrorWrapper`, {
  display: 'block',
  position: 'absolute',
  bottom: 0,
  height: 0,
  lineHeight: 1,
});

export const ControlErrorTag = createStyledTag(`${name}Error`, props => ({
  fontSize: '1rem',
  color: props.theme.COLORS.DANGER,
  lineHeight: 1,
  position: 'relative',
  top: '-2px',
}));

const ControlLabelTag = createStyledTag(`${name}Label`, props => ({
  marginLeft: props.direction === 'row' ? '1rem' : 0,
  fontSize: props.direction === 'row'
    ? getThemeSizes(props).MAIN_FONT_SIZE
    : getThemeSizes(props).SMALL_FONT_SIZE,
  color: props.theme.COLORS.SECONDARY_TEXT_COLOR,
  lineHeight: 2,
}));

const FormField = ({
  meta,
  label,
  children,
  direction,
  stretch,
  hideErrorLabel,
  ...rest
  }: FormFieldProps) => {
  const hasError = formUtils.hasError(meta);
  const error = formUtils.getError(meta);

  const hasLabel = !!label;

  return (
    <FormFieldTag { ...rest } stretch={ stretch } tagName="div">
      <FormFieldDirectionTag direction={ direction } stretch={ stretch } tagName="div">
        <If condition={ hasLabel }>
          <ControlLabelTag direction={ direction } tagName="div">
            { label }
          </ControlLabelTag>
        </If>
        { children }
      </FormFieldDirectionTag>
      <If condition={ hasError && !hideErrorLabel }>
        <ControlErrorWrapperTag tagName="div">
          <ControlErrorTag role="alert" tagName="span">{ error }</ControlErrorTag>
        </ControlErrorWrapperTag>
      </If>
    </FormFieldTag>
  );
};

FormField.defaultProps = {
  hideErrorLabel: false,
  stretch: true,
  direction: 'column',
};

export { FormField, theme };
