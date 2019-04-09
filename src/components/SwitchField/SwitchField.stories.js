import React from 'react';

export default (asStory) => {
  asStory('Components/SwitchField', module, (story, { SwitchField, Column }) => {
    story
      .add('common', () => (
        <Column>
          <SwitchField label="Disabled" input={{}} />
          <SwitchField label="Enabled" input={{ value: true }} />
          <SwitchField
            label="With error"
            input={{ value: false }}
            meta={{ error: 'Required', touched: true }}
          />
        </Column>
      ));
  });
};

