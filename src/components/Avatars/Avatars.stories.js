/* eslint-disable no-alert */

import React from 'react';
import { Avatars, Column } from '../../';

const USERS = [
  { firstName: 'Louann', lastName: 'Buczek' },
  { firstName: 'Conrad', lastName: 'Mynear' },
  { firstName: 'Elissa', lastName: 'Schwarz' },
  { firstName: 'Marty', lastName: 'Normandin' },
  { firstName: 'Phylis', lastName: 'Tshudy' },
  { firstName: 'Eva', lastName: 'Rennie' },
  { firstName: 'Aubrey', lastName: 'Modrak' },
];

export default {
  title: 'Components/Avatars',
  component: Avatars,
};

export const common = () => (
  <Column gap="lg">
    <Avatars size="md" users={ USERS } />
    <Avatars users={ USERS } />
  </Column>
);

common.story = {
  name: 'common',
};
