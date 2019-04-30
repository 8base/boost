// @flow
import React from 'react';
import { InputField } from './InputField';

describe('<InputField />', () => {
  it('should pass props to the children', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <InputField
        meta={{}}
        input={{ onChange, value: 'some input value', touched: true }}
      />,
    );

    expect(wrapper).toMatchInlineSnapshot(`
<FormField
  direction="column"
  hideErrorLabel={false}
  input={
    Object {
      "onChange": [MockFunction],
      "touched": true,
      "value": "some input value",
    }
  }
  meta={Object {}}
  stretch={true}
>
  <Input
    align="left"
    autoComplete={false}
    hasError={false}
    hideErrorIndicator={false}
    hideNumberArrows={true}
    kind="bordered"
    onChange={[MockFunction]}
    stretch={true}
    type="text"
    value="some input value"
  />
</FormField>
`);
  });
});
