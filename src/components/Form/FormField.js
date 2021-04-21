// @flow

import React from 'react';
import { createThemeTag } from '../../theme/createThemeTag';

import * as formUtils from '../../utils/forms';

import type { MetaType } from '../../types';

type FormFieldProps = {
  children?: React$Node,
  label?: string,
  note?: string,
  stretch?: boolean,
  hideErrorLabel?: boolean,
  direction?: 'row' | 'column',
  meta?: MetaType,
  showErrorOnTouched?: boolean,
};

const name = 'formField';


const [FormFieldTag, themeField] = createThemeTag(name, {
  root: props => ({
    position: 'relative',
    display: 'inline-flex',
    width: props.stretch ? '100%' : 'auto',
  }),
});

const [FormLabel, themeLabel] = createThemeTag(`${name}Label`, ({ FONTS }: *) => ({
  root: props => ({
    ...FONTS.OVERLINE_1,
    marginLeft: props.direction === 'row' ? '8px' : 0,
    marginBottom: '4px',
  }),
}));

const [ControlErrorTag, themeError] = createThemeTag(`${name}Error`, ({ COLORS, FONTS }: *) => ({
  root: {
    position: 'relative',

    ...FONTS.SMALL_1,
    color: COLORS.DANGER,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'block',
    maxWidth: '100%',
  },
}));

const [FormFieldNoteTag, themeNote] = createThemeTag(`${name}Note`, ({ FONTS }: *) => ({
  root: {
    position: 'relative',

    ...FONTS.SMALL_1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'block',
    maxWidth: '100%',
    marginTop: 4,
  },
}));

const [FormFieldDirectionTag, themeDirection] = createThemeTag(`${name}Direction`, {
  root: props => ({
    display: 'inline-flex',
    flexDirection: props.direction === 'row' ? 'row-reverse' : 'column',
    alignItems: props.direction === 'row' ? 'center' : 'flex-start',
    justifyContent: props.direction === 'row' ? 'flex-end' : 'flex-start',
    width: props.stretch ? '100%' : 'auto',
  }),
});

const [ControlErrorWrapperTag, themeErrorWrapper] = createThemeTag(`${name}ErrorWrapper`, {
  root: {
    display: 'block',
    position: 'absolute',
    bottom: 0,
    height: 0,
    maxWidth: '100%',
  },
});


const theme = {
  ...themeErrorWrapper,
  ...themeDirection,
  ...themeLabel,
  ...themeError,
  ...themeField,
  ...themeNote,
};


const FormField = ({
  meta = {},
  label,
  note,
  children,
  hideErrorLabel,
  showErrorOnTouched,
  ...rest
}: FormFieldProps) => {
  const hasError = formUtils.hasError(meta, showErrorOnTouched);
  let error: any = formUtils.getError(meta, showErrorOnTouched);

  const hasLabel = !!label;

  if (typeof error === 'object') {
    error = Object.keys(error).map(key => error[key]);
  }

  return (
    <FormFieldTag { ...rest } tagName="div">
      <FormFieldDirectionTag modifiers={ rest } tagName="div">
        <If condition={ hasLabel }>
          <FormLabel modifiers={ rest } tagName="div">
            { label }
          </FormLabel>
        </If>
        { children }
        <If condition={ !!note }>
          <FormFieldNoteTag modifiers={ rest } title={ note }>
            { note }
          </FormFieldNoteTag>
        </If>
      </FormFieldDirectionTag>
      <If condition={ hasError && !hideErrorLabel }>
        <ControlErrorWrapperTag modifiers={ rest } tagName="div">
          <ControlErrorTag modifiers={ rest } role="alert" tagName="span" title={ error.toString() }>
            { error.toString() }
          </ControlErrorTag>
        </ControlErrorWrapperTag>
      </If>
    </FormFieldTag>
  );
};

FormField.defaultProps = {
  hideErrorLabel: false,
  stretch: true,
  direction: 'column',
  showErrorOnTouched: true,
};

export { FormField, theme, FormLabel, ControlErrorTag };

