import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/SecondaryNavigation', 'default'),
  baisy.suite('Components/SecondaryNavigation', 'default', 'hover')
    .setEnhancer(async (iframe) => {
      const navigationItem = await iframe.waitForXPath('//*[contains(text(),"First item")]/../../div');

      await navigationItem.hover();
    }),
];

SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

