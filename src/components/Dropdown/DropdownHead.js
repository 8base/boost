// @flow

import React, { PureComponent } from 'react';
import { Reference } from 'react-popper';
import { compose, setDisplayName } from 'recompose';

import { withDropdownContext } from './DropdownContext';
import { DropdownHeadTag, DropdownPopperTarget } from './DropdownHead.theme';


type DropdownHeadProps = {
  children: React$Node | ({
    toggleDropdown: () => void,
    closeDropdown?: () => void,
    openDropdown?: () => void,
    isOpen: boolean,
   }) => React$Node,
  /** When exists then stretch drodown head */
  stretch?: boolean,
  /** Prevent propagation on click */
  stopClickPropagation?: boolean,
  /** onClick callback. When exists then disalbe auto toogle dropdown on click */
  onClick?: (MouseEvent) => void,
  /** Prevent toggle action */
  disabled?: boolean,
}


const dropdownHeadEnhancer: HOC<*, DropdownHeadProps> = compose(
  setDisplayName('Dropdown.Head'),
  withDropdownContext,
);

type DropdownHeadPropsEnhanced = HOCBase<typeof dropdownHeadEnhancer>;


const DropdownHead = dropdownHeadEnhancer(
  class DropdownHead extends PureComponent<DropdownHeadPropsEnhanced> {

  onClick = (event: MouseEvent) => {
    const { dropdown: { toggleDropdown }, disabled, stopClickPropagation, onClick, children } = this.props;

    if (!!disabled || typeof children === 'function') {
      return;
    }

    if (typeof onClick === 'function') {
      onClick(event);
    }
    else {
      toggleDropdown && toggleDropdown();
    }

    event.preventDefault();

    stopClickPropagation && event.stopPropagation();
  }

  getHeadChildren = () => {
    const { children, dropdown: { toggleDropdown, closeDropdown, openDropdown, isOpen }} = this.props;

    return typeof children === 'function'
      ? children({ toggleDropdown, closeDropdown, openDropdown, isOpen })
      : children;
  }

  render() {
    const { dropdown: { outsideClickIgnoreClass }, children, ...rest } = this.props;
    const renderChildren = this.getHeadChildren();

    return (
      <DropdownHeadTag { ...rest } tagName="div" className={ outsideClickIgnoreClass } onClick={ this.onClick }>
        <Reference>
          { ({ ref }) => (
            <DropdownPopperTarget tagName="div" insideRef={ ref }>
              { renderChildren }
            </DropdownPopperTarget>
          ) }
        </Reference>
      </DropdownHeadTag>
    );
  }
  },
);

export { DropdownHead };
