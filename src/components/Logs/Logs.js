// @flow
import React from 'react';
import { LogsContainerTag, LogMessageTag } from './Logs.theme';

type LogsProps = {
  messages: string[],
};

const Logs = ({ messages }: LogsProps) => {
  return (
    <LogsContainerTag>
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
