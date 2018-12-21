// @flow
import React from 'react';
import { Tooltip } from './';
import { TooltipTargetTag, TooltipMessageTag } from './Tooltip.theme';

describe('<Tooltip />', () => {
  it('should show tooltip message on hover', () => {
    const wrapper = mount(
      <Tooltip message="Tooltip message">
        <div>Tooltip target</div>
      </Tooltip>,
    );

    expect(wrapper.text()).toBe('Tooltip target');
    expect(wrapper.find(TooltipMessageTag)).toHaveLength(0);

    wrapper.find(TooltipTargetTag).simulate('mouseEnter');
    expect(wrapper.find(TooltipMessageTag)).toHaveLength(1);
    expect(wrapper.find(TooltipMessageTag).text()).toBe('Tooltip message');

    wrapper.find(TooltipTargetTag).simulate('mouseLeave');
    expect(wrapper.find(TooltipMessageTag)).toHaveLength(0);
  });


  it('should show tooltip message on click', () => {
    const wrapper = mount(
      <Tooltip message="Tooltip message" trigger="click">
        <div>Tooltip target</div>
      </Tooltip>,
    );

    expect(wrapper.text()).toBe('Tooltip target');
    expect(wrapper.find(TooltipMessageTag)).toHaveLength(0);

    wrapper.find(TooltipTargetTag).simulate('click');
    expect(wrapper.find(TooltipMessageTag)).toHaveLength(1);
    expect(wrapper.find(TooltipMessageTag).text()).toBe('Tooltip message');

    wrapper.find(TooltipTargetTag).simulate('click');
    expect(wrapper.find(TooltipMessageTag)).toHaveLength(0);
  });


  it('should not close tooltip message on click by the messsage', () => {
    const wrapper = mount(
      <Tooltip message="Tooltip message" trigger="click" defaultOpen>
        <div>Tooltip target</div>
      </Tooltip>,
    );

    expect(wrapper.find(TooltipMessageTag)).toHaveLength(1);

    wrapper.find(TooltipMessageTag).simulate('click');
    expect(wrapper.find(TooltipMessageTag)).toHaveLength(1);

    wrapper.setProps({ trigger: 'hover' });
    wrapper.find(TooltipMessageTag).simulate('click');
    expect(wrapper.find(TooltipMessageTag)).toHaveLength(1);

    wrapper.find(TooltipTargetTag).simulate('mouseLeave');
    expect(wrapper.find(TooltipMessageTag)).toHaveLength(0);
  });
});
