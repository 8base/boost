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
<Styled(inputWrapper)
  stretch={true}
  tagName="div"
>
  <Styled(input)
    align="left"
    autoComplete="off"
    hasError={false}
    hasLeftIcon={true}
    hasRightIcon={false}
    kind="bordered"
    onChange={[Function]}
    stretch={true}
    tagName="input"
    type="text"
    value="val"
  />
  <Styled(inputLeftIcon)
    tagName="div"
  >
    i
  </Styled(inputLeftIcon)>
  <Styled(inputClearButton)
    onClick={[Function]}
    tagName="div"
  >
    <Icon
      name="Delete"
      size="sm"
    />
  </Styled(inputClearButton)>
</Styled(inputWrapper)>
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
});
