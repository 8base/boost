// @flow
import React from 'react';
import { SwitchField } from './SwitchField';

describe('<SwitchField />', () => {
  it('should pass props to the children', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<SwitchField input={{ onChange, value: true }} />);

    expect(wrapper).toMatchInlineSnapshot(`
<FormField
  direction="column"
  hideErrorLabel={false}
  input={
    Object {
      "onChange": [MockFunction],
      "value": true,
    }
  }
  stretch={true}
>
  <Switch
    hasError={false}
    onChange={[MockFunction]}
    value={true}
  />
</FormField>
`);
  });
});
