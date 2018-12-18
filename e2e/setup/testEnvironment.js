const NodeEnvironment = require('jest-environment-node');
const puppeteer = require('puppeteer');
const fs = require('fs');
const os = require('os');
const path = require('path');
const fetch = require('node-fetch');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

class PuppeteerEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();

    let wsEndpoint;

    if (process.env.E2E_DOCKER === 'true') {
      try {
        ({ webSocketDebuggerUrl: wsEndpoint } = await (await fetch('http://localhost:9222/json/version')).json());
      } catch (e) {
        throw new Error('Cannot connect to the Docker Puppeteer container.');
      }
    } else {
      wsEndpoint = fs.readFileSync(path.join(DIR, 'wsEndpoint'), 'utf8');
    }

    if (!wsEndpoint) {
      throw new Error('wsEndpoint not found');
    }

    this.global.__BROWSER__ = await puppeteer.connect({
      browserWSEndpoint: wsEndpoint,
      defaultViewport: {
        width: 1440,
        height: 960,
      },
    });
    
    this.global.__BROWSER_CONTEXT__ = await this.global.__BROWSER__.createIncognitoBrowserContext();
  }

  async teardown() {
    await this.global.__BROWSER_CONTEXT__.close();

    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = PuppeteerEnvironment;
