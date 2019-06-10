import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Logs', 'with dialog')
    .setRoot(async (iframe) => {
      return await iframe.waitForXPath('//*[@data-e2e-id="logs-dialog"]');
    }),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

