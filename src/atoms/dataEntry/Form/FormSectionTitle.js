// @flow

import React from 'react';
import { createStyledTag, createComponentTheme } from '../../../utils';

type FormSectionTitleProps = {|
  children?: React$Node,
  text?: string,
|}

const name = 'formSectionTitle';

const theme = createComponentTheme(name, (colors: *, sizes: *) => ({
  root: {
    fontWeight: 600,
    fontSize: sizes.SMALL_FONT_SIZE,
  },
  modifiers: {},
  defaults: {},
}));

const FormSectionTitleTag = createStyledTag(name, {});

const FormSectionTitle = ({ children, text, ...rest }: FormSectionTitleProps) => (
  <FormSectionTitleTag { ...rest } tagName="span">{ children || text }</FormSectionTitleTag>
);

export { FormSectionTitle, theme };
