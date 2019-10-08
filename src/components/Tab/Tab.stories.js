// @flow

import React from 'react';
import { css } from '@emotion/core';
import { Tab, Row } from '../../';

export default {
  title: 'Components/Tab',
  component: Tab,
};

export const common = () => (
  <div
    css={ css`
      background-color: #f4f7f9;
    ` }
  >
    <Row gap="xs" offsetX="lg" offsetY="lg">
      <Tab tagName="div" className="active">
        Active Tab
      </Tab>
      <Tab tagName="div">Inactive Tab</Tab>
    </Row>
  </div>
);

common.story = {
  name: 'common',
};
