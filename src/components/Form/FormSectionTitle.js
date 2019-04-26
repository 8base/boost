// @flow

import React from 'react';
import { createThemeTag } from '../../theme/createThemeTag';


type FormSectionTitleProps = {
  children?: React$Node,
  text?: string,
}

const name = 'formSectionTitle';

const [FormSectionTitleTag, theme] = createThemeTag(name, ({ COLORS, SIZES }: *) => ({
  root: {
    fontWeight: 600,
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: SIZES.OVERLINE_1,
    lineHeight: SIZES.OVERLINE_1_LH,
  },
  modifiers: {},
  defaults: {},
}));

const FormSectionTitle = ({ children, text, ...rest }: FormSectionTitleProps) => (
  <FormSectionTitleTag { ...rest } tagName="span">{ children || text }</FormSectionTitleTag>
);

export { FormSectionTitle, theme };
