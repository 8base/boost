import React from 'react';

import { storiesOf } from '@storybook/react';
import { Tabs, Row, Button } from '../../';

storiesOf('Components/Tabs', module)
  .add('default', () => (
    <Tabs defaultSelectedTabId="1">
      <Row gap="xs">
        <Tabs.Title tabId="1"><Button>Tab-1</Button></Tabs.Title>
        <Tabs.Title tabId="2"><Button>Tab-2</Button></Tabs.Title>
      </Row>
      <Tabs.Panel tabId="1">Body-1</Tabs.Panel>
      <Tabs.Panel tabId="2">Body-2</Tabs.Panel>
    </Tabs>
  ))
  .add('with force render', () => (
    <Tabs defaultSelectedTabId="1">
      <Row gap="xs">
        <Tabs.Title tabId="1"><Button>Tab-1</Button></Tabs.Title>
        <Tabs.Title tabId="2"><Button>Tab-2</Button></Tabs.Title>
      </Row>
      <Tabs.Panel tabId="1" forceRender>Body-1</Tabs.Panel>
      <Tabs.Panel tabId="2" forceRender>Body-2</Tabs.Panel>
    </Tabs>
  ))
  .add('with selected title', () => (
    <Tabs defaultSelectedTabId="1">
      <Row gap="xs">
        <Tabs.Title tabId="1">
          { ({ selected }) => <Button kind={ selected ? 'primary' : 'neutral' }>Tab-1</Button> }
        </Tabs.Title>
        <Tabs.Title tabId="2">
          { ({ selected }) => <Button kind={ selected ? 'primary' : 'neutral' }>Tab-2</Button> }
        </Tabs.Title>
        <Tabs.Title tabId="3">
          { ({ selected }) => <Button kind={ selected ? 'primary' : 'neutral' }>Tab-3</Button> }
        </Tabs.Title>
      </Row>
      <Tabs.Panel tabId="1" forceRender>Body-1</Tabs.Panel>
      <Tabs.Panel tabId="2" forceRender>Body-2</Tabs.Panel>
      <Tabs.Panel tabId="3" forceRender>Body-3</Tabs.Panel>
    </Tabs>
  ));

