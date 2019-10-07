import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Dropdown', 'common')
    .addRootHeight(50),
  baisy.suite('Components/Dropdown', 'with pin')
    .addRootHeight(50),
  baisy.suite('Components/Dropdown', 'with stretch')
    .addRootHeight(50)
    .setEnhancer(async (iframe) => {
      await (await iframe.waitForXPath('//*[contains(text(),"With body stretch")]/..//button')).click();
      await (await iframe.waitForXPath('//*[contains(text(),"With body stretch")]/..//button')).click();
    }),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

