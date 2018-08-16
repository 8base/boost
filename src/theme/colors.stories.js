import React from 'react';

import { PALETTE } from './colors';

export default (asStory) => {
  asStory('Theme', module, (story) => {
    story
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
  });
};

