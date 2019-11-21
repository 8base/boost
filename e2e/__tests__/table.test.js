import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Table', 'with data'),
  baisy.suite('Components/Table', 'without data'),
  baisy.suite('Components/Table', 'with sort')
    .setEnhancer(async (iframe) => {
      await (await iframe.waitForXPath('//*[contains(text(),"Id")]')).click();
      await (await iframe.waitForXPath('//*[contains(text(),"Id")]')).click();
      await (await iframe.waitForXPath('//*[contains(text(),"Created At")]')).click();
    }),
  baisy.suite('Components/Table', 'with selection story')
    .setEnhancer(async (iframe) => {
      await (await iframe.waitForXPath('(//i)[4]')).click();
    }),
  baisy.suite('Components/Table', 'with selection story', 'all selected')
    .setEnhancer(async (iframe) => {
      await (await iframe.waitForXPath('//i')).click();
    }),
  baisy.suite('Components/Table', 'with condensed modifier'),
  baisy.suite('Components/Table', 'with bordered modifier'),
  baisy.suite('Components/Table', 'with custom no data component'),
  baisy.suite('Components/Table', 'with expandable rows')
    .setEnhancer(async (iframe) => {
      await (await iframe.waitForSelector('button[data-testid="expand-row-1"]')).click();
    }),
  baisy.suite('Components/Table', 'with controlled expandable rows', 'all expanded')
    .setEnhancer(async (iframe) => {
      await (await iframe.waitForXPath('//button[contains(., "Expand all")]')).click();
    }),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});
