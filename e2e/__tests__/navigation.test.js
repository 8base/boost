import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Navigation', 'default'),
  baisy.suite('Components/Navigation', 'default', 'expand')
    .setEnhancer(async (iframe) => {
      const expand = await iframe.waitForXPath('//*[@data-e2e-id="expand"]');

      await expand.click();
    }),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

