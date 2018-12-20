// @flow

import React from 'react';
import { createStyledTag, createComponentTheme } from '../../utils';

type FormSectionTitleProps = {|
  children?: React$Node,
  text?: string,
|}

const name = 'formSectionTitle';

const theme = createComponentTheme(name, ({ SIZES }: *) => ({
  root: {
    fontWeight: 600,
    fontSize: SIZES.OVERLINE_1,
    lineHeight: SIZES.OVERLINE_1_LH,
  },
  modifiers: {},
  defaults: {},
}));

const FormSectionTitleTag = createStyledTag(name, {});

const FormSectionTitle = ({ children, text, ...rest }: FormSectionTitleProps) => (
  <FormSectionTitleTag { ...rest } tagName="span">{ children || text }</FormSectionTitleTag>
);

export { FormSectionTitle, theme };
