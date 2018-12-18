import React from 'react';

export default (asStory) => {
  asStory('Components/Paper', module, (story, { Paper, Column }) => {
    story
      .add('with header and sections', () => (
        <Paper>
          <Column offsetX="md" offsetY="md">
            Paper
          </Column>
        </Paper>
      ));
  });
};
