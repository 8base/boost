// @flow
import React from 'react';
import { Button } from './Button';

describe('<Button />', () => {
  it('should render button with text', () => {
    const wrapper = mount(
      <EightBaseBoostProvider>
        <Button squared variant="outlined">
          some-text
        </Button>
      </EightBaseBoostProvider>,
    );

    expect(wrapper.find('button').text()).toBe('some-text');
  });

  it('should render button with default props', () => {
    const wrapper = shallow(<Button>some-text</Button>);

    expect(wrapper).toMatchInlineSnapshot(`
<Boost(button)
  aria-busy="false"
  color="primary"
  onClick={[Function]}
  size="md"
  tagName="button"
  type="button"
  variant="raised"
>
  <span
    key=".0"
  >
    some-text
  </span>
</Boost(button)>
`);
  });

  it('should call onClick callback', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={ onClick } />);

    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('should pass children to the button body', () => {
    const wrapper = mount(
      <Button>
        <div className="first-child" />
        <div className="second-child" />
        some-text
      </Button>,
    );

    expect(wrapper.find('.first-child')).toHaveLength(1);
    expect(wrapper.find('.second-child')).toHaveLength(1);
    expect(wrapper.text()).toBe('some-text');
  });

  it('should pass custom tag to the button', () => {
    const wrapper = mount(<Button tagName="a" href="https://break-core.ch" />);

    expect(wrapper.find('a')).toHaveLength(1);
    expect(wrapper.find('a').props().href).toBe('https://break-core.ch');
  });

  it('shouldn\'t call onClick callback on disabled button', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button disabled onClick={ onClick } />);

    wrapper.simulate('click');
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should not click on button while it loading', () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <EightBaseBoostProvider>
        <Button onClick={ onClick } loading />
      </EightBaseBoostProvider>,
    );

    wrapper.simulate('click');
    expect(onClick).not.toHaveBeenCalled();
    expect(wrapper.find('button').prop('aria-busy')).toBe('true');
  });
});

