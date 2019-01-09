import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/InputField', 'common')
    .setEnhancer(async (iframe) => {
      await (await iframe.waitForXPath('//input')).click();
    }),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

