// @flow

import React from 'react';

export default (asStory: *) => {
  asStory('Components/Dropdown', module, (story, { Dropdown, Button, Icon, Menu }) => {
    story
      .add('default', () => (
        <Dropdown defaultOpen>
          <Dropdown.Head><Button>Head</Button></Dropdown.Head>
          <Dropdown.Body>Body</Dropdown.Body>
        </Dropdown>
      ))
      .add('with pin to right', () => (
        <Dropdown defaultOpen>
          <Dropdown.Head><Button>Head</Button></Dropdown.Head>
          <Dropdown.Body pin="right">Body</Dropdown.Body>
        </Dropdown>
      ))
      .add('with stretch target', () => (
        <Dropdown defaultOpen>
          <Dropdown.Head stretch><Button stretch>Head</Button></Dropdown.Head>
          <Dropdown.Body>Body</Dropdown.Body>
        </Dropdown>
      ))
      .add('with stretch body', () => (
        <Dropdown defaultOpen={ false }>
          <Dropdown.Head stretch><Button stretch>Head</Button></Dropdown.Head>
          <Dropdown.Body stretch>Body</Dropdown.Body>
        </Dropdown>
      ))
      .add('with custom body width', () => (
        <Dropdown defaultOpen>
          <Dropdown.Head><Button>Head</Button></Dropdown.Head>
          <Dropdown.Body width={ 40 }>Body</Dropdown.Body>
        </Dropdown>
      ))
      .add('with custom offset', () => (
        <Dropdown defaultOpen>
          <Dropdown.Head><Button>Head</Button></Dropdown.Head>
          <Dropdown.Body offset="lg">Body</Dropdown.Body>
        </Dropdown>
      ))
      .add('with dark background', () => (
        <Dropdown defaultOpen>
          <Dropdown.Head><Button>Head</Button></Dropdown.Head>
          <Dropdown.Body background="dark">Body</Dropdown.Body>
        </Dropdown>
      ))
      .add('without background', () => (
        <Dropdown defaultOpen>
          <Dropdown.Head><Button>Head</Button></Dropdown.Head>
          <Dropdown.Body background="none">Body</Dropdown.Body>
        </Dropdown>
      ))
      .add('without close on outside click', () => (
        <Dropdown defaultOpen>
          <Dropdown.Head><Button>Head</Button></Dropdown.Head>
          <Dropdown.Body closeOnClickOutside={ false }>Body</Dropdown.Body>
        </Dropdown>
      ))
      .add('with force render', () => (
        <Dropdown defaultOpen>
          <Dropdown.Head><Button>Head</Button></Dropdown.Head>
          <Dropdown.Body forceRender>Body</Dropdown.Body>
        </Dropdown>
      ))
      .add('with menu', () => (
        <Dropdown defaultOpen={ false }>
          <Dropdown.Head>
            <Icon name="Dots" color="LIGHT_GRAY2" />
          </Dropdown.Head>
          <Dropdown.Body forceRender>
            <Menu>
              <Menu.Item>Tramman</Menu.Item>
              <Menu.Item>Gripman</Menu.Item>
              <Menu.Item>Proalliance</Menu.Item>
            </Menu>
          </Dropdown.Body>
        </Dropdown>
      ));
  });
};
