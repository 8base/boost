import React from 'react';

export default (asStory) => {
  asStory('ATOMS/Paper', module, (story, { Paper }) => {
    story
      .add('with header and sections', () => (
        <Paper.Plate>
          <Paper.Header title="My Profile">
            PaperHeaderChildren
          </Paper.Header>
          <Paper.Body>
            <Paper.Section>
              PaperSectionChildren
            </Paper.Section>
            <Paper.Section>
              PaperSectionChildren
            </Paper.Section>
          </Paper.Body>
        </Paper.Plate>
      ));
  });
};

