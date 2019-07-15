// @flow

import React from 'react';
import { BoostProvider } from './BoostProvider';


export class EightBaseBoostProvider extends React.Component<*> {
  componentDidMount() {
    // eslint-disable-next-line
    console.error('DEPRECATION WARNING: EightBaseBoostProvider has been renamed to BoostProvider.');
  }

  render() {
    return <BoostProvider { ...this.props } />;
  }
}
