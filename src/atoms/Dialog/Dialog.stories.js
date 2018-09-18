import React from 'react';

export default (asStory) => {
  asStory('ATOMS/Dialog (skip shot)', module, (story, { ModalConsumer, Dialog, Paragraph, Button }) => {
    story
      .add('with default header, body, actions and footer (skip shot)', () => (
        <Dialog.Plate id="ID" size="sm">
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
      ))
      .add('with state', () => (
        <React.Fragment>
          <Dialog.Plate id="ID" size="sm">
            {
              ({ args, onClose }) => (
                <React.Fragment>
                  <Dialog.Header title="Mark Job as Completed" onClose={ onClose } />
                  <Dialog.Body>
                    <Paragraph>
                      Fagelia cancrivorous { args.foo } Curucaneca Echinocaris { args.bar } glassful agronomics
                    </Paragraph>
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Button color="neutral" variant="outlined" text="Cancel" onClick={ onClose } />
                    <Button type="submit" text="Apply" />
                  </Dialog.Footer>
                </React.Fragment>
              )
            }
          </Dialog.Plate>
          <ModalConsumer>
            {
              ({ openModal }) => <Button onClick={ () => openModal('ID', { foo: '00', bar: '00' }) }>Open</Button>
            }
          </ModalConsumer>
        </React.Fragment>
      ));
  });
};
