import React from 'react';
import { Loader } from '../Loader';

const AsyncContent = ({ loading, children, ...props }) => {
  if (loading) {
    return <Loader { ...props } />;
  }

  return children;
};

export { AsyncContent };
