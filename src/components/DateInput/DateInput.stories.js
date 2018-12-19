import React from 'react';

export default (asStory) => {
  asStory('Components/DateInput', module, (story, { DateInput, Column, StateContainer }) => {
    story
      .add('common', () => (
        <Column>
          <StateContainer value={ null }>
            <DateInput />
          </StateContainer>
          <StateContainer value={ null }>
            <DateInput withTime />
          </StateContainer>
          <StateContainer value="2018-11-07">
            <DateInput />
          </StateContainer>
          <StateContainer value="2018-11-29T21:00:00.000Z">
            <DateInput withTime />
          </StateContainer>
        </Column>
      ));
  });
};

