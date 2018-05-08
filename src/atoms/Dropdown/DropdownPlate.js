// @flow

import React, { Component } from 'react';
import fp from 'lodash/fp';
import { compose, withStateHandlers, branch } from 'recompose';
import { Manager } from 'react-popper';

import { DropdownHead } from './DropdownHead';
import { DropdownBody } from './DropdownBody';

/**
 * @prop {*} isOpen opened state of the dropdown
 * @prop {*} onCloseDropdown callback to close dropdown
 * @prop {*} onOpenDropdown callback to open dropdown
 */
type DropdownControlledProps = {|
  isOpen: boolean,
  onCloseDropdown: () => void,
  onOpenDropdown: () => void,
  children: React$Node,
|}

/**
 * @prop {*} defaultOpen default opened state for the uncontorlled mode
 */
type DropdownUncontroledProps = {|
  defaultOpen?: boolean,
  children: React$Node,
|}

class DropdownPlateBase extends Component<DropdownControlledProps> {
  instanceIndex: number;
  dropdownRef: ?HTMLElement;

  /** needs for the onclickoutside ignore target */
  static instancesCount = 0;

  constructor(props: DropdownControlledProps) {
    super(props);

    this.instanceIndex = DropdownPlateBase.instancesCount++;
  }

  toggleDropdown = () => {
    const { isOpen, onOpenDropdown, onCloseDropdown } = this.props;

    isOpen
      ? fp.isFunction(onCloseDropdown) && onCloseDropdown()
      : fp.isFunction(onOpenDropdown) && onOpenDropdown();
  }

  setDropdownRef = (ref: *) => {
    this.dropdownRef = ref;
  }

  getDropdownWidth = () => {
    return this.dropdownRef && this.dropdownRef.offsetWidth;
  }

  getIgnoreClickOutsideClass = () => `ignore-react-onclickoutside-${this.instanceIndex}`;

  getHeadComponent() {
    const { children } = this.props;

    return React.Children.map(children, child =>
      (child.type.prototype instanceof DropdownHead || child.type === DropdownHead)
        ? React.cloneElement(child,
          {
            onClick: this.toggleDropdown,
            outsideClickIgnoreClass: this.getIgnoreClickOutsideClass(),
          })
        : null,
    );
  }

  getBodyComponent() {
    const { children, onCloseDropdown, isOpen } = this.props;

    return React.Children.map(children, child =>
      (child.type.prototype instanceof DropdownBody || child.type === DropdownBody)
        ? React.cloneElement(child,
          {
            onCloseDropdown,
            isOpen,
            targetWidth: this.getDropdownWidth(),
            outsideClickIgnoreClass: this.getIgnoreClickOutsideClass(),
          })
        : null,
    );
  }

  render() {
    return (
      <div ref={ this.setDropdownRef }>
        <Manager tag={ false }>
          { this.getHeadComponent() }
          { this.getBodyComponent() }
        </Manager>
      </div>
    );
  }
}

/** if component has defaultOpen prop when will add the hoc with isOpen state */
const dropDownEnhancer: { (any): React$ComponentType<DropdownControlledProps | DropdownUncontroledProps> } = compose(
  branch(
    (props) => !fp.isNil(props.defaultOpen),
    withStateHandlers(
      (props): { isOpen: boolean } => ({ isOpen: props.defaultOpen }),
      {
        onOpenDropdown: () => () => ({ isOpen: true }),
        onCloseDropdown: () => () => ({ isOpen: false }),
      },
    ),
  ),
);

export const DropdownPlate = dropDownEnhancer(DropdownPlateBase);
