import React from 'react';

const OPTIONS = [{
  label: 'ovenlike',
  value: 'ovenlike',
}, {
  label: 'serjeant',
  value: 'serjeant',
}, {
  label: 'wiseheartedly',
  value: 'wiseheartedly',
}];

export default (asStory) => {
  asStory('ATOMS/DATA ENTRY/FileInputField', module, (story, { FileInputField }) => {
    story
      .add('default', () => (
        <FileInputField
          label="FileInput Label"
          input={{ name: 'input', onChange: () => null, value: OPTIONS[0].value }}
          placeholder="FileInput an option"
          options={ OPTIONS }
          stretch
        />
      ));
  });
};

