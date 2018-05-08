// @flow

import React, { PureComponent } from 'react';
import { Target } from 'react-popper';
import { compose } from 'recompose';

import { withDropdownContext } from './DropdownContext'

import { createStyledTag, createTheme } from '../../utils';

/**
 * @prop {*} stretch stretch dropdown to the parent container
 */
type DropdownHeadThemeProps = {|
  stretch?: boolean,
|}

/**
 * @prop {*} stopClickPropagation prevent propagation on click
 */
type DropdownHeadProps = {|
  ...DropdownHeadThemeProps,

  children: React$Node,
  stopClickPropagation?: boolean,

  /** cloned props */
  onClick?: (event?: Event) => void,
  outsideClickIgnoreClass?: string,
|}

const name = 'dropdownHead';

const theme: Theme<DropdownHeadThemeProps> = createTheme(name, {
  modifiers: {
    stretch: {
      height: '100%',
      width: '100%',
    },
  },
  defaults: {},
});

const DropdownHeadTag = createStyledTag(name, {
  cursor: 'pointer',
  display: 'inline-flex',
  flexWrap: 'nowrap',
  height: 'auto',
  width: 'auto',
  zIndex: 2,
});


const DropdownPopperTarget = createStyledTag(name, {
  display: 'inline-flex',
  width: '100%',
  height:' 100%',
});

const dropdownHeadEnhancer: HOC<*, DropdownHeadProps>  = compose(
  withDropdownContext,
)

type DropdownHeadPropsEnhanced = HOCBase<typeof dropdownHeadEnhancer>;

class DropdownHeadBase extends PureComponent<DropdownHeadPropsEnhanced> {

  onClick = (event: MouseEvent) => {
    const { dropdown: { toggleDropdown }, stopClickPropagation } = this.props;

    toggleDropdown && toggleDropdown();
    stopClickPropagation && event.stopPropagation();
  }

  render() {
    const { dropdown: { outsideClickIgnoreClass }, children, ...rest } = this.props;

    return (
      <DropdownHeadTag { ...rest } tagName="div" className={ outsideClickIgnoreClass } onClick={ this.onClick }>
        <DropdownPopperTarget tagName = { Target }>
          { children }
        </DropdownPopperTarget>
      </DropdownHeadTag>
    );
  }
}

const DropdownHead = dropdownHeadEnhancer(DropdownHeadBase);

export { DropdownHead, theme}
