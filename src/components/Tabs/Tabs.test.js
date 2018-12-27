// @flow
import React from 'react';
import { Tabs } from './';

describe('<Tabs />', () => {

  it('should render Tabs', () => {
    const wrapper = mount(
      <Tabs defaultSelectedTabId="1">
        <Tabs.Title tabId="1"><div>Tab-1</div></Tabs.Title>
        <Tabs.Title tabId="2"><div>Tab-2</div></Tabs.Title>
        <Tabs.Panel tabId="1">
          <div className="body-1">Body-1</div>
        </Tabs.Panel>
        <Tabs.Panel tabId="2">
          <div className="body-2">Body-2</div>
        </Tabs.Panel>
      </Tabs>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render selected tab', () => {
    const wrapper = mount(
      <Tabs selectedTabId="1">
        <Tabs.Title tabId="1"><div>Tab-1</div></Tabs.Title>
        <Tabs.Title tabId="2"><div>Tab-2</div></Tabs.Title>
        <Tabs.Panel tabId="1">
          <div className="body-1">Body-1</div>
        </Tabs.Panel>
        <Tabs.Panel tabId="2">
          <div className="body-2">Body-2</div>
        </Tabs.Panel>
      </Tabs>,
    );

    expect(wrapper.find('.body-1').text()).toBe('Body-1');
    expect(wrapper.find('.body-2')).toHaveLength(0);

    wrapper.setProps({ selectedTabId: '2' });

    expect(wrapper.find('.body-1')).toHaveLength(0);
    expect(wrapper.find('.body-2').text()).toBe('Body-2');
  });


  it('should render head as a render prop', () => {
    const wrapper = mount(
      <Tabs selectedTabId="1">
        <Tabs.Title tabId="1">{ ({ selected }) => <div className="head-1">Tab-1 is { selected && 'selected' }</div> }</Tabs.Title>
        <Tabs.Title tabId="2">{ ({ selected }) => <div className="head-2">Tab-2 is { !selected && 'not selected' }</div> }</Tabs.Title>
        <Tabs.Panel tabId="1">Body-1</Tabs.Panel>
        <Tabs.Panel tabId="2">Body-2</Tabs.Panel>
      </Tabs>,
    );

    expect(wrapper.find('.head-1').text()).toBe('Tab-1 is selected');
    expect(wrapper.find('.head-2').text()).toBe('Tab-2 is not selected');
  });


  it('should call onSelect callback', () => {
    const onSelect = jest.fn();
    const wrapper = mount(
      <Tabs selectedTabId="1" onSelect={ onSelect }>
        <Tabs.Title tabId="1"><div>Tab-1</div></Tabs.Title>
        <Tabs.Title tabId="2"><div>Tab-2</div></Tabs.Title>
        <Tabs.Panel tabId="1">
          <div className="body-1">Body-1</div>
        </Tabs.Panel>
        <Tabs.Panel tabId="2">
          <div className="body-2">Body-2</div>
        </Tabs.Panel>
      </Tabs>,
    );

    wrapper.find(Tabs.Title).at(0).simulate('click');
    expect(onSelect.mock.calls[0][0]).toBe('1');

    wrapper.find(Tabs.Title).at(1).simulate('click');
    expect(onSelect.mock.calls[1][0]).toBe('2');
  });


  it('should toggle tabs in statefull mode', () => {
    const wrapper = mount(
      <Tabs defaultSelectedTabId="1">
        <Tabs.Title tabId="1"><div>Tab-1</div></Tabs.Title>
        <Tabs.Title tabId="2"><div>Tab-2</div></Tabs.Title>
        <Tabs.Panel tabId="1">
          <div className="body-1">Body-1</div>
        </Tabs.Panel>
        <Tabs.Panel tabId="2">
          <div className="body-2">Body-2</div>
        </Tabs.Panel>
      </Tabs>,
    );

    wrapper.find(Tabs.Title).at(1).simulate('click');
    expect(wrapper.find('.body-1')).toHaveLength(0);
    expect(wrapper.find('.body-2').text()).toBe('Body-2');

    wrapper.find(Tabs.Title).at(0).simulate('click');
    expect(wrapper.find('.body-1').text()).toBe('Body-1');
    expect(wrapper.find('.body-2')).toHaveLength(0);
  });


  it('should render panels with force', () => {
    const onSelect = jest.fn();
    const wrapper = mount(
      <Tabs selectedTabId="1" onSelect={ onSelect }>
        <Tabs.Title tabId="1"><div>Tab-1</div></Tabs.Title>
        <Tabs.Title tabId="2"><div>Tab-2</div></Tabs.Title>
        <Tabs.Panel tabId="1" forceRender>
          <span className="body-1">Body-1</span>
        </Tabs.Panel>
        <Tabs.Panel tabId="2" forceRender>
          <span className="body-2">Body-2</span>
        </Tabs.Panel>
      </Tabs>,
    );

    expect(wrapper.find('.body-1').text()).toBe('Body-1');
    expect(wrapper.find('.body-2').text()).toBe('Body-2');
  });
});

