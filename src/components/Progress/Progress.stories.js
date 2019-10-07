import React from 'react';

import { storiesOf } from '@storybook/react';
import { Progress, Column } from '../../';

storiesOf('Components/Progress', module)
  .add('common', () => (
    <Column style={{ width: 300 }}>
      <Progress value={ 0 } />
      <br />
      <Progress value={ 30 } />
      <br />
      <Progress value={ 50 } />
      <br />
      <Progress value={ 100 } />
      <br />
      <Progress size="sm" valueWidth="75%" label="API Requests" valueText="1,230,000/2,500,000" value={ 100 * 1230000 / 2500000 } />
      <br />
      <Progress size="sm" valueWidth="75%" label="End-User Accounts" valueText="3,500/5,000" value={ 100 * 2230000 / 2500000 } />
      <br />
      <Progress size="sm" valueWidth="75%" label="8base Database Rows" valueText="200,300/125,000" value={ 100 * 1830000 / 2500000 } />
      <br />
    </Column>
  ));


