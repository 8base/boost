// @flow

import React from 'react';

import { createStyledTag, createComponentTheme } from '../../../utils';
import { Row } from '../../FlexLayout/FlexLayout';
import { Text } from '../../typography/Text';
import { Icon } from '../../typography/Icon';

type FormErrorProps = {
  /** form error */
  error?: ?string,
  /** form error */
  children?: ?React$Node,
};

const name = 'formError';

const theme = createComponentTheme(name, ({ COLORS, SIZES }: *): * => ({
  root: {
    border: `1px solid ${COLORS.DANGER}`,
    borderRadius: SIZES.MAIN_BORDER_RADIUS,
    padding: '1.6rem',
  },
  modifiers: {},
  defaults: {},
}));

const FormErrorPlateTag = createStyledTag(name, {});

function FormError({ error, children, ...rest }: FormErrorProps) {
  const errorText = error || children;

  return errorText
    ? (
      <FormErrorPlateTag tagName="div" { ...rest } >
        <Row gap="md">
          <Icon name="Alert" color="DANGER" size="xl" />
          <Text color="GRAY1" lineHeight="lg">{ errorText }</Text>
        </Row>
      </FormErrorPlateTag>
    )
    : null;
}

FormError.defaultProps = {
  ...theme[name].defaults,
  component: 'form',
  direction: 'column',
};

export { FormError, theme };
