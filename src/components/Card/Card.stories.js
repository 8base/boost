import React from 'react';
import styled from 'react-emotion';

const ShortDiv = styled('div')({
  height: '300px',
  maxHeight: '300px',
  '& > *': {
    maxHeight: '100%',
  },
});

export default (asStory) => {
  asStory('Components/Card', module, (story, { Card }) => {
    story
      .add('default', () => (
        <Card>
          <Card.Header>Header</Card.Header>
          <Card.Body>Body<br /><br /><br /><br /></Card.Body>
          <Card.Footer>Footer</Card.Footer>
        </Card>
      ))
      .add('with custom paddings', () => (
        <Card>
          <Card.Header padding="xl">Header</Card.Header>
          <Card.Body padding="xl">Body<br /><br /><br /><br /></Card.Body>
          <Card.Footer padding="xl">Footer</Card.Footer>
        </Card>
      ))
      .add('with multiple sections', () => (
        <Card>
          <Card.Header>Header</Card.Header>
          <Card.Body padding="none">
            <Card.Section>Section<br /><br /><br /><br /></Card.Section>
            <Card.Section>Section<br /><br /><br /><br /></Card.Section>
            <Card.Section>Section<br /><br /><br /><br /></Card.Section>
          </Card.Body>
          <Card.Footer>Footer</Card.Footer>
        </Card>
      ))
      .add('with scrollable body', () => (
        <ShortDiv>
          <Card>
            <Card.Header>Header</Card.Header>
            <Card.Body padding="none" scrollable>
              <Card.Section>Section<br /><br /><br /><br /><br /><br /><br /><br /></Card.Section>
              <Card.Section>Section<br /><br /><br /><br /><br /><br /><br /><br /></Card.Section>
              <Card.Section>Section<br /><br /><br /><br /><br /><br /><br /><br /></Card.Section>
            </Card.Body>
            <Card.Footer>Footer</Card.Footer>
          </Card>
        </ShortDiv>
      ))
      .add('without footer', () => (
        <Card>
          <Card.Header>Header</Card.Header>
          <Card.Body>Body<br /><br /><br /><br /></Card.Body>
        </Card>
      ))
      .add('without header', () => (
        <Card>
          <Card.Body>Body<br /><br /><br /><br /></Card.Body>
          <Card.Footer>Footer</Card.Footer>
        </Card>
      ));
  });
};
