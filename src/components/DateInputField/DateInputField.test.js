// @flow
import React from 'react';
import { DateInputField } from './DateInputField';

describe('<DateInputField />', () => {
  it('should pass props to the children', () => {
    const wrapper = shallow(
      <DateInputField label="Date" input={{ value: '2018-11-07' }} />,
    );

    expect(wrapper).toMatchInlineSnapshot(`
<FormField
  direction="column"
  hideErrorLabel={false}
  input={
    Object {
      "value": "2018-11-07",
    }
  }
  label="Date"
  stretch={true}
>
  <DateInput
    stretch={true}
    value="2018-11-07"
  />
</FormField>
`);
  });
});
