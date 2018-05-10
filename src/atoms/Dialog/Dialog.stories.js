import React from 'react';

export default (asStory) => {
  asStory('Atoms/Dialog (skip shot)', module, (story, { Dialog, Paragraph }) => {
    story
      .add('with default header, body, actions and footer (skip shot)', () => (
        <Dialog.Plate
          isOpen
          heading="Mark Job as Completed"
          actions={ [{
            text: 'Close', onClick: () => null,
          }, {
            text: 'Submit', onClick: () => null,
          }] }
        >
          <Paragraph>{ 'Fagelia cancrivorous Nahor Curucaneca Echinocaris intrafissural glassful agronomics proplex holt obpyramidal vibrometer objectlessness laevogyrous wichtje monel silklike provostorial collingual Serpentes beget inparabola tolling speleology</Paragraph' }</Paragraph>
        </Dialog.Plate>
      ));
  });
};
