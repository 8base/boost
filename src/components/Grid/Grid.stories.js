import React from 'react';
import styled from '@emotion/styled';
import { Grid, Column, Row } from '../../';

const ColorBlock = styled('div')(props => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '100px',
  minHeight: '30px',
  backgroundColor: props.color,
  border: '1px solid gray',
}));

const BorderBlock = styled('div')({
  border: '1px solid gray',
});

const Block = ({ children }) => <ColorBlock color="#e2e4e9">{ children }</ColorBlock>;

export default {
  title: 'Components/Grid',
  component: Grid,
};

export const defaultStory = () => (
  <Grid.Layout>
    <Grid.Box>
      <Block>1</Block>
    </Grid.Box>
    <Grid.Box>
      <Block>2</Block>
    </Grid.Box>
    <Grid.Box>
      <Block>3</Block>
    </Grid.Box>
  </Grid.Layout>
);

defaultStory.story = {
  name: 'default',
};

export const withInline = () => (
  <Grid.Layout inline columns="auto auto auto">
    <Grid.Box>
      <Block>1</Block>
    </Grid.Box>
    <Grid.Box>
      <Block>2</Block>
    </Grid.Box>
    <Grid.Box>
      <Block>3</Block>
    </Grid.Box>
  </Grid.Layout>
);

withInline.story = {
  name: 'with inline',
};

export const withGap = () => (
  <Column>
    <Grid.Layout inline gap="none" columns="auto auto auto">
      <Grid.Box>
        <Block>none</Block>
      </Grid.Box>
      <Grid.Box>
        <Block />
      </Grid.Box>
      <Grid.Box>
        <Block />
      </Grid.Box>
    </Grid.Layout>
    <Grid.Layout inline gap="xs" columns="auto auto auto">
      <Grid.Box>
        <Block>xs</Block>
      </Grid.Box>
      <Grid.Box>
        <Block />
      </Grid.Box>
      <Grid.Box>
        <Block />
      </Grid.Box>
    </Grid.Layout>
    <Grid.Layout inline gap="sm" columns="auto auto auto">
      <Grid.Box>
        <Block>sm</Block>
      </Grid.Box>
      <Grid.Box>
        <Block />
      </Grid.Box>
      <Grid.Box>
        <Block />
      </Grid.Box>
    </Grid.Layout>
    <Grid.Layout inline gap="md" columns="auto auto auto">
      <Grid.Box>
        <Block>md</Block>
      </Grid.Box>
      <Grid.Box>
        <Block />
      </Grid.Box>
      <Grid.Box>
        <Block />
      </Grid.Box>
    </Grid.Layout>
    <Grid.Layout inline gap="lg" columns="auto auto auto">
      <Grid.Box>
        <Block>lg</Block>
      </Grid.Box>
      <Grid.Box>
        <Block />
      </Grid.Box>
      <Grid.Box>
        <Block />
      </Grid.Box>
    </Grid.Layout>
    <Grid.Layout inline gap="xl" columns="auto auto auto">
      <Grid.Box>
        <Block>xl</Block>
      </Grid.Box>
      <Grid.Box>
        <Block />
      </Grid.Box>
      <Grid.Box>
        <Block />
      </Grid.Box>
    </Grid.Layout>
    <Grid.Layout inline gap="xxl" columns="auto auto auto">
      <Grid.Box>
        <Block>xxl</Block>
      </Grid.Box>
      <Grid.Box>
        <Block />
      </Grid.Box>
      <Grid.Box>
        <Block />
      </Grid.Box>
    </Grid.Layout>
    <Grid.Layout inline gap="custom" customGap="64px" columns="auto auto auto">
      <Grid.Box>
        <Block>custom</Block>
      </Grid.Box>
      <Grid.Box>
        <Block />
      </Grid.Box>
      <Grid.Box>
        <Block />
      </Grid.Box>
    </Grid.Layout>
  </Column>
);

withGap.story = {
  name: 'with gap',
};

export const withPadding = () => (
  <Row>
    <BorderBlock>
      <Grid.Layout inline padding="none" columns="auto auto auto">
        <Grid.Box>
          <Block>none</Block>
        </Grid.Box>
      </Grid.Layout>
    </BorderBlock>
    <BorderBlock>
      <Grid.Layout inline padding="xs" columns="auto auto auto">
        <Grid.Box>
          <Block>xs</Block>
        </Grid.Box>
      </Grid.Layout>
    </BorderBlock>
    <BorderBlock>
      <Grid.Layout inline padding="sm" columns="auto auto auto">
        <Grid.Box>
          <Block>sm</Block>
        </Grid.Box>
      </Grid.Layout>
    </BorderBlock>
    <BorderBlock>
      <Grid.Layout inline padding="md" columns="auto auto auto">
        <Grid.Box>
          <Block>md</Block>
        </Grid.Box>
      </Grid.Layout>
    </BorderBlock>
    <BorderBlock>
      <Grid.Layout inline padding="lg" columns="auto auto auto">
        <Grid.Box>
          <Block>lg</Block>
        </Grid.Box>
      </Grid.Layout>
    </BorderBlock>
    <BorderBlock>
      <Grid.Layout inline padding="xl" columns="auto auto auto">
        <Grid.Box>
          <Block>xl</Block>
        </Grid.Box>
      </Grid.Layout>
    </BorderBlock>
  </Row>
);

withPadding.story = {
  name: 'with padding',
};

export const withStretch = () => (
  <Grid.Layout columns="300px minmax(200px, 1fr) 200px">
    <Grid.Box>
      <Block>300px</Block>
    </Grid.Box>
    <Grid.Box>
      <Block>stretch</Block>
    </Grid.Box>
    <Grid.Box>
      <Block>200px</Block>
    </Grid.Box>
  </Grid.Layout>
);

withStretch.story = {
  name: 'with stretch',
};

export const withGridAreas = () => (
  <Grid.Layout
    columns="auto"
    areas={ [
      ['avatar', 'info', 'rating', 'rate', 'actions'],
      ['avatar', 'skills', 'skills', 'skills', 'actions'],
    ] }
  >
    <Grid.Box area="avatar">
      <Block>avatar</Block>
    </Grid.Box>
    <Grid.Box area="info">
      <Block>info</Block>
    </Grid.Box>
    <Grid.Box area="rating">
      <Block>rating</Block>
    </Grid.Box>
    <Grid.Box area="rate">
      <Block>rate</Block>
    </Grid.Box>
    <Grid.Box area="actions">
      <Block>actions</Block>
    </Grid.Box>
    <Grid.Box area="skills">
      <Block>skills</Block>
    </Grid.Box>
  </Grid.Layout>
);

withGridAreas.story = {
  name: 'with grid areas',
};
