// @flow

import React, { PureComponent } from 'react';
import { Target } from 'react-popper';
import { compose, setDisplayName } from 'recompose';

import { withDropdownContext } from './DropdownContext';
import { DropdownHeadTag, DropdownPopperTarget } from './DropdownHead.theme';


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
|}

const dropdownHeadEnhancer: HOC<*, DropdownHeadProps> = compose(
  setDisplayName('Dropdown.Head'),
  withDropdownContext,
);

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
        <DropdownPopperTarget tagName={ Target }>
          { children }
        </DropdownPopperTarget>
      </DropdownHeadTag>
    );
  }
}

const DropdownHead = dropdownHeadEnhancer(DropdownHeadBase);

export { DropdownHead };
export type { DropdownHeadThemeProps };
