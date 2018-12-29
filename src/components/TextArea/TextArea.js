// @flow

import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';

type TextAreaProps = {|
  cols?: number,
  name?: string,
  onChange?: (value: string, event?: SyntheticInputEvent<HTMLInputElement>) => void,
  placeholder?: string,
  rows?: number,
  value?: string,
  stretch?: boolean,
|};

const name = 'textArea';

const theme = createComponentTheme(name, ({ COLORS, SIZES }: *) => ({
  root: {
    border: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
    borderRadius: SIZES.MAIN_BORDER_RADIUS,
    fontSize: SIZES.BODY_TEXT,
    lineHeight: SIZES.BODY_TEXT_LH,
    color: COLORS.DARK_GRAY1,
    fontWeight: 400,
    padding: '8px',

    '&::placeholder': {
      color: COLORS.PLACEHOLDER_COLOR,
    },
  },
  modifiers: {
    stretch: {
      height: '100%',
      width: '100%',
    },
  },
}));

const StyledTag = createStyledTag(name, {
  outline: 'none',
});

class TextArea extends React.Component<TextAreaProps> {

  onChange = (event: *) => {
    const { onChange } = this.props;

    onChange && onChange(event.target.value, event);
  }

  render() {
    const { onChange, ...rest } = this.props;

    return <StyledTag { ...rest } onChange={ this.onChange }tagName="textarea" />;
  }
}

export { TextArea, theme };
