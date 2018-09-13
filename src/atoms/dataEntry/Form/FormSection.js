// @flow

import React from 'react';

import { FlexLayout, type FlexLayoutCommonProps } from '../../FlexLayout/FlexLayout';

type FormSectionProps = {
  direction?: 'column' | 'row',
  stretch?: boolean,
  children: React$Node,
} & FlexLayoutCommonProps;

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

