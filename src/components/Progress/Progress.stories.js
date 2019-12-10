import React from 'react';

import { Progress, Column } from '../../';

export default {
  title: 'Components/Progress',
  component: Progress,
};

export const common = () => (
  <Column style={{ width: 300 }}>
    <Progress value={ 0 } />
    <br />
    <Progress value={ 30 } />
    <br />
    <Progress value={ 50 } />
    <br />
    <Progress value={ 100 } />
    <br />
    <Progress
      showSeparator
      backgroundColor="GREEN_30"
      value={ 75 }
    />
    <br />
    <Progress
      size="sm"
      valueWidth="75%"
      label="API Requests"
      valueText="1,230,000/2,500,000"
      value={ (100 * 1230000) / 2500000 }
    />
    <br />
    <Progress
      size="sm"
      valueWidth="75%"
      label="End-User Accounts"
      valueText="3,500/5,000"
      value={ (100 * 3500) / 5000 }
    />
    <br />
    <Progress
      size="sm"
      valueWidth="75%"
      label="8base Database Rows"
      valueText="200,300/125,000"
      value={ (100 * 200300) / 125000 }
    />
    <br />
    <Progress
      size="sm"
      valueWidth="50%"
      label="Background color"
      valueText={ (
        <div>
          100000 / <span style={{ fontWeight: 600 }} >125000</span>
        </div>
      ) }
      value={ (100 * 100000) / 125000 }
      showSeparator
      backgroundColor="GREEN_30"
    />
    <br />
  </Column>
);

common.story = {
  name: 'common',
};
