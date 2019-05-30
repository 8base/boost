// @flow
const { E2E_URL } = (process.env: any);


class TestSuiter {
  kind: string;
  story: string;
  stateName: void | string;
  page: *;
  iframe: *;
  root: *;
  enhancers: Array<(iframe: Object, page: Object) => Promise<any>> = [];

  constructor(kind: string, story: string, stateName?: string) {
    this.kind = kind;
    this.story = story;
    this.stateName = stateName;
  }


  _init = async () => {
    // $FlowIgnore
    this.page = await __BROWSER_CONTEXT__.newPage();

    await this.page.goto(
      `${E2E_URL}/?selectedKind=${encodeURIComponent(this.kind)}&selectedStory=${encodeURIComponent(this.story)}`, { waitUntil: 'networkidle2' },
    );

    // eslint-disable-next-line
    this.iframe = this.page.frames()[1];

    this.root = await this.iframe.waitForXPath('//*[@id="root"]');

    return this;
  }

  _prepareStyles = async () => {
    await this.iframe.addStyleTag({
      content: `
      *, *:before, *:after {
        -webkit-transition-duration: unset !important;
        transition-duration: unset !important;
        -webkit-animation-duration: unset !important;
        animation-duration: unset !important;
        caret-color: transparent !important;
      }
    `,
    });

    const showInfoButton = await this.iframe.waitForXPath('//button[contains(text(),"Show Info")]');

    await this.iframe.evaluate((showInfoButtonDom) => {
      showInfoButtonDom.style.display = 'none';
    }, showInfoButton);
  }

  _executeEnhancers = async () => {
    for (let i = 0; i < this.enhancers.length; i++) {
      await this.enhancers[i](this.iframe, this.page);
    }
  }

  _stop = async () => {
    await this.page.close();

    return this;
  }


  getTestName = () => {
    return this.stateName
      ? `${this.kind} / ${this.story} / ${this.stateName}`
      : `${this.kind} / ${this.story}`;
  }

  setStateName = (stateName: string) => {
    this.stateName = stateName;

    return this;
  }

  setRoot = (rootSetter: (iframe: any, page: any) => Promise<*>) => {
    this.enhancers.push(async (iframe, page) => {
      this.root = await rootSetter(iframe, page);
    });

    return this;
  }

  setRootHeight = (height: number) => {
    this.enhancers.push(
      async () => {
        await this.iframe.evaluate((root, height) => {
          root.style.height = `${height}px`;
        }, this.root, height);
      },
    );

    return this;
  }

  setRootWidth = (width: number) => {
    this.enhancers.push(
      async () => {
        await this.iframe.evaluate((root, width) => {
          root.style.width = `${width}px`;
        }, this.root, width);
      },
    );

    return this;
  }

  addRootHeight = (height: number) => {
    this.enhancers.push(
      async () => {
        await this.iframe.evaluate((root, height) => {
          root.style.height = `${root.clientHeight + height}px`;
        }, this.root, height);
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

    await this._prepareStyles();

    await this._executeEnhancers();

    await this.page.waitFor(500);

    // $FlowIgnore
    expect(await this.root.screenshot()).toMatchImageSnapshot();

    await this._stop();

    return this;
  };
}

const baisy = {
  suite: (kind: string, story: string, stateName?: string) => new TestSuiter(kind, story, stateName),
};

export {
  baisy,
};
