import React from 'react';

export default (asStory) => {
  asStory('Components/RadioGroupField', module, (story, { RadioGroupField, Radio }) => {
    story

      .add('default', () => (
        <RadioGroupField direction="row" input={{ value: 1 }} meta={{ }}>
          <Radio.Item label="Radio" value={ 1 } />
          <Radio.Item label="Radio" value={ 2 } />
          <Radio.Item label="Radio" value={ 3 } />
        </RadioGroupField>
      ))
      .add('with error', () => (
        <RadioGroupField direction="row" input={{ }} meta={{ error: 'Required', touched: true }}>
          <Radio.Item label="Radio" value={ 1 } />
          <Radio.Item label="Radio" value={ 2 } />
          <Radio.Item label="Radio" value={ 3 } />
        </RadioGroupField>
      ));
  });
};
