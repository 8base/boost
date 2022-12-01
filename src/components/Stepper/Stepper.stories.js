import React from 'react';
import styled from '@emotion/styled';
import { Stepper } from '../../';
import { Step } from '../../';

const ShortDiv = styled('div')({
  height: '300px',
  maxHeight: '300px',
  '& > *': {
    maxHeight: '100%',
  },
});

const getDefaultStep = index => {
  switch (index) {
    case 0:
      return (
        <Step key={index}>
          <div className="d-flex align-items-center h-100">
            <span className="pt-2 px-2">
              {'Stepper component 1'}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="32"
              className="d-block my-1"
              viewBox="0 0 118 94"
              role="img"
            >
              <title>Bootstrap</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </Step>
      );
    case 1:
      return (
        <Step key={index}>
          <div className="d-flex align-items-center justify-content-center h-100">
            <span className="px-2 text-danger">{'Demo:'}</span>
            <div className="text-secondary">{'npm run storybook'}</div>
          </div>
        </Step>
      );
    default:
      return null;
  }
};

export default {
  title: 'Components/Stepper',
  component: Stepper,
};

export const defaultStory = () => (
  <Stepper>
    {[1, 2].map((element, index) => getDefaultStep(index))}
  </Stepper>
);

defaultStory.story = {
  name: 'horizontal',
};

export const withCustomPaddings = () => (
  <Stepper>
    <div>vertical</div>
  </Stepper>
);

withCustomPaddings.story = {
  name: 'vertical',
};