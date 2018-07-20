import React from 'react';
import renderer from 'react-test-renderer';
import { Tag } from '../';

it('As developer, I can use tag for collect common props.', () => {
  const tree = renderer.create(<Tag tagName="div" onClick={ () => null }>children</Tag>);

  expect(tree.toJSON()).toMatchSnapshot();
});

it('As developer, I can pass data attributes to the tag.', () => {
  const tree = renderer.create(<Tag tagName="div" data-attr={ 10 } />);

  expect(tree.toJSON()).toMatchSnapshot();
});
