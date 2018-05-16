// @flow

import React, { Fragment } from 'react';
import styled from 'react-emotion';

const Block = styled('div')(props => ({
  display: 'flex',
  minWidth: '100px',
  minHeight: '100px',
  backgroundColor: props.color,
}));

const Blocks = () => (
  <Fragment>
    <Block color="chocolate" />
    <Block color="red" />
    <Block color="orange" />
    <Block color="green" />
    <Block color="purple" />
  </Fragment>
);

export default (asStory: *) => {
  asStory('ATOMS/FlexLayout', module, (story, { Row, Column }) => {
    story
      .add('default Row', () => (
        <Row>
          <Blocks />
        </Row>
      ))
      .add('default Column', () => (
        <Column>
          <Blocks />
        </Column>
      ))
      .add('with custom justifyContent', () => (
        <Row justifyContent="end">
          <Blocks />
        </Row>
      ))
      .add('with custom alignContent', () => (
        <Column alignItems="stretch">
          <Blocks />
        </Column>
      ))
      .add('with custom gap', () => (
        <Fragment>
          <Row gap="md">
            <Blocks />
          </Row>
          <Column gap="md" offsetY="md">
            <Blocks />
          </Column>
        </Fragment>
      ))
      .add('with custom offset', () => (
        <Row offsetY="xl" offsetX="xl">
          <Blocks />
        </Row>
      ))
      .add('with grow children', () => (
        <Row growChildren>
          <Blocks />
        </Row>
      ))
      .add('with pointer cursor', () => (
        <Row cursor="pointer">
          <Blocks />
        </Row>
      ));
  });
};

