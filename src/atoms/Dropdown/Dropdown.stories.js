// @flow

import React from 'react';

export default (asStory: *) => {
  asStory('ATOMS/Dropdown', module, (story, { Dropdown, Button, Icon, Menu }) => {
    story
      .add('default', () => (
        <Dropdown.Plate defaultOpen>
          <Dropdown.Head><Button>Head</Button></Dropdown.Head>
          <Dropdown.Body>Body</Dropdown.Body>
        </Dropdown.Plate>
      ))
      .add('with pin to right', () => (
        <Dropdown.Plate defaultOpen>
          <Dropdown.Head><Button>Head</Button></Dropdown.Head>
          <Dropdown.Body pin="right">Body</Dropdown.Body>
        </Dropdown.Plate>
      ))
      .add('with stretch target', () => (
        <Dropdown.Plate defaultOpen>
          <Dropdown.Head stretch><Button stretch>Head</Button></Dropdown.Head>
          <Dropdown.Body>Body</Dropdown.Body>
        </Dropdown.Plate>
      ))
      .add('with stretch body', () => (
        <Dropdown.Plate defaultOpen={ false }>
          <Dropdown.Head stretch><Button stretch>Head</Button></Dropdown.Head>
          <Dropdown.Body stretch>Body</Dropdown.Body>
        </Dropdown.Plate>
      ))
      .add('with custom body width', () => (
        <Dropdown.Plate defaultOpen>
          <Dropdown.Head><Button>Head</Button></Dropdown.Head>
          <Dropdown.Body width={ 40 }>Body</Dropdown.Body>
        </Dropdown.Plate>
      ))
      .add('with custom offset', () => (
        <Dropdown.Plate defaultOpen>
          <Dropdown.Head><Button>Head</Button></Dropdown.Head>
          <Dropdown.Body offset="lg">Body</Dropdown.Body>
        </Dropdown.Plate>
      ))
      .add('with dark background', () => (
        <Dropdown.Plate defaultOpen>
          <Dropdown.Head><Button>Head</Button></Dropdown.Head>
          <Dropdown.Body background="dark">Body</Dropdown.Body>
        </Dropdown.Plate>
      ))
      .add('without background', () => (
        <Dropdown.Plate defaultOpen>
          <Dropdown.Head><Button>Head</Button></Dropdown.Head>
          <Dropdown.Body background="none">Body</Dropdown.Body>
        </Dropdown.Plate>
      ))
      .add('without close on outside click', () => (
        <Dropdown.Plate defaultOpen>
          <Dropdown.Head><Button>Head</Button></Dropdown.Head>
          <Dropdown.Body closeOnClickOutside={ false }>Body</Dropdown.Body>
        </Dropdown.Plate>
      ))
      .add('with force render', () => (
        <Dropdown.Plate defaultOpen>
          <Dropdown.Head><Button>Head</Button></Dropdown.Head>
          <Dropdown.Body forceRender>Body</Dropdown.Body>
        </Dropdown.Plate>
      ))
      .add('with menu', () => (
        <Dropdown.Plate defaultOpen={ false }>
          <Dropdown.Head>
            <Icon name="Dots" color="LIGHT_GRAY2" />
          </Dropdown.Head>
          <Dropdown.Body forceRender>
            <Menu.Plate>
              <Menu.Item>Tramman</Menu.Item>
              <Menu.Item>Gripman</Menu.Item>
              <Menu.Item>Proalliance</Menu.Item>
            </Menu.Plate>
          </Dropdown.Body>
        </Dropdown.Plate>
      ));
  });
};
