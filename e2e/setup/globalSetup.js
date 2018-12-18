const puppeteer = require('puppeteer');
const fs = require('fs');
const mkdirp = require('mkdirp');
const os = require('os');
const path = require('path');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

const getPuppeteerLaunchOptions = () => {
  if (process.env.E2E_DEBUG === 'true') {
    return {
      headless: false,
      slowMo: 100,
      args: [
        '--start-fullscreen',
        '--auto-open-devtools-for-tabs',
      ],
      env: {
        TZ: 'America/New_York',
      },
    };
  }

  return {
    args: [
      '--disable-dev-shm-usage',
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
    env: {
      TZ: 'America/New_York',
    },
  };
};

module.exports = async () => {
  const launchOptions = getPuppeteerLaunchOptions();

  const browser = await puppeteer.launch(launchOptions);

  mkdirp.sync(DIR);
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());

  global.__BROWSER__ = browser;
};
