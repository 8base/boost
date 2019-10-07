import React from 'react';
import { storiesOf } from '@storybook/react';
import { DateInputField, Column } from '../../';
import { StateContainer } from '../../../storybook/StateContainer';


storiesOf('Components/DateInputField', module)
  .add('common', () => (
    <Column>
      <StateContainer value={ null } withForm>
        <DateInputField label="Date" placeholder="mm/dd/yyyy" />
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

