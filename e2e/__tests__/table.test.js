import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Table', 'with data'),
  baisy.suite('Components/Table', 'with loader'),
  baisy.suite('Components/Table', 'without data'),
  baisy.suite('Components/Table', 'with sort')
    .setEnhancer(async (iframe) => {
      await (await await iframe.waitForXPath('//*[contains(text(),"Id")]')).click();
      await (await await iframe.waitForXPath('//*[contains(text(),"Id")]')).click();
      await (await await iframe.waitForXPath('//*[contains(text(),"Email")]')).click();
    }),
  baisy.suite('Components/Table', 'with selection')
    .setEnhancer(async (iframe) => {
      await (await await iframe.waitForXPath('(//i)[4]')).click();
    }),
  baisy.suite('Components/Table', 'with selection', 'all selected')
    .setEnhancer(async (iframe) => {
      await (await await iframe.waitForXPath('//i')).click();
    }),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

