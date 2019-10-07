import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Dialog', 'default story')
    .setRoot(async (iframe) => {
      return await iframe.waitForXPath('//*[@data-e2e-id="default-dialog"]');
    }),
  baisy.suite('Components/Dialog', 'with scroll')
    .setRoot(async (iframe) => {
      return await iframe.waitForXPath('//*[@data-e2e-id="default-dialog"]');
    }),
  baisy.suite('Components/Dialog', 'with stretch')
    .setRoot(async (iframe) => {
      return await iframe.waitForXPath('//*[@data-e2e-id="default-dialog"]');
    }),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

