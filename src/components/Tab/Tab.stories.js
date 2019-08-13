// @flow

import React from 'react';
import { css } from 'react-emotion';

export default (asStory: *) => {
  asStory('Components/Tab', module, (story, { Tab, Row }) => {
    story
      .add('common', () => (
        <div className={ css`background-color: #F4F7F9` }>
          <Row gap="xs" offsetX="lg" offsetY="lg">
            <Tab tagName="div" className="active">
              Active Tab
            </Tab>
            <Tab tagName="div">
              Inactive Tab
            </Tab>
          </Row>
        </div>
      ));
  });
};
