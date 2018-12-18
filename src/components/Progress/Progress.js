import React from 'react';

import {
  ProgressOuterTag,
  ProgressInnerTag,
  ProgressValueTag,
  ProgressTextTag,
} from './Progress.theme';

type ProgressProps = {|
  value: number,
|};

const Progress = ({ value, ...rest }: ProgressProps) => {
  value = value > 100 ? value % 100 : value;

  return (
    <ProgressOuterTag { ...rest }>
      <ProgressInnerTag>
        <ProgressValueTag style={{ width: `${value}%` }} />
      </ProgressInnerTag>
      <ProgressTextTag>{ value } %</ProgressTextTag>
    </ProgressOuterTag>
  );
};

export { Progress };
