// @flow
const { E2E_URL } = (process.env: any);


class TestSuiter {
  kind: string;
  story: string;
  state: string;
  page: *;
  iframe: *;
  enhancers: Array<$await<any>> = [];

  constructor(kind: string, story: string) {
    this.kind = kind;
    this.story = story;
  }


  _init = async () => {
    // $FlowIgnore
    this.page = await __BROWSER_CONTEXT__.newPage();

    await this.page.goto(
      `${E2E_URL}/?selectedKind=${encodeURIComponent(this.kind)}&selectedStory=${encodeURIComponent(this.story)}`, { waitUntil: 'networkidle2' },
    );

    // eslint-disable-next-line
    this.iframe = this.page.frames()[1];

    return this;
  }

  _stop = async () => {
    await this.page.close();

    return this;
  }

  _getRoot = async () => {
    return await this.iframe.waitForXPath('//*[@id="root"]');
  }

  _executeEnhancers = async () => {
    for (let i = 0; i < this.enhancers.length; i++) {
      await this.enhancers[i](this.iframe, this.page);
    }
  }

  _addGlobalStyles = async () => {
    await this.iframe.addStyleTag({
      content: `
      *, *:before, *:after {
        -webkit-transition-duration: unset !important;
        transition-duration: unset !important;
        -webkit-animation-duration: unset !important;
        animation-duration: unset !important;
      }
    `,
    });
  }


  getTestName = () => {
    return this.state
      ? `${this.kind} / ${this.story} / ${this.state}`
      : `${this.kind} / ${this.story}`;
  }

  setStateName = (state: string) => {
    this.state = state;

    return this;
  }

  setHeight = (height: number) => {
    this.enhancers.push(
      async () => {
        const root = await this._getRoot();

        await this.iframe.evaluate((root, height) => {
          root.style.height = `${height}px`;
        }, root, height);
      },
    );

    return this;
  }

  addHeight = (height: number) => {
    this.enhancers.push(
      async () => {
        const root = await this._getRoot();

        await this.iframe.evaluate((root, height) => {
          root.style.height = `${root.clientHeight + height}px`;
        }, root, height);
      },
    );

    return this;
  }

  setEnhancer = (enhancer: (iframe: any, page: any) => Promise<any>) => {
    this.enhancers.push(enhancer);

    return this;
  }

  testStory = async () => {
    await this._init();

    await this._addGlobalStyles();

    await this._executeEnhancers();

    const root = await this._getRoot();
    // $FlowIgnore
    expect(await root.screenshot()).toMatchImageSnapshot();

    await this._stop();

    return this;
  };
}

const baisy = {
  suite: (kind: string, story: string) => new TestSuiter(kind, story),
};

export {
  baisy,
};
