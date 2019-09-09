import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/DateInput', 'common'),
  baisy.suite('Components/DateInput', 'common', 'open date')
    .setRootHeight(400)
    .setEnhancer(async (iframe) => {
      const input = await iframe.waitForXPath('//input');

      await input.click();
      await input.type('01/01/2019');
    }),
  baisy.suite('Components/DateInput', 'common', 'open datetime')
    .setRootHeight(600)
    .setEnhancer(async (iframe) => {
      const icon = await iframe.waitForXPath('((//input)[5]/../..//i)[last()]');

      await icon.click();
    }),
  baisy.suite('Components/DateInput', 'common', 'open month picker')
    .setRootHeight(600)
    .setEnhancer(async (iframe) => {
      const icon = await iframe.waitForXPath('((//input)[7]/../..//i)[last()]');

      await icon.click();
    }),
  baisy.suite('Components/DateInputField', 'common'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});
