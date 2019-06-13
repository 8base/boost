// @flow

import React from 'react';
import { theme, TopBarTag, TopBarCloseTag } from './TopBar.theme';

import { Row } from '../FlexLayout';
import { Icon } from '../Icon';

type TopBarProps = {
  isOpen?: boolean,
  onClose?: Function,
  children: React$Node,
  color: string,
};

const TopBar = ({ children, isOpen, onClose, ...rest }: TopBarProps) => {
  let rendered = null;

  if (isOpen) {
    rendered = (
      <TopBarTag tagName={ Row } alignItems="center" justifyContent="center" gap="lg" { ...rest }>
        <If condition={ typeof onClose === 'function' }>
          <TopBarCloseTag onClick={ onClose }>
            <Icon name="Delete" color="WHITE" />
          </TopBarCloseTag>
        </If>
        { children }
      </TopBarTag>
    );
  }

  return rendered;
};

TopBar.defaultProps = {
  isOpen: true,
};

export { TopBar, theme };
