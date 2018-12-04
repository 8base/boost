// @flow

import React from 'react';
import { createStyledTag, createComponentTheme } from '../../../utils';

type FormSectionTitleProps = {|
  children?: React$Node,
  text?: string,
|}

const name = 'formSectionTitle';

const theme = createComponentTheme(name, {
  modifiers: {},
  defaults: {},
});

const FormSectionTitleTag = createStyledTag(name, {
  fontWeight: 600,
  fontSize: '1.2rem',
});

const FormSectionTitle = ({ children, text, ...rest }: FormSectionTitleProps) => (
  <FormSectionTitleTag { ...rest } tagName="span">{ children || text }</FormSectionTitleTag>
);

export { FormSectionTitle, theme };
