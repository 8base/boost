import React from 'react';
import { PALETTE } from './colors';

export default {
  title: 'Theme',
};

export const palette = () => (
  <div>
    { React.Children.toArray(
      Object.keys(PALETTE).map(key => (
        <div
          key={ key }
          style={{
            width: '400px',
            height: '30px',
            color: '#fff',
            backgroundColor: PALETTE[key],
            display: 'flex',
            alignItems: 'center',
          }}
        >
          { key }
        </div>
      )),
    ) }
  </div>
);

palette.story = {
  name: 'palette',
};
