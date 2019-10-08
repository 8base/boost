import React from 'react';
import styled from '@emotion/styled';
import { Card } from '../../';

const ShortDiv = styled('div')({
  height: '300px',
  maxHeight: '300px',
  '& > *': {
    maxHeight: '100%',
  },
});

export default {
  title: 'Components/Card',
  component: Card,
};

export const defaultStory = () => (
  <Card>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      Body
      <br />
      <br />
      <br />
      <br />
    </Card.Body>
    <Card.Footer>Footer</Card.Footer>
  </Card>
);

defaultStory.story = {
  name: 'default',
};

export const withCustomPaddings = () => (
  <Card>
    <Card.Header padding="xl">Header</Card.Header>
    <Card.Body padding="xl">
      Body
      <br />
      <br />
      <br />
      <br />
    </Card.Body>
    <Card.Footer padding="xl">Footer</Card.Footer>
  </Card>
);

withCustomPaddings.story = {
  name: 'with custom paddings',
};

export const withMultipleSections = () => (
  <Card>
    <Card.Header>Header</Card.Header>
    <Card.Body padding="none">
      <Card.Section>
        Section
        <br />
        <br />
        <br />
        <br />
      </Card.Section>
      <Card.Section>
        Section
        <br />
        <br />
        <br />
        <br />
      </Card.Section>
      <Card.Section>
        Section
        <br />
        <br />
        <br />
        <br />
      </Card.Section>
    </Card.Body>
    <Card.Footer>Footer</Card.Footer>
  </Card>
);

withMultipleSections.story = {
  name: 'with multiple sections',
};

export const withScrollableBody = () => (
  <ShortDiv>
    <Card>
      <Card.Header>Header</Card.Header>
      <Card.Body padding="none" scrollable>
        <Card.Section>
          Section
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Card.Section>
        <Card.Section>
          Section
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Card.Section>
        <Card.Section>
          Section
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Card.Section>
      </Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card>
  </ShortDiv>
);

withScrollableBody.story = {
  name: 'with scrollable body',
};

export const withoutFooter = () => (
  <Card>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      Body
      <br />
      <br />
      <br />
      <br />
    </Card.Body>
  </Card>
);

withoutFooter.story = {
  name: 'without footer',
};

export const withoutHeader = () => (
  <Card>
    <Card.Body>
      Body
      <br />
      <br />
      <br />
      <br />
    </Card.Body>
    <Card.Footer>Footer</Card.Footer>
  </Card>
);

withoutHeader.story = {
  name: 'without header',
};
