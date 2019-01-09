// @flow

import React, { Fragment } from 'react';
import styled from 'react-emotion';

const ColorBlock = styled('div')(props => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '100px',
  padding: '0 10px',
  minHeight: '30px',
  backgroundColor: props.color,
  border: '1px solid gray',
}));

const BorderBlock = styled('div')({
  border: '1px solid gray',
});

const Blocks = ({ children }: any) => (
  <Fragment>
    <ColorBlock color="#e2e4e9">{ children }</ColorBlock>
    <ColorBlock color="#e2e4e9" />
    <ColorBlock color="#e2e4e9" />
    <ColorBlock color="#e2e4e9" />
    <ColorBlock color="#e2e4e9" />
  </Fragment>
);

const Block = ({ children }: any) => (
  <ColorBlock color="#e2e4e9" >{ children }</ColorBlock>
);


export default (asStory: *) => {
  asStory('Components/FlexLayout', module, (story, { Row, Column }) => {
    story
      .add('default Row', () => (
        <Row>
          <Blocks>Row</Blocks>
        </Row>
      ))

      .add('default Column', () => (
        <Column>
          <Blocks>Column</Blocks>
        </Column>
      ))

      .add('with justifyContent', () => (
        <Row justifyContent="end">
          <Blocks>justifyContent="end"</Blocks>
        </Row>
      ))

      .add('with alignContent', () => (
        <Column alignItems="stretch">
          <Blocks>alignItems="stretch"</Blocks>
        </Column>
      ))

      .add('with gap', () => (
        <Column>
          <Row gap="xs">
            <Blocks>xs</Blocks>
          </Row>
          <Row gap="sm">
            <Blocks>sm</Blocks>
          </Row>
          <Row gap="md">
            <Blocks>md</Blocks>
          </Row>
          <Row gap="lg">
            <Blocks>lg</Blocks>
          </Row>
          <Row gap="xl">
            <Blocks>xl</Blocks>
          </Row>
        </Column>
      ))

      .add('with offset', () => (
        <Row>
          <BorderBlock>
            <Row offsetY="none" offsetX="none">
              <Block>none</Block>
            </Row>
          </BorderBlock>
          <BorderBlock>
            <Row offsetY="xs" offsetX="xs">
              <Block>xs</Block>
            </Row>
          </BorderBlock>
          <BorderBlock>
            <Row offsetY="sm" offsetX="sm">
              <Block>sm</Block>
            </Row>
          </BorderBlock>
          <BorderBlock>
            <Row offsetY="md" offsetX="md">
              <Block>md</Block>
            </Row>
          </BorderBlock>
          <BorderBlock>
            <Row offsetY="lg" offsetX="lg">
              <Block>lg</Block>
            </Row>
          </BorderBlock>
          <BorderBlock>
            <Row offsetY="xl" offsetX="xl">
              <Block>xl</Block>
            </Row>
          </BorderBlock>
        </Row>
      ))

      .add('with grow children', () => (
        <Row growChildren>
          <Blocks>growChildren</Blocks>
        </Row>
      ))

      .add('with pointer cursor', () => (
        <Row cursor="pointer">
          <Blocks>cursor="pointer"</Blocks>
        </Row>
      ));
  });
};

