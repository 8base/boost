// @flow

import React from 'react';
import { createThemeTag } from '../../theme/createThemeTag';


type FormSectionTitleProps = {
  children?: React$Node,
  text?: string,
}

const name = 'formSectionTitle';

const [FormSectionTitleTag, theme] = createThemeTag(name, ({ FONTS }: *) => ({
  root: {
    ...FONTS.H5,
    letterSpacing: '0.5px',
  },
  modifiers: {},
  defaults: {},
}));

const FormSectionTitle = ({ children, text, ...rest }: FormSectionTitleProps) => (
  <FormSectionTitleTag { ...rest } tagName="h5">{ children || text }</FormSectionTitleTag>
);

export { FormSectionTitle, theme };
