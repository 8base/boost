import React from 'react';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  // eslint-disable-next-line no-alert
  alert(JSON.stringify(values, 0, 2));
};

export default (asStory) => {
  asStory('Atoms/Form', module, (story, { Form, TextInputField, Button }) => {
    story
      .add('without groups', () => (
        <Form.Plate onSubmit={ onSubmit } initialValues={{
          curple: 'Breakthrough',
          provect: 'Yearock',
          inlaying: 'Lombard',
          saccharifier: 'Cyanoacetic',
          inertance: 'Unfluent',
        }}>
          { ({ submitting }) => (
            <React.Fragment>
              <Form.Field component={ TextInputField } name="curple" label="Jobs" />
              <Form.Field component={ TextInputField } name="provect" label="Posted" />
              <Form.Field component={ TextInputField } name="inlaying" label="My Active Jobs" />
              <Form.Field component={ TextInputField } name="saccharifier" label="Active Requests" />
              <Form.Field component={ TextInputField } name="inertance" label="Applied" />
              <Button text="Submit" type="submit" loading={ submitting } />
            </React.Fragment>
          ) }
        </Form.Plate>
      ));
  });
};

