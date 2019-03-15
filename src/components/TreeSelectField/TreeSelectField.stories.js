import React from 'react';


const OPTIONS = {
  label: 'Search me',
  value: 'searchme',
  children: [
    {
      label: 'Search me too',
      value: 'searchmetoo',
      children: [
        {
          label: 'No one can get me',
          value: 'anonymous',
        },
      ],
    },
    {
      label: 'Search me too 2',
      value: 'searchmetoo2',
    },
    {
      label: 'Search me too 3',
      value: 'searchmetoo3',
    },
    {
      label: 'Search me too 4',
      value: 'searchmetoo4',
    },
    {
      label: 'Search me too 5',
      value: 'searchmetoo5',
    },
  ],
};

export default (asStory) => {
  asStory('Components/TreeSelectField', module, (story, { TreeSelectField, StateContainer, Column }) => {
    story
      .add('common', () => (
        <Column>
          <StateContainer value={ [OPTIONS.children[2].value] } withForm>
            <TreeSelectField label="TreeSelect" name="name" placeholder="Select an option" options={ OPTIONS } />
          </StateContainer>
        </Column>
      ));
  });
};

