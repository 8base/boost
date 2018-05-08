import React from 'react';

export default (asStory) => {
  asStory('Atoms/Modal (skip shot)', module, (story, { Modal }) => {
    story
      .add('multiple modals', () => (
        <React.Fragment>
          <Modal isOpen={true}>
            XXXXXXXXXX<br/>
            XXXXXXXXXX<br/>
            XXXXXXXXXX<br/>
            XXXXXXXXXX<br/>
            XXXXXXXXXX<br/>
            XXXXXXXXXX<br/>
            XXXXXXXXXX<br/>
            XXXXXXXXXX<br/>
            XXXXXXXXXX<br/>
            XXXXXXXXXX<br/>
          </Modal>
          <Modal isOpen={true}>
            00000<br/>
            00000<br/>
            00000<br/>
            00000<br/>
            00000<br/>
          </Modal>
        </React.Fragment>
      ));
  });
};

