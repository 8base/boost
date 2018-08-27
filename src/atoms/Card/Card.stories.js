import React from 'react';
import styled from 'react-emotion';

const ShortDiv = styled('div')({
  height: '300px',
  maxHeight: '300px',
  '& > *': {
    maxHeight: '100%',
  },
});

const LongDiv = styled('div')({
  height: '600px',
});

export default (asStory) => {
  asStory('ATOMS/Card', module, (story, { Card }) => {
    story
      .add('default', () => (
        <Card.Plate>
          <Card.Header>Header</Card.Header>
          <Card.Body>Body<br /><br /><br /><br /></Card.Body>
          <Card.Footer>Footer </Card.Footer>
        </Card.Plate>
      ))
      .add('with custom offsets', () => (
        <Card.Plate offset="xl">
          <Card.Header>Header</Card.Header>
          <Card.Body >Body<br /><br /><br /><br /></Card.Body>
          <Card.Footer>Footer </Card.Footer>
        </Card.Plate>
      ))
      .add('without footer', () => (
        <Card.Plate>
          <Card.Header>Header</Card.Header>
          <Card.Body>Body<br /><br /><br /><br /></Card.Body>
        </Card.Plate>
      ))
      .add('without header', () => (
        <Card.Plate>
          <Card.Body>Body<br /><br /><br /><br /></Card.Body>
          <Card.Footer>Footer </Card.Footer>
        </Card.Plate>
      ))
      .add('with scrollable body', () => (
        <ShortDiv>
          <Card.Plate>
            <Card.Header>Header</Card.Header>
            <Card.Body scrollable>
              <LongDiv>
                Body
              </LongDiv>
            </Card.Body>
            <Card.Footer>Footer </Card.Footer>
          </Card.Plate>
        </ShortDiv>
      ));
  });
};
