import React from 'react';

const FieldMock = ({ component: Component, label, name }) => (
  <Component label={ label } input={{ name }} />
);

export default (asStory) => {
  asStory('ATOMS/DATA ENTRY/Form', module, (story, { Form, InputField }) => {
    story
      .add('without groups', () => (
        <Form.Plate>
          <FieldMock component={ InputField } name="curple" label="Jobs" />
          <FieldMock component={ InputField } name="provect" label="Posted" />
          <FieldMock component={ InputField } name="inlaying" label="My Active Jobs" />
          <FieldMock component={ InputField } name="saccharifier" label="Active Requests" />
          <FieldMock component={ InputField } name="inertance" label="Applied" />
        </Form.Plate>
      ))
      .add('with groups', () => (
        <Form.Plate>
          <Form.Section>
            <Form.SectionTitle>Some section 1</Form.SectionTitle>
            <Form.SectionBody>
              <FieldMock component={ InputField } name="curple" label="Jobs" />
              <FieldMock component={ InputField } name="provect" label="Posted" />
              <FieldMock component={ InputField } name="inlaying" label="My Active Jobs" />
            </Form.SectionBody>
          </Form.Section>
          <Form.Section>
            <Form.SectionTitle>Some section 2</Form.SectionTitle>
            <Form.SectionBody>
              <FieldMock component={ InputField } name="saccharifier" label="Active Requests" />
              <FieldMock component={ InputField } name="inertance" label="Applied" />
            </Form.SectionBody>
          </Form.Section>
        </Form.Plate>
      ))
      .add('with form error', () => (
        <Form.Plate>
          <Form.Error error="Some error" />
          <Form.Section>
            <FieldMock component={ InputField } name="curple" label="Jobs" />
            <FieldMock component={ InputField } name="provect" label="Posted" />
            <FieldMock component={ InputField } name="inlaying" label="My Active Jobs" />
            <FieldMock component={ InputField } name="saccharifier" label="Active Requests" />
            <FieldMock component={ InputField } name="inertance" label="Applied" />
          </Form.Section>
        </Form.Plate>
      ));
  });
};
