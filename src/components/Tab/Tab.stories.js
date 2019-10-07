// @flow

import React from 'react';
import { css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { Tab, Row } from '../../';

storiesOf('Components/Tab', module)
  .add('common', () => (
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
  ));

