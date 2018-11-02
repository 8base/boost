import React from 'react';
import moment from 'moment';

let value = moment().format('YYYY-MM-DD');

export default (asStory) => {
  asStory('ATOMS/DATA ENTRY/DateInput', module, (story, { DateInput }) => {
    story
      .add('default', () => (
        <DateInput value={ value } onChange={ (val) => { value = val; } } />
      ));
  });
};

