// @flow

import React from 'react';

import { FlexLayout } from '../../FlexLayout/FlexLayout';

type FormSectionProps = {
  direction?: 'column' | 'row',
  stretch?: boolean,
  children: React$Node,
};

const FormSection = ({ ...rest }: FormSectionProps) => {
  return (
    <FlexLayout { ...rest } />
  );
};

FormSection.defaultProps = {
  direction: 'column',
  stretch: true,
};

export { FormSection };

