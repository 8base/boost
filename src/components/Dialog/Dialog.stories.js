import React from 'react';

import { ModalContext, Dialog, Paragraph, Button, Column } from '../../';

export default {
  title: 'Components/Dialog',
};

export const defaultStory = () => (
  <Dialog size="sm" isOpen data-e2e-id="default-dialog">
    <Dialog.Header title="Mark Job as Completed" />
    <Dialog.Body>
      <Paragraph>
        Fagelia cancrivorous Nahor Curucaneca Echinocaris intrafissural glassful agronomics
      </Paragraph>
    </Dialog.Body>
    <Dialog.Footer>
      <Button color="neutral" variant="outlined">
        Cancel
      </Button>
      <Button type="submit">Apply</Button>
    </Dialog.Footer>
  </Dialog>
);

defaultStory.story = {
  name: 'default',
};

export const withStretch = () => (
  <Dialog stretch size="sm" isOpen data-e2e-id="default-dialog">
    <Dialog.Header title="Mark Job as Completed" />
    <Dialog.Body>
      <Paragraph>
        Fagelia cancrivorous Nahor Curucaneca Echinocaris intrafissural glassful agronomics
      </Paragraph>
    </Dialog.Body>
    <Dialog.Footer>
      <Button color="neutral" variant="outlined">
        Cancel
      </Button>
      <Button type="submit">Apply</Button>
    </Dialog.Footer>
  </Dialog>
);

withStretch.story = {
  name: 'with stretch',
};

export const withLargeSize = () => (
  <Dialog size="xl" isOpen data-e2e-id="default-dialog">
    <Dialog.Header title="Mark Job as Completed" />
    <Dialog.Body>
      <Paragraph>
        Fagelia cancrivorous Nahor Curucaneca Echinocaris intrafissural glassful agronomics
      </Paragraph>
    </Dialog.Body>
    <Dialog.Footer>
      <Button color="neutral" variant="outlined">
        Cancel
      </Button>
      <Button type="submit">Apply</Button>
    </Dialog.Footer>
  </Dialog>
);

withLargeSize.story = {
  name: 'with large size',
};

export const withScroll = () => (
  <Dialog size="sm" isOpen data-e2e-id="default-dialog" stretch>
    <Dialog.Header title="Mark Job as Completed" />
    <Dialog.Body scrollable>
      <Column>
        {new Array(100).fill('').map(() => (
          <Paragraph key="">
            Fagelia cancrivorous Nahor Curucaneca Echinocaris intrafissural glassful agronomics
          </Paragraph>
        ))}
      </Column>
    </Dialog.Body>
    <Dialog.Footer>
      <Button color="neutral" variant="outlined">
        Cancel
      </Button>
      <Button type="submit">Apply</Button>
    </Dialog.Footer>
  </Dialog>
);

withScroll.story = {
  name: 'with scroll',
};

export const withState = () => (
  <ModalContext.Consumer>
    {({ openModal, closeModal }) => (
      <React.Fragment>
        <Dialog id="ID" size="sm" onClose={() => closeModal('ID')}>
          {({ args, onClose }) => (
            <React.Fragment>
              <Dialog.Header title="Mark Job as Completed" onClose={onClose} />
              <Dialog.Body>
                <Paragraph>
                  Fagelia cancrivorous {args.foo} Curucaneca Echinocaris {args.bar} glassful
                  agronomics
                </Paragraph>
              </Dialog.Body>
              <Dialog.Footer>
                <Button color="neutral" variant="outlined" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit">Apply</Button>
              </Dialog.Footer>
            </React.Fragment>
          )}
        </Dialog>
        <Button onClick={() => openModal('ID', { foo: '00', bar: '00' })}>Open</Button>
      </React.Fragment>
    )}
  </ModalContext.Consumer>
);

withState.story = {
  name: 'with state',
};
