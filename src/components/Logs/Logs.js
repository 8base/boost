// @flow
import React, { forwardRef } from 'react';
import { LogsContainerTag, LogMessageTag } from './Logs.theme';

type LogsProps = {
  messages: React$Node[],
  stretch?: Boolean,
};

const Logs = forwardRef<LogsProps, LogsContainerTag>(
  ({ messages = [], stretch, children, ...rest }: LogsProps, ref) => (
    <LogsContainerTag stretch={ stretch } insideRef={ ref } { ...rest }>
      { React.Children.toArray(messages.map(message => (
        <LogMessageTag>{ message }</LogMessageTag> // eslint-disable-line
      ))) }
    </LogsContainerTag>
  ),
);

export { Logs };

