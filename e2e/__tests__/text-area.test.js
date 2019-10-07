import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/TextArea', 'default story'),
  baisy.suite('Components/TextArea', 'default story', 'focus')
    .setEnhancer(async (iframe) => {
      const textarea = await iframe.waitForXPath('//textarea');

      await textarea.click();
    }),
  baisy.suite('Components/TextArea', 'without value'),
  baisy.suite('Components/TextArea', 'with placeholder'),
  baisy.suite('Components/TextArea', 'with disabled'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

