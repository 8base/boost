import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Logs', 'default', 'hover')
    .setEnhancer(async (iframe) => {
      const logItem = await iframe.waitForXPath('//*[contains(text(),"START RequestId")]');

      await logItem.hover();
    }),
  baisy.suite('Components/Logs', 'with dialog')
    .setRoot(async (iframe) => {
      return await iframe.waitForXPath('//*[@data-e2e-id="logs-dialog"]');
    }),
  baisy.suite('Components/Logs', 'with stretch')
    .setRoot(async (iframe) => {
      return await iframe.waitForXPath('//*[@data-e2e-id="logs-dialog"]');
    }),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

