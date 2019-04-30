// @flow
import React from 'react';
import { DateInputField } from './DateInputField';

describe('<DateInputField />', () => {
  it('should pass props to the children', () => {
    const wrapper = shallow(
      <DateInputField
        label="Date"
        input={{ value: '2018-11-07', onChange: jest.fn() }}
      />,
    );

    expect(wrapper).toMatchInlineSnapshot(`
<FormField
  direction="column"
  hideErrorLabel={false}
  input={
    Object {
      "onChange": [MockFunction],
      "value": "2018-11-07",
    }
  }
  label="Date"
  stretch={true}
>
  <DateInput
    onChange={[MockFunction]}
    stretch={true}
    value="2018-11-07"
    withPortal={true}
  />
</FormField>
`);
  });
});
