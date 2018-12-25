// @flow

import React from 'react';
import { createComponentTheme, createStyledTag } from '../../utils';
import * as formUtils from '../../utils/forms';

import type { MetaType } from '../../types';

type FormFieldProps = {
  children?: React$Node,
  label?: string,
  stretch?: boolean,
  hideErrorLabel?: boolean,
  direction?: 'row' | 'column',
  meta?: MetaType,
};

const name = 'formField';

const themeLabel = createComponentTheme(`${name}Label`, ({ COLORS, SIZES }: *) => ({
  root: {
    fontSize: SIZES.OVERLINE_1,
    lineHeight: SIZES.OVERLINE_1_LH,
    color: COLORS.SECONDARY_TEXT_COLOR,
  },
}));

const themeError = createComponentTheme(`${name}Error`, ({ COLORS, SIZES }: *) => ({
  root: {
    fontSize: SIZES.OVERLINE_2,
    lineHeight: SIZES.OVERLINE_2_LH,
    color: COLORS.DANGER,
  },
}));

const theme = {
  ...themeLabel,
  ...themeError,
};

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
});


export const ControlErrorTag = createStyledTag(`${name}Error`, {
  position: 'relative',
  top: '-2px',
});
ControlErrorTag.displayName = 'ControlErrorTag';

const ControlLabelTag = createStyledTag(`${name}Label`, props => ({
  marginLeft: props.direction === 'row' ? '8px' : 0,
}));
ControlLabelTag.displayName = 'ControlLabelTag ';

const FormField = ({
  meta = {},
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

