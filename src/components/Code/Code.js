// @flow

import React, { PureComponent } from 'react';
import { CodeNumberPlateTag, CodeWrapperTag, CodeBodyTag, CodeNumericTag, CodePlateTag, CodeLineCounterTag, CodeBodyWrapperTag, CodeNumberWrapperTag } from './Code.theme';

type CodeProps = {
  children: string | React$Node,
  height?: number,
}


class Code extends PureComponent<CodeProps> {
  numbersRef: *;
  bodyRef: *;

  setNumbersRef = (ref: *) => this.numbersRef = ref;
  setBodyRef = (ref: *) => this.bodyRef = ref;

  onBodyScroll = () => {
    this.numbersRef.scrollTop = this.bodyRef.scrollTop;
  }

  getLinesCount = (codeText: mixed) => typeof codeText === 'string'
    ? codeText.replace(/\n$/, '').split(/\r\n|\r|\n/).length
    : 0;

  renderNumbs = () => {
    const linesCount = this.getLinesCount(this.props.children);
    const counters: React$Node[] = [];

    for (let index = 0; index < linesCount; index++) {
      counters.push(<CodeLineCounterTag key={ index + 1 }>{ index + 1 }</CodeLineCounterTag>);
    }

    return counters;
  }

  render() {
    const { children, height } = this.props;

    return (
      <CodeWrapperTag height={ height }>
        <CodePlateTag>
          <CodeNumberWrapperTag height={ height }>
            <CodeNumberPlateTag insideRef={ this.setNumbersRef }>
              <CodeNumericTag height={ height }>{ this.renderNumbs() }</CodeNumericTag>
            </CodeNumberPlateTag>
          </CodeNumberWrapperTag>
          <CodeBodyWrapperTag height={ height }>
            <CodeBodyTag tagName="pre" insideRef={ this.setBodyRef } onScroll={ this.onBodyScroll }>
              { children }
            </CodeBodyTag>
          </CodeBodyWrapperTag>
        </CodePlateTag>
      </CodeWrapperTag>
    );
  }
}

export {
  Code,
};
