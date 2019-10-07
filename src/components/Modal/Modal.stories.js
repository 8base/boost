import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal, ModalContext, Button } from '../../';

const CustomBackground = ({ children }) => <div style={{ backgroundColor: '#fff', padding: '10px' }}>{ children }</div>;

storiesOf('Components/Modal', module)
  .add('default', () => (
    <Modal isOpen data-e2e-id="default-modal">
      <CustomBackground>
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
      </CustomBackground>
    </Modal>
  ))
  .add('with multiple modals', () => (
    <React.Fragment>
      <Modal isOpen>
        <CustomBackground>
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
        </CustomBackground>
      </Modal>
      <Modal isOpen data-e2e-id="multiple-modal">
        <CustomBackground>
              00000<br />
              00000<br />
              00000<br />
              00000<br />
              00000<br />
        </CustomBackground>
      </Modal>
    </React.Fragment>
  ))
  .add('with state', () => (
    <React.Fragment>
      <Modal id="ID">
        {
          ({ args }) => (
            <CustomBackground>
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
            </CustomBackground>
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


