// @flow
import React from 'react';
import { Grid } from './';

describe('<Grid />', () => {

  it('should render grid components', () => {
    const wrapper = mount(
      <BoostProvider>
        <Grid.Layout
          columns="auto"
          rows="auto"
          autoColumns="auto"
          justifyContent="center"
          alignContent="center"
          justifyItems="center"
          alignItems="center"
          areas={ [
            ['avatar', 'info', 'rating', 'rate', 'actions'],
            ['avatar', 'skills', 'skills', 'skills', 'actions'],
          ] }>
          <Grid.Box>1</Grid.Box>
          <Grid.Box>2</Grid.Box>
          <Grid.Box
            columnStart="auto"
            columnEnd="auto"
            rowStart="auto"
            rowEnd="auto"
            column="auto"
            row="auto"
            justifySelf="center"
            alignSelf="center"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            textAlign="center"
            area="avatar"
          >
            3
          </Grid.Box>
        </Grid.Layout>
      </BoostProvider>,
    );

    expect(wrapper.find(Grid.Box).at(0).text()).toBe('1');
    expect(wrapper.find(Grid.Box).at(1).text()).toBe('2');
    expect(wrapper.find(Grid.Box).at(2).text()).toBe('3');
  });

  it('should render grid box with scrollabe div', () => {
    const wrapper = shallow(<Grid.Box scrollable />);

    expect(wrapper.findWhere(el => el.props().style && el.props().style.position === 'absolute')).toHaveLength(1);
  });
});
