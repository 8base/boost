// @flow

import React from 'react';
import { createThemeTag } from '../../theme/createThemeTag';


type FormSectionTitleProps = {
  children?: React$Node,
  text?: string,
}

const name = 'formSectionTitle';

const [FormSectionTitleTag, theme] = createThemeTag(name, ({ COLORS, SIZES, FONTS }: *) => ({
  root: {
    ...FONTS.OVERLINE_1,
  },
  modifiers: {},
  defaults: {},
}));

const FormSectionTitle = ({ children, text, ...rest }: FormSectionTitleProps) => (
  <FormSectionTitleTag { ...rest } tagName="span">{ children || text }</FormSectionTitleTag>
);

export { FormSectionTitle, theme };
