import React from 'react';

export default (asStory) => {
  asStory('Components/CheckboxField', module, (story, { CheckboxField, Column }) => {
    story
      .add('common', () => (
        <Column>
          <CheckboxField label="Without check" />
          <CheckboxField label="With check" input={{ value: true }} />
          <CheckboxField label="With error" input={{ value: false }} meta={{ error: 'Required', touched: true }} />
        </Column>
      ));
  });
};
