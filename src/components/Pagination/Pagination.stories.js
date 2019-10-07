/* eslint-disable no-alert */

import React from 'react';

import { Pagination, Column } from '../../';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

export const common = () => (
  <Column gap="lg">
    <Pagination defaultPage={ 1 } total={ 500 } />
    <Pagination defaultPage={ 2 } total={ 500 } />
    <Pagination defaultPage={ 3 } total={ 500 } />
    <Pagination defaultPage={ 4 } total={ 500 } />
    <Pagination defaultPage={ 5 } total={ 500 } />
    <Pagination defaultPage={ 46 } total={ 500 } />
    <Pagination defaultPage={ 47 } total={ 500 } />
    <Pagination defaultPage={ 48 } total={ 500 } />
    <Pagination defaultPage={ 49 } total={ 500 } />
    <Pagination defaultPage={ 50 } total={ 500 } />
    <Pagination defaultPage={ 50 } total={ 50000 } showSizeChanger />
  </Column>
);

common.story = {
  name: 'common',
};
