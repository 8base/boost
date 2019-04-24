import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Select', 'common'),
  baisy.suite('Components/Select', 'common', 'open')
    .addRootHeight(50)
    .setEnhancer(async (iframe) => {
      const selectTrigger = await iframe.waitForXPath('(//input)[4]');

      await selectTrigger.click();
    }),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

