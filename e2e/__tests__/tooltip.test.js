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

  baisy.suite('Components/Tooltip', 'with placement')
    .addRootHeight(100)
    .setEnhancer(async (iframe) => {
      const clickBlock = await iframe.waitForXPath('//*[contains(text(),"Click Me")]');
      await clickBlock.click();
    }),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

