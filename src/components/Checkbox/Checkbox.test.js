// @flow
import React from 'react';
import { Checkbox } from './Checkbox';

describe('<Checkbox />', () => {
  it('should shallow checkbox', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Checkbox onChange={ onChange } label="Label" checked />,
    );

    expect(wrapper).toMatchInlineSnapshot(`
<Boost(checkboxWrapper)
  checked={true}
  disabled={false}
  hasError={false}
  indeterminate={false}
  tagName="label"
>
  <Boost(checkboxSquare)
    modifiers={
      Object {
        "checked": true,
        "disabled": false,
        "hasError": false,
        "indeterminate": false,
      }
    }
    tagName="div"
  >
    <Boost(checkboxIcon)
      modifiers={
        Object {
          "isShown": true,
        }
      }
      tagName="div"
    >
      <Icon
        name="Check"
        size="xs"
      />
    </Boost(checkboxIcon)>
  </Boost(checkboxSquare)>
  <Boost(checkboxTag)
    checked={true}
    disabled={false}
    insideRef={
      Object {
        "current": null,
      }
    }
    modifiers={
      Object {
        "checked": true,
        "disabled": false,
        "hasError": false,
        "indeterminate": false,
      }
    }
    onChange={[Function]}
    tagName="input"
    type="checkbox"
  />
  <Boost(checkboxText)
    modifiers={
      Object {
        "checked": true,
        "disabled": false,
        "hasError": false,
        "indeterminate": false,
      }
    }
    tagName="div"
  >
    Label
  </Boost(checkboxText)>
</Boost(checkboxWrapper)>
`);
  });

  it('should call onChange callback with false', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Checkbox onChange={ onChange } checked />);

    wrapper.find('input').simulate('change', { target: { checked: false }});
    expect(onChange.mock.calls[0][0]).toBe(false);
  });

  it('should call onChange callback with true', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Checkbox onChange={ onChange } />);

    wrapper.find('input').simulate('change', { target: { checked: true }});
    expect(onChange.mock.calls[0][0]).toBe(true);
  });

  it('should not call onChange callback with disabled prop', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Checkbox onChange={ onChange } disabled />);

    wrapper.find('input').simulate('change', { target: {}});
    expect(onChange).not.toHaveBeenCalled();
  });
});
