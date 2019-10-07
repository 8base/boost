import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Navigation', 'default story'),
  baisy.suite('Components/Navigation', 'default story', 'hover')
    .setEnhancer(async (iframe) => {
      const navigationItem = await iframe.waitForXPath('//*[@data-e2e-id="default-navigation"]//a');

      await navigationItem.hover();
    }),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

