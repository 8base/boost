import React from 'react';

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
      ));
  });
};
