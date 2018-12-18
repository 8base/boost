// @flow

import React from 'react';

import { FlexLayout } from '../FlexLayout';

type FormSectionProps = {
  children: React$Node,
};

const FormSection = ({ children, ...rest }: FormSectionProps) => (
  <FlexLayout
    { ...rest }
    stretch
    direction="column"
  >
    { children }
  </FlexLayout>
);

FormSection.defaultProps = {
  gap: 'sm',
};

export { FormSection };

