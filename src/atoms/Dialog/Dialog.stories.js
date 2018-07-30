import React from 'react';

export default (asStory) => {
  asStory('ATOMS/Dialog (skip shot)', module, (story, { Dialog, Paragraph, Button }) => {
    story
      .add('with default header, body, actions and footer (skip shot)', () => (
        <Dialog.Plate isOpen size="sm">
          <Dialog.Header title="Mark Job as Completed" />
          <Dialog.Body>
            <Paragraph>
              Fagelia cancrivorous Nahor Curucaneca Echinocaris intrafissural glassful agronomics
            </Paragraph>
          </Dialog.Body>
          <Dialog.Footer>
            <Button color="neutral" variant="outlined" text="Cancel" />
            <Button type="submit" text="Apply" />
          </Dialog.Footer>
        </Dialog.Plate>
      ));
  });
};
