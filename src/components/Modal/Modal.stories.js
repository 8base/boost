import React from 'react';

export default (asStory) => {
  asStory('Components/Modal', module, (story, { Modal, ModalContext, Button }) => {
    story
      .add('multiple modals', () => (
        <React.Fragment>
          <Modal isOpen>
            XXXXXXXXXX<br />
            XXXXXXXXXX<br />
            XXXXXXXXXX<br />
            XXXXXXXXXX<br />
            XXXXXXXXXX<br />
            XXXXXXXXXX<br />
            XXXXXXXXXX<br />
            XXXXXXXXXX<br />
            XXXXXXXXXX<br />
            XXXXXXXXXX<br />
          </Modal>
          <Modal isOpen>
            00000<br />
            00000<br />
            00000<br />
            00000<br />
            00000<br />
          </Modal>
        </React.Fragment>
      ))
      .add('with state', () => (
        <React.Fragment>
          <Modal id="ID">
            {
              ({ args }) => (
                <React.Fragment>
                  XXXXXXXXXX<br />
                  XXXXXXXXXX<br />
                  XXXXXXXXXX<br />
                  XXXXXXXXXX<br />
                  XXXX{ args.foo }XXXX<br />
                  XXXX{ args.bar }XXXX<br />
                  XXXXXXXXXX<br />
                  XXXXXXXXXX<br />
                  XXXXXXXXXX<br />
                  XXXXXXXXXX<br />
                </React.Fragment>
              )
            }
          </Modal>
          <ModalContext.Consumer>
            {
              ({ openModal }) => <Button onClick={ () => openModal('ID', { foo: '00', bar: '00' }) }>Open</Button>
            }
          </ModalContext.Consumer>
        </React.Fragment>
      ));
  });
};

