// @flow

import React from 'react';
import { Dropdown, Button, Icon, Menu, Column, Text, Row } from '../../';

const BodyContent = () => <div style={{ padding: '8px' }}>Body</div>;

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export const common = () => (
  <Column stretch growChildren alignItems="stretch">
    <Row>
      <Dropdown defaultOpen>
        <Dropdown.Head>
          <Button>Head</Button>
        </Dropdown.Head>
        <Dropdown.Body offset="none" background="white" closeOnClickOutside={ false }>
          <BodyContent />
        </Dropdown.Body>
      </Dropdown>
      <Dropdown defaultOpen>
        <Dropdown.Head>
          <Button>Head</Button>
        </Dropdown.Head>
        <Dropdown.Body offset="xs" background="white" closeOnClickOutside={ false }>
          <BodyContent />
        </Dropdown.Body>
      </Dropdown>
      <Dropdown defaultOpen>
        <Dropdown.Head>
          <Button>Head</Button>
        </Dropdown.Head>
        <Dropdown.Body offset="sm" background="white" closeOnClickOutside={ false }>
          <BodyContent />
        </Dropdown.Body>
      </Dropdown>
      <Dropdown defaultOpen>
        <Dropdown.Head>
          <Button>Head</Button>
        </Dropdown.Head>
        <Dropdown.Body offset="md" background="white" closeOnClickOutside={ false }>
          <BodyContent />
        </Dropdown.Body>
      </Dropdown>
      <Dropdown defaultOpen>
        <Dropdown.Head>
          <Button>Head</Button>
        </Dropdown.Head>
        <Dropdown.Body offset="lg" background="white" closeOnClickOutside={ false }>
          <BodyContent />
        </Dropdown.Body>
      </Dropdown>
      <Dropdown defaultOpen>
        <Dropdown.Head>
          <Button>Head</Button>
        </Dropdown.Head>
        <Dropdown.Body offset="xl" background="white" closeOnClickOutside={ false }>
          <BodyContent />
        </Dropdown.Body>
      </Dropdown>
    </Row>
    <br />
    <br />
    <br />
    <br />
    <Row>
      <Dropdown defaultOpen>
        <Dropdown.Head>
          <Button>Head</Button>
        </Dropdown.Head>
        <Dropdown.Body background="dark" closeOnClickOutside={ false }>
          <BodyContent />
        </Dropdown.Body>
      </Dropdown>
      <Dropdown defaultOpen>
        <Dropdown.Head>
          <Button>Head</Button>
        </Dropdown.Head>
        <Dropdown.Body background="white" closeOnClickOutside={ false }>
          <BodyContent />
        </Dropdown.Body>
      </Dropdown>
      <Dropdown defaultOpen>
        <Dropdown.Head>
          <Button>Head</Button>
        </Dropdown.Head>
        <Dropdown.Body closeOnClickOutside={ false }>
          <BodyContent />
        </Dropdown.Body>
      </Dropdown>
    </Row>
  </Column>
);

common.story = {
  name: 'common',
};

export const withPin = () => (
  <Column stretch growChildren alignItems="stretch">
    <Text>With default pin</Text>
    <Dropdown defaultOpen>
      <Dropdown.Head stretch>
        <Button stretch>Head</Button>
      </Dropdown.Head>
      <Dropdown.Body background="white">
        <BodyContent />
      </Dropdown.Body>
    </Dropdown>
    <br />
    <br />
    <br />
    <Text>With pin to right</Text>
    <Dropdown defaultOpen>
      <Dropdown.Head stretch>
        <Button stretch>Head</Button>
      </Dropdown.Head>
      <Dropdown.Body pin="right" background="white">
        <BodyContent />
      </Dropdown.Body>
    </Dropdown>
  </Column>
);

withPin.story = {
  name: 'with pin',
};

export const withStretch = () => (
  <Column stretch growChildren alignItems="stretch">
    <Text>With target stretch</Text>
    <Dropdown defaultOpen>
      <Dropdown.Head stretch>
        <Button stretch>Head</Button>
      </Dropdown.Head>
      <Dropdown.Body closeOnClickOutside={ false } background="white">
        <BodyContent />
      </Dropdown.Body>
    </Dropdown>
    <br />
    <br />
    <br />
    <Text>With body stretch</Text>
    <Dropdown defaultOpen>
      <Dropdown.Head stretch>
        <Button stretch>Head</Button>
      </Dropdown.Head>
      <Dropdown.Body stretch closeOnClickOutside={ false } background="white">
        <BodyContent />
      </Dropdown.Body>
    </Dropdown>
    <br />
    <br />
    <br />
    <Text>With custom body width</Text>
    <Dropdown defaultOpen>
      <Dropdown.Head stretch>
        <Button stretch>Head</Button>
      </Dropdown.Head>
      <Dropdown.Body width={ 170 } closeOnClickOutside={ false } background="white">
        <BodyContent />
      </Dropdown.Body>
    </Dropdown>
  </Column>
);

withStretch.story = {
  name: 'with stretch',
};

export const withoutCloseOnOutsideClick = () => (
  <Dropdown defaultOpen>
    <Dropdown.Head>
      <Button>Head</Button>
    </Dropdown.Head>
    <Dropdown.Body closeOnClickOutside={ false } background="white">
      <BodyContent />
    </Dropdown.Body>
  </Dropdown>
);

withoutCloseOnOutsideClick.story = {
  name: 'without close on outside click',
};

export const withForceRender = () => (
  <Dropdown defaultOpen>
    <Dropdown.Head>
      <Button>Head</Button>
    </Dropdown.Head>
    <Dropdown.Body forceRender background="white">
      <BodyContent />
    </Dropdown.Body>
  </Dropdown>
);

withForceRender.story = {
  name: 'with force render',
};

export const withMenu = () => (
  <Dropdown defaultOpen={ false }>
    <Dropdown.Head>
      <Icon name="More" color="LIGHT_GRAY2" />
    </Dropdown.Head>
    <Dropdown.Body forceRender>
      <Menu>
        <Menu.Item>Tramman</Menu.Item>
        <Menu.Item>Gripman</Menu.Item>
        <Menu.Item>Proalliance</Menu.Item>
      </Menu>
    </Dropdown.Body>
  </Dropdown>
);

withMenu.story = {
  name: 'with menu',
};
