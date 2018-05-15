import React from 'react';

export default (asStory) => {
  asStory('ATOMS/Modal (skip shot)', module, (story, { Modal }) => {
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
      ));
  });
};

