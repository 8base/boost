import React from 'react';
import styled from 'react-emotion';

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

export default (asStory) => {
  asStory('Components/Grid', module, (story, { Grid, Column, Row }) => {
    story
      .add('default', () => (
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
      ))

      .add('with inline', () => (
        <Grid.Layout inline columns="auto auto auto">
          <Grid.Box><Block>1</Block></Grid.Box>
          <Grid.Box><Block>2</Block></Grid.Box>
          <Grid.Box><Block>3</Block></Grid.Box>
        </Grid.Layout>
      ))

      .add('with gap', () => (
        <Column>
          <Grid.Layout inline gap="none" columns="auto auto auto">
            <Grid.Box><Block>none</Block></Grid.Box>
            <Grid.Box><Block /></Grid.Box>
            <Grid.Box><Block /></Grid.Box>
          </Grid.Layout>
          <Grid.Layout inline gap="xs" columns="auto auto auto">
            <Grid.Box><Block>xs</Block></Grid.Box>
            <Grid.Box><Block /></Grid.Box>
            <Grid.Box><Block /></Grid.Box>
          </Grid.Layout>
          <Grid.Layout inline gap="sm" columns="auto auto auto">
            <Grid.Box><Block>sm</Block></Grid.Box>
            <Grid.Box><Block /></Grid.Box>
            <Grid.Box><Block /></Grid.Box>
          </Grid.Layout>
          <Grid.Layout inline gap="md" columns="auto auto auto">
            <Grid.Box><Block>md</Block></Grid.Box>
            <Grid.Box><Block /></Grid.Box>
            <Grid.Box><Block /></Grid.Box>
          </Grid.Layout>
          <Grid.Layout inline gap="lg" columns="auto auto auto">
            <Grid.Box><Block>lg</Block></Grid.Box>
            <Grid.Box><Block /></Grid.Box>
            <Grid.Box><Block /></Grid.Box>
          </Grid.Layout>
          <Grid.Layout inline gap="xl" columns="auto auto auto">
            <Grid.Box><Block>xl</Block></Grid.Box>
            <Grid.Box><Block /></Grid.Box>
            <Grid.Box><Block /></Grid.Box>
          </Grid.Layout>
          <Grid.Layout inline gap="xxl" columns="auto auto auto">
            <Grid.Box><Block>xxl</Block></Grid.Box>
            <Grid.Box><Block /></Grid.Box>
            <Grid.Box><Block /></Grid.Box>
          </Grid.Layout>
        </Column>
      ))

      .add('with padding', () => (
        <Row>
          <BorderBlock>
            <Grid.Layout inline padding="none" columns="auto auto auto">
              <Grid.Box><Block>none</Block></Grid.Box>
            </Grid.Layout>
          </BorderBlock>
          <BorderBlock>
            <Grid.Layout inline padding="xs" columns="auto auto auto">
              <Grid.Box><Block>xs</Block></Grid.Box>
            </Grid.Layout>
          </BorderBlock>
          <BorderBlock>
            <Grid.Layout inline padding="sm" columns="auto auto auto">
              <Grid.Box><Block>sm</Block></Grid.Box>
            </Grid.Layout>
          </BorderBlock>
          <BorderBlock>
            <Grid.Layout inline padding="md" columns="auto auto auto">
              <Grid.Box><Block>md</Block></Grid.Box>
            </Grid.Layout>
          </BorderBlock>
          <BorderBlock>
            <Grid.Layout inline padding="lg" columns="auto auto auto">
              <Grid.Box><Block>lg</Block></Grid.Box>
            </Grid.Layout>
          </BorderBlock>
          <BorderBlock>
            <Grid.Layout inline padding="xl" columns="auto auto auto">
              <Grid.Box><Block>xl</Block></Grid.Box>
            </Grid.Layout>
          </BorderBlock>
        </Row>
      ))

      .add('with stretch', () => (
        <Grid.Layout columns="300px minmax(200px, 1fr) 200px">
          <Grid.Box><Block>300px</Block></Grid.Box>
          <Grid.Box><Block>stretch</Block></Grid.Box>
          <Grid.Box><Block>200px</Block></Grid.Box>
        </Grid.Layout>
      ))

      .add('with grid areas', () => (
        <Grid.Layout columns="auto" areas={ [
          ['avatar', 'info', 'rating', 'rate', 'actions'],
          ['avatar', 'skills', 'skills', 'skills', 'actions'],
        ] }>
          <Grid.Box area="avatar"><Block>avatar</Block></Grid.Box>
          <Grid.Box area="info"><Block>info</Block></Grid.Box>
          <Grid.Box area="rating"><Block>rating</Block></Grid.Box>
          <Grid.Box area="rate"><Block>rate</Block></Grid.Box>
          <Grid.Box area="actions"><Block>actions</Block></Grid.Box>
          <Grid.Box area="skills"><Block>skills</Block></Grid.Box>
        </Grid.Layout>
      ));
  });
};
