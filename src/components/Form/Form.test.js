// @flow
import React from 'react';
import { Form } from './';

describe('<Form />', () => {

  it('should render form components', () => {
    const wrapper = mount(
      <EightBaseBoostProvider>
        <Form>
          <Form.Error error="Some error" />
          <Form.Section>
            <Form.SectionTitle>Some section 1</Form.SectionTitle>
            <Form.SectionBody>
              <Form.Field meta={{}} label="Field label" />
            </Form.SectionBody>
          </Form.Section>
          <Form.Section>
            <Form.SectionTitle text="Some section 2" />
            <Form.SectionBody>
              <Form.Field direction="row" stretch={ false } meta={{}} label="Field label" />
            </Form.SectionBody>
          </Form.Section>
        </Form>
      </EightBaseBoostProvider>,
    );

    expect(wrapper.find(Form.SectionTitle).at(0).text()).toBe('Some section 1');
    expect(wrapper.find(Form.SectionTitle).at(1).text()).toBe('Some section 2');
    expect(wrapper.find(Form.Error).text()).toBe('!Some error');
  });


  it('should render form error', () => {
    const wrapper = mount(<Form.Error error="Some error" />);
    expect(wrapper.find(Form.Error).text()).toBe('!Some error');

    wrapper.setProps({ error: '', children: 'Another error' });
    expect(wrapper.find(Form.Error).text()).toBe('!Another error');

    wrapper.setProps({ error: '', children: '' });
    expect(wrapper.find(Form.Error).props().children).toBe('');
  });


  it('should render field error', () => {
    const wrapper = mount(<Form.Field meta={{ error: 'Field error', touched: true }} />);

    expect(wrapper.find('ControlErrorTag').text()).toBe('Field error');

    wrapper.setProps({ hideErrorLabel: true });
    expect(wrapper.find('ControlErrorTag')).toHaveLength(0);
  });
});
