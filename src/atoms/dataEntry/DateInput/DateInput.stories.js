import React from 'react';

export default (asStory) => {
  asStory('ATOMS/DATA ENTRY/DateInput', module, (story, { DateInput }) => {
    story
      .add('default', () => (
        <DateInput value="11/02/2018" onChange={ () => null } />
      ));
  });
};

