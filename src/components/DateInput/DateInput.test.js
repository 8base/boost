// @flow
import React from 'react';
import DatePicker from 'react-datepicker';
import { DateTime } from 'luxon';
import { Dropdown } from '../Dropdown';
import { Input } from '../Input';
import { DateInput } from './DateInput';

describe('<DateInnput />', () => {
  const onChange = jest.fn();

  beforeEach(() => {
    onChange.mockReset();
  });


  it('should render pass correct props to the inners components', () => {
    const wrapper = mount(
      <DateInput value="2018-11-07" onChange={ onChange } />,
    );

    wrapper.find(Dropdown.Head).simulate('click');
    const datepicker = wrapper.find(DatePicker);

    expect(datepicker.props().selected).toEqual(DateTime.fromISO('2018-11-07').toJSDate());
    expect(datepicker.props().dateFormat).toBe('MM/dd/yyyy');
    expect(datepicker.props().showTimeSelect).toBeFalsy();
    expect(datepicker.props().inline).toBeTruthy();
    expect(wrapper.find(Input).props().mask).toBe('99/99/9999');
  });


  it('should render pass correct props to the inners components in time mode', () => {
    const wrapper = mount(
      <DateInput value="2008-09-15T15:53:00" onChange={ onChange } withTime />,
    );

    wrapper.find(Dropdown.Head).simulate('click');
    const datepicker = wrapper.find(DatePicker);

    expect(datepicker.props().selected).toEqual(DateTime.fromISO('2008-09-15T15:53:00').toJSDate());
    expect(datepicker.props().dateFormat).toBe('MM/dd/yyyy, hh:mm a');
    expect(datepicker.props().showTimeSelect).toBeTruthy();
    expect(datepicker.props().inline).toBeTruthy();
    expect(wrapper.find(Input).props().mask).toBe('99/99/9999, 99:99 aa');
  });


  it('should coorect update local value state', () => {
    const wrapper = mount(
      <DateInput value="2018-11-07" onChange={ onChange } />,
    );

    wrapper.find(Dropdown.Head).simulate('click');

    expect(wrapper.find(Input).props().value).toBe('11/07/2018');

    wrapper.setProps({ value: '2020-11-07' });
    wrapper.update();
    expect(wrapper.find(Input).props().value).toBe('11/07/2020');
  });


  it('should pass null to datepicker on incorrect value', () => {
    const wrapper = mount(
      <DateInput value="incorrect-value" onChange={ onChange } withTime />,
    );

    wrapper.find(Dropdown.Head).simulate('click');
    const datepicker = wrapper.find(DatePicker);

    expect(datepicker.props().selected).toBeNull();
  });


  it('should call oChange callback on change datepicker', () => {
    const wrapper = mount(
      <DateInput value="2018-11-07" onChange={ onChange } />,
    );

    wrapper.find(Dropdown.Head).simulate('click');
    const datepicker = wrapper.find(DatePicker);
    expect(datepicker.props().selected).toEqual(DateTime.fromISO('2018-11-07').toJSDate());

    datepicker.props().onChange(DateTime.fromISO('2024-12-31').toJSDate());

    expect(onChange).toHaveBeenCalledWith('2024-12-31');
  });


  it('should call oChange callback on change input', () => {
    const wrapper = mount(
      <DateInput value="2018-11-07" onChange={ onChange } />,
    );

    wrapper.find(Dropdown.Head).simulate('click');

    wrapper.find(Input).find('input').simulate('change', { target: { value: '12/31/2018' }});
    wrapper.find(Input).find('input').simulate('blur');

    expect(onChange).toHaveBeenCalledWith('2018-12-31');
  });


  it('should return null on incorrect typed date in the input', () => {
    const wrapper = mount(
      <DateInput value="2018-11-07" onChange={ onChange } />,
    );

    wrapper.find(Dropdown.Head).simulate('click');
    const datepicker = wrapper.find(DatePicker);
    expect(datepicker.props().selected).toEqual(DateTime.fromISO('2018-11-07').toJSDate());

    wrapper.find(Input).find('input').simulate('change', { target: { value: 'incorrect-value' }});
    wrapper.find(Input).find('input').simulate('blur');

    expect(onChange).toHaveBeenCalledWith(null);
  });


  it('should pass null on not exist value', () => {
    const wrapper = mount(
      <DateInput value={ undefined } onChange={ onChange } />,
    );

    wrapper.find(Dropdown.Head).simulate('click');

    expect(wrapper.find(DatePicker).props().selected).toBeNull();
    expect(wrapper.find(Input).props().value).toEqual('');
  });


  it('should call onChange with null on not exist value', () => {
    const wrapper = mount(
      <DateInput value={ undefined } onChange={ onChange } />,
    );

    wrapper.find(Dropdown.Head).simulate('click');

    wrapper.find(Input).find('input').simulate('change', { target: { value: '' }});
    wrapper.find(Input).find('input').simulate('blur');
    expect(onChange.mock.calls[0][0]).toBeNull();


    wrapper.find(DatePicker).props().onChange(undefined);
    expect(onChange.mock.calls[1][0]).toBeNull();
  });
});
