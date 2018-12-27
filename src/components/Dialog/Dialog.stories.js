import React from 'react';

export default (asStory) => {
  asStory('Components/Dialog', module, (story, { ModalContext, Dialog, Paragraph, Button }) => {
    story
      .add('common', () => (
        <Dialog size="sm" isOpen>
          <Dialog.Header title="Mark Job as Completed" />
          <Dialog.Body>
            <Paragraph>
              Fagelia cancrivorous Nahor Curucaneca Echinocaris intrafissural glassful agronomics
            </Paragraph>
          </Dialog.Body>
          <Dialog.Footer>
            <Button color="neutral" variant="outlined">Cancel</Button>
            <Button type="submit">Apply</Button>
          </Dialog.Footer>
        </Dialog>
      ))
      .add('with state', () => (
        <ModalContext.Consumer>
          {
            ({ openModal, closeModal }) => (
              <React.Fragment>
                <Dialog id="ID" size="sm" onClose={ () => closeModal('ID') }>
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
                          <Button color="neutral" variant="outlined" onClick={ onClose }>Cancel</Button>
                          <Button type="submit">Apply</Button>
                        </Dialog.Footer>
                      </React.Fragment>
                    )
                  }
                </Dialog>
                <Button onClick={ () => openModal('ID', { foo: '00', bar: '00' }) }>Open</Button>
              </React.Fragment>
            )
          }
        </ModalContext.Consumer>
      ));
  });
};
