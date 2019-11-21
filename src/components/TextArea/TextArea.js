// @flow

import React from 'react';

import { TextAreaTag } from './TextArea.theme';

type TextAreaProps = {
  cols?: number,
  name?: string,
  onChange?: (value: string, event?: SyntheticInputEvent<HTMLInputElement>) => void,
  placeholder?: string,
  rows?: number,
  value?: string,
  stretch?: boolean,
  hasError?: boolean,
};

class TextArea extends React.Component<TextAreaProps> {

  onChange = (event: *) => {
    const { onChange } = this.props;

    onChange && onChange(event.target.value, event);
  }

  render() {
    const { onChange, hasError, ...rest } = this.props;

    return <TextAreaTag { ...rest } onChange={ this.onChange } tagName="textarea" />;
  }
}

export { TextArea };
