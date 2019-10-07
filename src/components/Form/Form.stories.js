import React from 'react';
import { Form, InputField } from '../../';

const FieldMock = ({ component: Component, label, name }) => (
  <Component label={label} input={{ name }} />
);

export default {
  title: 'Components/Form',
};

export const common = () => (
  <Form>
    <Form.Error error="Some error" />
    <Form.Section>
      <Form.SectionTitle>Some section 1</Form.SectionTitle>
      <Form.SectionBody>
        <FieldMock component={InputField} name="curple" label="Jobs" />
        <FieldMock component={InputField} name="provect" label="Posted" />
        <FieldMock component={InputField} name="inlaying" label="My Active Jobs" />
      </Form.SectionBody>
    </Form.Section>
    <Form.Section>
      <Form.SectionTitle>Some section 2</Form.SectionTitle>
      <Form.SectionBody>
        <FieldMock component={InputField} name="saccharifier" label="Active Requests" />
        <FieldMock component={InputField} name="inertance" label="Applied" />
      </Form.SectionBody>
    </Form.Section>
  </Form>
);

common.story = {
  name: 'common',
};

export const withoutGroups = () => (
  <Form>
    <FieldMock component={InputField} name="curple" label="Jobs" />
    <FieldMock component={InputField} name="provect" label="Posted" />
    <FieldMock component={InputField} name="inlaying" label="My Active Jobs" />
    <FieldMock component={InputField} name="saccharifier" label="Active Requests" />
    <FieldMock component={InputField} name="inertance" label="Applied" />
  </Form>
);

withoutGroups.story = {
  name: 'without groups',
};
