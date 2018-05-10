import React from 'react';
import renderer from 'react-test-renderer';
import { Tag } from '../';

it('As developer, I can use tag for collect common props.', () => {
  const tree = renderer.create(<Tag tagName="div" onClick={ () => null }>children</Tag>);

  expect(tree.toJSON()).toMatchSnapshot();
});
