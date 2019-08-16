import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Tooltip', 'with click trigger', 'open')
    .addRootHeight(50)
    .setEnhancer(async (iframe) => {
      const icon = await iframe.waitForXPath('//i');
      await icon.click();

      const message = await iframe.waitForXPath('//*[contains(@class,"ignore-react-onclickoutside")]');
      await message.click();
    }),
  baisy.suite('Components/Tooltip', 'with theme'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});
