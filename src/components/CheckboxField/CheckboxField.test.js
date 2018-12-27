// @flow
import React from 'react';
import { CheckboxField } from './CheckboxField';

describe('<Checkbox />', () => {
  it('should pass props to the children', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <CheckboxField meta={{}} input={{ onChange, value: true }} />,
    );

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
  meta={Object {}}
  stretch={true}
>
  <Checkbox
    checked={true}
    disabled={false}
    hasError={false}
    onChange={[MockFunction]}
  />
</FormField>
`);
  });
});
