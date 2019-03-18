// @flow

import React from 'react';

const BodyContent = () => <div style={{ padding: '8px' }}>Body</div>;

export default (asStory: *) => {
  asStory('Components/Dropdown', module, (story, { Dropdown, Button, Icon, Menu, Column, Text, Row }) => {
    story

      .add('common', () => (
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
      ))


      .add('with pin', () => (
        <Column stretch growChildren alignItems="stretch">
          <Text>With default pin</Text>
          <Dropdown defaultOpen>
            <Dropdown.Head stretch><Button stretch>Head</Button></Dropdown.Head>
            <Dropdown.Body background="white">
              <BodyContent />
            </Dropdown.Body>
          </Dropdown>
          <br />
          <br />
          <br />
          <Text>With pin to right</Text>
          <Dropdown defaultOpen>
            <Dropdown.Head stretch><Button stretch>Head</Button></Dropdown.Head>
            <Dropdown.Body pin="right" background="white">
              <BodyContent />
            </Dropdown.Body>
          </Dropdown>
        </Column>
      ))

      .add('with stretch', () => (
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
      ))

      .add('without close on outside click', () => (
        <Dropdown defaultOpen>
          <Dropdown.Head><Button>Head</Button></Dropdown.Head>
          <Dropdown.Body closeOnClickOutside={ false } background="white">
            <BodyContent />
          </Dropdown.Body>
        </Dropdown>
      ))

      .add('with force render', () => (
        <Dropdown defaultOpen>
          <Dropdown.Head><Button>Head</Button></Dropdown.Head>
          <Dropdown.Body forceRender background="white">
            <BodyContent />
          </Dropdown.Body>
        </Dropdown>
      ))

      .add('with menu', () => (
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
      ));
  });
};
