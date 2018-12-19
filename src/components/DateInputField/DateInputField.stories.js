import React from 'react';

export default (asStory) => {
  asStory('Components/DateInputField', module, (story, { DateInputField, Column, StateContainer }) => {
    story
      .add('common', () => (
        <Column>
          <StateContainer value={ null } withForm>
            <DateInputField label="Date" />
          </StateContainer>
          <StateContainer value={ null } withForm>
            <DateInputField label="Datetime" withTime />
          </StateContainer>
          <StateContainer value="2018-11-07" withForm>
            <DateInputField label="Date" />
          </StateContainer>
          <StateContainer value="2018-11-29T21:00:00.000Z" withForm>
            <DateInputField label="Datetime" withTime />
          </StateContainer>
        </Column>
      ));
  });
};

