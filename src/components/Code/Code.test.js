// @flow
import React from 'react';
import { Code } from './Code';
import { CodeBodyTag, CodeNumberPlateTag } from './Code.theme';

describe('<Code />', () => {

  it('should render code with react node in children', () => {
    const wrapper = mount(
      <Code>
        <span>some-code</span>
      </Code>,
    );

    expect(wrapper.find(CodeBodyTag).text()).toBe('some-code');
  });

  it('should render code with text in children', () => {
    const codeText = `
import React from 'react';
import { Code } from './Code';
    `;
    const wrapper = mount(
      <Code>
        { codeText }
      </Code>,
    );

    expect(wrapper.find(CodeBodyTag).text()).toBe(codeText);
  });


  it('should scroll code', () => {
    const codeText = `
import React from 'react';
import { Code } from './Code';
import React from 'react';
import { Code } from './Code';
import React from 'react';
import { Code } from './Code';
import React from 'react';
import { Code } from './Code';
import React from 'react';
import { Code } from './Code';
import React from 'react';
import { Code } from './Code';
import React from 'react';
import { Code } from './Code';
    `;
    const wrapper = mount(
      <div style={{ height: '50px' }}>
        <Code>
          { codeText }
        </Code>
      </div>,
    );

    wrapper.find(CodeBodyTag).getDOMNode().scrollTop = 30;
    wrapper.find(CodeBodyTag).simulate('scroll');

    expect(wrapper.find(CodeNumberPlateTag).getDOMNode().scrollTop).toBe(30);
  });
});
