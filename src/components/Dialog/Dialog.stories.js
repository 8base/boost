import React from 'react';

import { ModalContext, Dialog, Paragraph, Button, Column } from '../../';

export default {
  title: 'Components/Dialog',
  component: Dialog,
};

export const defaultStory = () => (
  <ModalContext.Consumer>
    { ({ openModal, closeModal }) => (
      <React.Fragment>
        <Dialog
          size="sm"
          onClose={ () => closeModal('default-dialog-id') }
          id="default-dialog-id"
          data-e2e-id="default-dialog"
        >
          { ({ onClose }) => (
            <React.Fragment>
              <Dialog.Header title="Mark Job as Completed" onClose={ onClose } />
              <Dialog.Body>
                <Paragraph>
                  Fagelia cancrivorous Nahor Curucaneca Echinocaris intrafissural glassful agronomics
                </Paragraph>
              </Dialog.Body>
              <Dialog.Footer>
                <Button color="neutral" variant="outlined" onClick={ onClose }>
                  Cancel
                </Button>
                <Button type="submit" onClick={ onClose }>Apply</Button>
              </Dialog.Footer>
            </React.Fragment>
          ) }
        </Dialog>
        <Button onClick={ () => openModal('default-dialog-id') }>Open default dialog</Button>
      </React.Fragment>
    ) }
  </ModalContext.Consumer>
);

defaultStory.story = {
  name: 'default',
};

export const withStretch = () => (
  <ModalContext.Consumer>
    { ({ openModal, closeModal }) => (
      <React.Fragment>
        <Dialog
          stretch
          size="sm"
          onClose={ () => closeModal('withStretch-dialog-id') }
          id="withStretch-dialog-id"
          data-e2e-id="default-dialog"
        >
          { ({ onClose }) => (
            <React.Fragment>
              <Dialog.Header title="Mark Job as Completed" onClose={ onClose } />
              <Dialog.Body>
                <Paragraph>
                  Fagelia cancrivorous Nahor Curucaneca Echinocaris intrafissural glassful agronomics
                </Paragraph>
              </Dialog.Body>
              <Dialog.Footer>
                <Button color="neutral" variant="outlined" onClick={ onClose }>
                  Cancel
                </Button>
                <Button type="submit" onClick={ onClose }>Apply</Button>
              </Dialog.Footer>
            </React.Fragment>
          ) }
        </Dialog>
        <Button onClick={ () => openModal('withStretch-dialog-id') }>Open dialog with stretch</Button>
      </React.Fragment>
    ) }
  </ModalContext.Consumer>
);

withStretch.story = {
  name: 'with stretch',
};

export const withLargeSize = () => (
  <ModalContext.Consumer>
    { ({ openModal, closeModal }) => (
      <React.Fragment>
        <Dialog size="xl"
          onClose={ () => closeModal('withLargeSize-dialog-id') }
          id="withLargeSize-dialog-id"
          data-e2e-id="default-dialog"
        >
          { ({ onClose }) => (
            <React.Fragment>
              <Dialog.Header title="Mark Job as Completed" onClose={ onClose } />
              <Dialog.Body>
                <Paragraph>
                  Fagelia cancrivorous Nahor Curucaneca Echinocaris intrafissural glassful agronomics
                </Paragraph>
              </Dialog.Body>
              <Dialog.Footer>
                <Button color="neutral" variant="outlined" onClick={ onClose }>
                  Cancel
                </Button>
                <Button type="submit" onClick={ onClose }>Apply</Button>
              </Dialog.Footer>
            </React.Fragment>
          ) }
        </Dialog>
        <Button onClick={ () => openModal('withLargeSize-dialog-id') }>Open dialog with large size</Button>
      </React.Fragment>
    ) }
  </ModalContext.Consumer>
);

withLargeSize.story = {
  name: 'with large size',
};

export const withScroll = () => (
  <ModalContext.Consumer>
    { ({ openModal, closeModal }) => (
      <React.Fragment>
        <Dialog
          size="sm"
          onClose={ () => closeModal('withScroll-dialog-id') }
          id="withScroll-dialog-id"
          data-e2e-id="default-dialog"
        >
          { ({ onClose }) => (
            <React.Fragment>
              <Dialog.Header title="Mark Job as Completed" onClose={ onClose } />
              <Dialog.Body scrollable>
                <Column>
                  { new Array(100).fill('').map(() => (
                    <Paragraph key="">
                      Fagelia cancrivorous Nahor Curucaneca Echinocaris intrafissural glassful agronomics
                    </Paragraph>
                  )) }
                </Column>
              </Dialog.Body>
              <Dialog.Footer>
                <Button color="neutral" variant="outlined" onClick={ onClose }>
                  Cancel
                </Button>
                <Button type="submit" onClick={ onClose }>Apply</Button>
              </Dialog.Footer>
            </React.Fragment>
          ) }
        </Dialog>
        <Button onClick={ () => openModal('withScroll-dialog-id') }>Open dialog with scroll</Button>
      </React.Fragment>
    ) }
  </ModalContext.Consumer>
);

withScroll.story = {
  name: 'with scroll',
};

export const withStretchScroll = () => (
  <ModalContext.Consumer>
    { ({ openModal, closeModal }) => (
      <React.Fragment>
        <Dialog
          stretch
          size="sm"
          onClose={ () => closeModal('withStretchScroll-dialog-id') }
          id="withStretchScroll-dialog-id"
          data-e2e-id="default-dialog"
        >
          { ({ onClose }) => (
            <React.Fragment>
              <Dialog.Header title="Mark Job as Completed" onClose={ onClose } />
              <Dialog.Body scrollable>
                <Column>
                  { new Array(100).fill('').map(() => (
                    <Paragraph key="">
                      Fagelia cancrivorous Nahor Curucaneca Echinocaris intrafissural glassful agronomics
                    </Paragraph>
                  )) }
                </Column>
              </Dialog.Body>
              <Dialog.Footer>
                <Button color="neutral" variant="outlined" onClick={ onClose }>
                  Cancel
                </Button>
                <Button type="submit" onClick={ onClose }>Apply</Button>
              </Dialog.Footer>
            </React.Fragment>
          ) }
        </Dialog>
        <Button onClick={ () => openModal('withStretchScroll-dialog-id') }>Open dialog with stretch scroll</Button>
      </React.Fragment>
    ) }
  </ModalContext.Consumer>
);

withStretchScroll.story = {
  name: 'with stretch scroll',
};

export const withState = () => (
  <ModalContext.Consumer>
    { ({ openModal, closeModal }) => (
      <React.Fragment>
        <Dialog id="ID" size="sm" onClose={ () => closeModal('ID') }>
          { ({ args, onClose }) => (
            <React.Fragment>
              <Dialog.Header title="Mark Job as Completed" onClose={ onClose } />
              <Dialog.Body>
                <Paragraph>
                  Fagelia cancrivorous { args.foo } Curucaneca Echinocaris { args.bar } glassful
                  agronomics
                </Paragraph>
              </Dialog.Body>
              <Dialog.Footer>
                <Button color="neutral" variant="outlined" onClick={ onClose }>
                  Cancel
                </Button>
                <Button type="submit">Apply</Button>
              </Dialog.Footer>
            </React.Fragment>
          ) }
        </Dialog>
        <Button onClick={ () => openModal('ID', { foo: '00', bar: '00' }) }>Open</Button>
      </React.Fragment>
    ) }
  </ModalContext.Consumer>
);

withState.story = {
  name: 'with state',
};
