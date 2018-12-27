// @flow

import React, { Fragment } from 'react';
import styled from 'react-emotion';

const ColorBlock = styled('div')(props => ({
  display: 'flex',
  minWidth: '70px',
  minHeight: '70px',
  backgroundColor: props.color,
}));

const Blocks = () => (
  <Fragment>
    <ColorBlock color="#805500" />
    <ColorBlock color="#990000" />
    <ColorBlock color="#e68a00" />
    <ColorBlock color="#008000" />
    <ColorBlock color="#5900b3" />
  </Fragment>
);


const BorderBlock = styled('div')({
  border: '1px solid gray',
});

const Block = () => (
  <ColorBlock color="#e68a00" />
);


export default (asStory: *) => {
  asStory('Components/FlexLayout', module, (story, { Row, Column }) => {
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
        <Column>
          <Row gap="xs">
            <Blocks />
          </Row>
          <Row gap="sm">
            <Blocks />
          </Row>
          <Row gap="md">
            <Blocks />
          </Row>
          <Row gap="lg">
            <Blocks />
          </Row>
          <Row gap="xl">
            <Blocks />
          </Row>
        </Column>
      ))

      .add('with custom offset', () => (
        <Row>
          <BorderBlock>
            <Row offsetY="none" offsetX="none"><Block /></Row>
          </BorderBlock>
          <BorderBlock>
            <Row offsetY="xs" offsetX="xs"><Block /></Row>
          </BorderBlock>
          <BorderBlock>
            <Row offsetY="sm" offsetX="sm"><Block /></Row>
          </BorderBlock>
          <BorderBlock>
            <Row offsetY="md" offsetX="md"><Block /></Row>
          </BorderBlock>
          <BorderBlock>
            <Row offsetY="lg" offsetX="lg"><Block /></Row>
          </BorderBlock>
          <BorderBlock>
            <Row offsetY="xl" offsetX="xl"><Block /></Row>
          </BorderBlock>
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

