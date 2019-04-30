// @flow
import React from 'react';
import { Input } from './Input';

describe('<Input />', () => {
  it('should shallow input', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Input onChange={ onChange } value="val" leftIcon="i" clearable />,
    );

    expect(wrapper).toMatchInlineSnapshot(`
<Boost(inputWrapper)
  stretch={true}
  tagName="div"
>
  <Boost(input)
    align="left"
    autoComplete="off"
    hasError={false}
    hasLeftIcon={true}
    hasRightIcon={false}
    hideNumberArrows={true}
    kind="bordered"
    modifiers={
      Object {
        "onChange": [MockFunction],
      }
    }
    onChange={[Function]}
    stretch={true}
    tagName="input"
    type="text"
    value="val"
  />
  <Boost(inputLeftIcon)
    modifiers={
      Object {
        "onChange": [MockFunction],
      }
    }
    tagName="div"
  >
    i
  </Boost(inputLeftIcon)>
  <Boost(inputClearButton)
    modifiers={
      Object {
        "onChange": [MockFunction],
      }
    }
    onClick={[Function]}
    tagName="div"
  >
    <Icon
      name="Delete"
      size="sm"
    />
  </Boost(inputClearButton)>
</Boost(inputWrapper)>
`);
  });

  it('should call onCahnge with text value', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Input onChange={ onChange } />);

    wrapper.find('input').simulate('change', { target: { value: 'val' }});
    expect(onChange.mock.calls[0][0]).toBe('val');
  });

  it('should call onChange with number value', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Input onChange={ onChange } type="number" />);

    wrapper.find('input').simulate('change', { target: { value: '42' }});
    expect(onChange.mock.calls[0][0]).toBe(42);
    expect(typeof onChange.mock.calls[0][0]).toBe('number');
  });

  it('should call onChange with empty value after click on clear button', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Input value="Text" onChange={ onChange } clearable />);

    wrapper.find({ name: 'Delete' }).simulate('click');
    expect(onChange.mock.calls).toEqual([['']]);
  });

  it('should not call onCahnge with max value', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Input onChange={ onChange } maxLength={ 2 } />);

    wrapper.find('input').simulate('change', { target: { value: '123' }});
    expect(onChange).not.toHaveBeenCalled();

    wrapper.find('input').simulate('change', { target: { value: '12' }});
    expect(onChange.mock.calls[0][0]).toBe('12');
  });

  describe('input with type number', () => {
    it('should increment and decrement number on arrows click', () => {
      const onChange = jest.fn();
      const wrapper = mount(
        <Input
          value=""
          onChange={ onChange }
          type="number"
          hideNumberArrows={ false }
        />,
      );

      // From "" (0) to 1
      wrapper
        .find('Boost(inputArrow)')
        .first()
        .simulate('click');
      expect(onChange).toHaveBeenCalledWith(1);
      // From "" (0) to -1
      wrapper
        .find('Boost(inputArrow)')
        .last()
        .simulate('click');
      expect(onChange).toHaveBeenCalledWith(-1);
    });
  });
});
