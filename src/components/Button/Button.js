// @flow

import React, { Component } from 'react';

import { ButtonTag } from './Button.theme';

export type ButtonProps = {
  /** callback to handle click */
  onClick?: Function,
  /** button content */
  children?: React$Node,
  /** then true when stretch to the parent width */
  stretch?: boolean,
  /** then true when show loader */
  loading?: boolean,
 /** then true when disable button */
  disabled?: boolean,
 /** then button is squared */
  squared?: boolean,
 /** then button is rounded */
  rounded?: boolean,
  /** possible button types */
  type?: 'submit' | 'button' | 'reset',
  /** possible button colors */
  color?: 'primary' | 'neutral' | 'danger',
  /** the type of button */
  variant?: 'outlined' | 'raised',
  /** posible sizes */
  size?: 'sm' | 'md' | 'lg',
  /** possible to reassign the button tag */
  tagName?: any,
};

class Button extends Component<ButtonProps> {
  static defaultProps = {
    variant: 'raised',
    color: 'primary',
    size: 'md',
    tagName: 'button',
  };

  onClick = (event: *) => {
    const { onClick, disabled, loading } = this.props;

    !disabled && !loading && onClick && onClick(event);
  }

  render() {
    const { children, tagName, loading, ...rest } = this.props;

    return (
      <ButtonTag
        { ...rest }
        tagName={ tagName }
        loading={ loading }
        onClick={ this.onClick }
        aria-busy={ Boolean(loading).toString() }
      >
        { React.Children.map(children, (child) => typeof child === 'string' ? <span>{ child }</span> : child) }
      </ButtonTag>
    );
  }
}

export { Button };
