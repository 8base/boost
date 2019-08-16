// @flow
/* eslint-disable react/jsx-key */

import React from 'react';
import { css } from 'emotion';
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
  onClick: Function,
};

const avatarClassName = css`
  border: 2px solid #fff;
  cursor: pointer;
`;

const Avatars = ({ users, size, onClick, ...rest }: AvatarsProps) => {
  return (
    <AvatarsTag { ...rest } tagName="div" onClick={ onClick }>
      {
        React.Children.toArray(
          users.slice(0, 4).map(({ firstName, lastName, avatarUrl }, index) => (
            <Tooltip message={ `${firstName} ${lastName}` }>
              <Avatar
                className={ avatarClassName }
                style={{ zIndex: Math.abs(index - 7) }}
                firstName={ firstName }
                lastName={ lastName }
                src={ avatarUrl }
                size={ size }
              />
            </Tooltip>
          ),
          ))
      }
      <If condition={ users.length > 4 }>
        <AvatarsCounterTag size={ size }>
          + { users.length - 4 }
        </AvatarsCounterTag>
      </If>
      <AvatarsHandleTag size={ size }>
        <Icon name="Plus" size="xs" color="PRIMARY" />
      </AvatarsHandleTag>
    </AvatarsTag>
  );
};


Avatars.defaultProps = {
  size: 'lg',
};

export { Avatars, theme };
