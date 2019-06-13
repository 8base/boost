// @flow
import React from 'react';
import { LogsContainerTag, LogMessageTag } from './Logs.theme';

type LogsProps = {
  messages: string[],
  stretch?: Boolean,
};

const Logs = ({ messages, stretch }: LogsProps) => {
  return (
    <LogsContainerTag stretch={ stretch }>
      { React.Children.toArray(messages.map(message => (
        <LogMessageTag>{ message }</LogMessageTag> // eslint-disable-line
      ))) }
    </LogsContainerTag>
  );
};

Logs.defaultProps = {
  messages: [],
};

export {
  Logs,
};
