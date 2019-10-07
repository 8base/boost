// @flow

import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { Row, Column } from '../../';


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


export default {
  title: 'Components/FlexLayout',
  component: Row,
};

export const defaultRow = () => (
  <Row>
    <Blocks>Row</Blocks>
  </Row>
);

defaultRow.story = {
  name: 'default Row',
};

export const defaultColumn = () => (
  <Column>
    <Blocks>Column</Blocks>
  </Column>
);

defaultColumn.story = {
  name: 'default Column',
};

export const withJustifyContent = () => (
  <Row justifyContent="end">
    <Blocks>justifyContent="end"</Blocks>
  </Row>
);

withJustifyContent.story = {
  name: 'with justifyContent',
};

export const withAlignContent = () => (
  <Column alignItems="stretch">
    <Blocks>alignItems="stretch"</Blocks>
  </Column>
);

withAlignContent.story = {
  name: 'with alignContent',
};

export const withGap = () => (
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
);

withGap.story = {
  name: 'with gap',
};

export const withOffset = () => (
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
);

withOffset.story = {
  name: 'with offset',
};

export const withGrowChildren = () => (
  <Row growChildren>
    <Blocks>growChildren</Blocks>
  </Row>
);

withGrowChildren.story = {
  name: 'with grow children',
};

export const withPointerCursor = () => (
  <Row cursor="pointer">
    <Blocks>cursor="pointer"</Blocks>
  </Row>
);

withPointerCursor.story = {
  name: 'with pointer cursor',
};
