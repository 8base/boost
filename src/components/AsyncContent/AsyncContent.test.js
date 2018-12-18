// @flow
import React from 'react';
import { AsyncContent } from './AsyncContent';
import { Loader } from '../Loader';

describe('<AsyncContent />', () => {
  it('should render loader with passed props ', () => {
    const wrapper = shallow(
      <AsyncContent loading stretch>
        <div className="some-children" />
      </AsyncContent>,
    );

    expect(wrapper.find('.some-children')).toHaveLength(0);
    expect(wrapper.find(Loader)).toHaveLength(1);
    expect(wrapper.find(Loader).props().stretch).toBeTruthy();
  });

  it('should render children ', () => {
    const wrapper = shallow(
      <AsyncContent loading={ false }>
        <div className="some-children" />
      </AsyncContent>,
    );

    expect(wrapper.find('.some-children')).toHaveLength(1);
    expect(wrapper.find(Loader)).toHaveLength(0);
  });
});
