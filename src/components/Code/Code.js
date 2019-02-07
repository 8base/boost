// @flow

import React, { PureComponent } from 'react';
import {
  CodeNumberPlateTag,
  CodeWrapperTag,
  CodeBodyTag,
  CodeNumericTag,
  CodePlateTag,
  CodeLineCounterTag,
  CodeBodyWrapperTag,
  CodeNumberWrapperTag,
  CodeCopyButtonWrapper,
} from './Code.theme';
import { Button } from '../Button';

type CodeProps = {
  children: string | React$Node,
  height?: number,
  withCopyButton?: boolean,
};

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

  handleCopyButtonClick = () => {
    const tempTextarea = document.createElement('TEXTAREA');

    const lastFocusedElement = document.activeElement;

    // $FlowIgnore
    tempTextarea.value = this.bodyRef.innerText;
    // $FlowIgnore
    document.body.appendChild(tempTextarea);
    // $FlowIgnore
    tempTextarea.select();

    document.execCommand('copy');
    // $FlowIgnore
    document.body.removeChild(tempTextarea);

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  render() {
    const { children, withCopyButton, ...rest } = this.props;

    return (
      <CodeWrapperTag { ...rest }>
        <CodePlateTag>
          <CodeNumberWrapperTag modifiers={ rest }>
            <CodeNumberPlateTag imodifiers={ rest } insideRef={ this.setNumbersRef }>
              <CodeNumericTag modifiers={ rest }>{ this.renderNumbs() }</CodeNumericTag>
            </CodeNumberPlateTag>
          </CodeNumberWrapperTag>
          <CodeBodyWrapperTag modifiers={ rest }>
            <CodeBodyTag
              modifiers={ rest }
              tagName="pre"
              insideRef={ this.setBodyRef }
              onScroll={ this.onBodyScroll }
            >
              { children }
            </CodeBodyTag>
          </CodeBodyWrapperTag>
          <If condition={ !!withCopyButton }>
            <CodeCopyButtonWrapper>
              <Button type="button" size="sm" onClick={ this.handleCopyButtonClick }>
                Copy
              </Button>
            </CodeCopyButtonWrapper>
          </If>
        </CodePlateTag>
      </CodeWrapperTag>
    );
  }
}

export {
  Code,
};
