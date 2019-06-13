/* eslint-disable no-alert */

import React from 'react';

const USERS = [
  { firstName: 'Louann', lastName: 'Buczek' },
  { firstName: 'Conrad', lastName: 'Mynear' },
  { firstName: 'Elissa', lastName: 'Schwarz' },
  { firstName: 'Marty', lastName: 'Normandin' },
  { firstName: 'Phylis', lastName: 'Tshudy' },
  { firstName: 'Eva', lastName: 'Rennie' },
  { firstName: 'Aubrey', lastName: 'Modrak' },
];

export default (asStory) => {
  asStory('Components/Avatars', module, (story, { Avatars, Column }) => {
    story
      .add('common', () => (
        <Column gap="lg">
          <Avatars size="md" users={ USERS } />
          <Avatars users={ USERS } />
        </Column>
      ));
  });
};
