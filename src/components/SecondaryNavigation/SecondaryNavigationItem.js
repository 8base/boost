// @flow

import React from 'react';

import { Dropdown } from '../Dropdown';
import { Menu } from '../Menu';
import { Icon } from '../Icon';

import {
  SecondaryNavigationItemTag,
  SecondaryNavigationItemLabelTag,
  SecondaryNavigationItemActionsTag,
} from './SecondaryNavigationItem.theme';

type SecondaryNavigationItemProps = {
  label?: string,
  active?: boolean,
  actions?: Object[] | Function,
};

type SecondaryNavigationItemState = {
  openedActions: boolean,
  hovered: boolean,
};

class SecondaryNavigationItem extends React.PureComponent<SecondaryNavigationItemProps, SecondaryNavigationItemState> {
  state = {
    openedActions: false,
    hovered: false,
  };

  openActions = () => {
    this.setState({ openedActions: true });
  };

  closeActions = () => {
    this.setState({ openedActions: false });
  };

  onMouseLeave = () => {
    this.setState({ hovered: false });

    const { active } = this.props;

    if (!active) {
      this.closeActions();
    }
  };

  onMouseEnter = () => {
    this.setState({ hovered: true });
  };

  createOnMenuItemClick = (onClick: Function) => (event: MouseEvent) => {
    event.stopPropagation();

    onClick(event);

    this.closeActions();
  };

  render() {
    const { label, actions, ...rest } = this.props;
    const { openedActions, hovered } = this.state;

    const finalActions = (typeof actions === 'function' ? actions(this.closeActions) : actions);

    return (
      <SecondaryNavigationItemTag { ...rest } hovered={ hovered } onMouseLeave={ this.onMouseLeave } onMouseEnter={ this.onMouseEnter } >
        <SecondaryNavigationItemLabelTag tagName="span" modifiers={ rest } >
          { label }
        </SecondaryNavigationItemLabelTag>
        {
          finalActions
          &&
          (
            <SecondaryNavigationItemActionsTag>
              <Dropdown isOpen={ openedActions } onCloseDropdown={ this.closeActions } onOpenDropdown={ this.openActions }>
                <Dropdown.Head stopClickPropagation>
                  <Icon size="sm" name="Dots" color="GRAY5" />
                </Dropdown.Head>
                <Dropdown.Body forceRender withPortal>
                  <Menu>
                    {
                      finalActions.map(({ label, onClick, ...rest }) => (
                        <Menu.Item key={ label } onClick={ this.createOnMenuItemClick(onClick) } { ...rest }>
                          { label }
                        </Menu.Item>
                      ))
                    }
                  </Menu>
                </Dropdown.Body>
              </Dropdown>
            </SecondaryNavigationItemActionsTag>
          )
        }
      </SecondaryNavigationItemTag>
    );
  }
}

export { SecondaryNavigationItem };
export { theme } from './SecondaryNavigationItem.theme';
