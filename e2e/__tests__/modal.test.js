import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Modal', 'default story')
    .setRoot(async (iframe) => {
      return await iframe.waitForXPath('//*[@data-e2e-id="default-modal"]');
    }),
  baisy.suite('Components/Modal', 'with multiple modals')
    .setRoot(async (iframe) => {
      return await iframe.waitForXPath('//*[@data-e2e-id="multiple-modal"]');
    }),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

