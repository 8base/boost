// @flow

import React from 'react';

import { createThemeTag } from '../../theme/createThemeTag';

import { Row } from '../FlexLayout';
import { Text } from '../Text';
import { Icon } from '../Icon';

type FormErrorProps = {
  /** form error */
  error?: ?string,
  /** form error */
  children?: ?React$Node,
};

const name = 'formError';

const [FormErrorPlateTag, theme] = createThemeTag(name, ({ COLORS, SIZES }: *): * => ({
  root: {
    border: `1px solid ${COLORS.DANGER}`,
    borderRadius: SIZES.MAIN_BORDER_RADIUS,
    padding: '16px',
  },
  modifiers: {},
}));


function FormError({ error, children, ...rest }: FormErrorProps) {
  const errorText = error || children;

  return errorText
    ? (
      <FormErrorPlateTag tagName="div" { ...rest } >
        <Row gap="md">
          <Icon name="Alert" color="DANGER" />
          <Text color="SECONDARY_TEXT_COLOR">{ errorText }</Text>
        </Row>
      </FormErrorPlateTag>
    )
    : null;
}

FormError.defaultProps = {
  component: 'form',
  direction: 'column',
};

export { FormError, theme };
