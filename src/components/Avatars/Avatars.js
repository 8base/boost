// @flow
/* eslint-disable react/jsx-key */

import React from 'react';
import { css } from '@emotion/core';
import { theme, AvatarsTag, AvatarsHandleTag, AvatarsCounterTag } from './Avatars.theme';

import { Tooltip } from '../Tooltip';
import { Avatar } from '../Avatar';
import { Icon } from '../Icon';

type AvatarsProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  users: Array<{
    firstName: string,
    lastName: string,
    avatarUrl: string,
  }>,
  onAvatarsClick?: Function,
  onCounterClick?: Function,
  onPlusClick?: Function,
};

const tooltipClassName = css`
  &:not(:first-of-type) {
    margin-left: -10px;
  }
`;

const avatarClassName = css`
  border: 2px solid #fff;
  cursor: pointer;
`;

const Avatars = ({
  users,
  size,
  onAvatarsClick,
  onCounterClick,
  onPlusClick,
  ...rest
}: AvatarsProps) => {
  return (
    <AvatarsTag { ...rest } tagName="div">
      { React.Children.toArray(
        users.slice(0, 4).map(({ firstName, lastName, avatarUrl }, index) => (
          <Tooltip css={ css(tooltipClassName) } message={ `${firstName} ${lastName}` }>
            <Avatar
              onClick={ onAvatarsClick }
              css={ css(avatarClassName) }
              style={{ zIndex: Math.abs(index - 7) }}
              firstName={ firstName }
              lastName={ lastName }
              src={ avatarUrl }
              size={ size }
            />
          </Tooltip>
        )),
      ) }

      <If condition={ users.length > 4 }>
        <AvatarsCounterTag onClick={ onCounterClick } size={ size }>+ { users.length - 4 }</AvatarsCounterTag>
      </If>
      <AvatarsHandleTag onClick={ onPlusClick } size={ size }>
        <Icon name="Plus" size="xs" color="PRIMARY" />
      </AvatarsHandleTag>
    </AvatarsTag>
  );
};

Avatars.defaultProps = {
  size: 'lg',
};

export { Avatars, theme };
