import React from 'react';
import { storiesOf } from '@storybook/react';
import { PALETTE } from './colors';

storiesOf('Theme', module)
  .add('palette', () => (
    <div>
      {
        React.Children.toArray(Object.keys(PALETTE).map((key) => (
          <div key={ key } style={{
            width: '400px',
            height: '30px',
            color: '#fff',
            backgroundColor: PALETTE[key],
            display: 'flex',
            alignItems: 'center',
          }}>
            { key }
          </div>
        )))
      }
    </div>
  ));

