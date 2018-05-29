// @flow

import React, { Component } from 'react';

import { createStyledTag, createTheme } from 'utils';

type ButtonProps = {|
  onClick?: (MouseEvent) => void,
  text?: string,
  stretch?: boolean,
  loading?: boolean,
  children?: React$Node,
  type?: 'submit' | 'button',
  kind?: 'primary' | 'secondary' | 'neutral',
  size?: 'md',
|};

const name = 'buttonGroup';

const StyledTag = createStyledTag(name, {

});

class Button extends Component<ButtonProps> {
  render() {
    const { text, children, type, onClick, loading, ...rest } = this.props;

    return (
      <StyledTag
        { ...rest }
        tagName="button"
        type={ type }
        loading={ loading }
        onClick={ onClick }
      >
        { loading ? 'Loading...' : (children || text) }
      </StyledTag>
    );
  }
}

export { Button, theme };
