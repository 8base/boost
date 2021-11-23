//@flow

import React from 'react';

import {
  ProgressTag,
  ProgressBodyTag,
  ProgressInnerTag,
  ProgressValueTag,
  ProgressSeparatorTag,
  ProgressTextTag,
  ProgressLabelTag,
  ProgressDescriptionTag,
} from './Progress.theme';

type ProgressProps = {
  value: number,
  label?: string | React$Node,
  valueText?: React$Node,
  description?: React$Node,
  valueWidth?: number | string,
  size?: 'sm' | 'md' | 'lg',
  color?: string,
  backgroundColor?: string,
  showSeparator?: boolean,
};

const Progress = ({
  value,
  label,
  valueText,
  valueWidth,
  description,
  ...rest
}: ProgressProps) => {
  value = value > 100 ? value % 100 : value;

  return (
    <ProgressTag { ...rest }>
      { label && <ProgressLabelTag modifiers={ rest }>{ label }</ProgressLabelTag> }
      <ProgressBodyTag modifiers={ rest }>
        <ProgressInnerTag modifiers={ rest } style={ valueWidth ? { minWidth: valueWidth, maxWidth: valueWidth } : {} }>
          <ProgressValueTag modifiers={ rest } style={{ width: `${value}%` }} />
          <If condition={ !!rest.showSeparator } >
            <ProgressSeparatorTag modifiers={ rest } style={{ left: `${value}%` }} />
          </If>
        </ProgressInnerTag>
        <ProgressTextTag modifiers={ rest }>
          { valueText ? valueText : `${value} %` }
        </ProgressTextTag>
      </ProgressBodyTag>
      { description && <ProgressDescriptionTag> { description } </ProgressDescriptionTag> }
    </ProgressTag>
  );
};

Progress.defaultProps = {
  size: 'md',
  color: 'PRIMARY',
  backgroundColor: 'GRAY_20',
  showSeparator: false,
};

export { Progress };
