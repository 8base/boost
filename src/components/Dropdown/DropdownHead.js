// @flow

import React, { PureComponent } from 'react';
import { Reference } from 'react-popper';
import { compose, setDisplayName } from 'recompose';

import { withDropdownContext } from './DropdownContext';
import { DropdownHeadTag, DropdownPopperTarget } from './DropdownHead.theme';


type DropdownHeadProps = {
  children: React$Node,
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
    const { dropdown: { toggleDropdown }, disabled, stopClickPropagation, onClick } = this.props;

    if (!!disabled) {
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

  render() {
      const { dropdown: { outsideClickIgnoreClass }, children, ...rest } = this.props;

      return (
        <DropdownHeadTag { ...rest } tagName="div" className={ outsideClickIgnoreClass } onClick={ this.onClick }>
          <Reference>
            { ({ ref }) => (
              <DropdownPopperTarget tagName="div" insideRef={ ref }>
                { children }
              </DropdownPopperTarget>
            ) }
          </Reference>
        </DropdownHeadTag>
      );
    }
  },
);

export { DropdownHead };
