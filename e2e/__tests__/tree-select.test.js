import { baisy } from '../setup/TestSuiter';


const expandAllTree = async(iframe) => {
  const selectTrigger = await iframe.waitForXPath('(//*[contains(@class,"dropdown-trigger")])[2]');
  await selectTrigger.click();

  const firstToggle = await iframe.waitForXPath('//*[contains(@class,"dropdown-content")]//*[contains(@class,"toggle collapsed")]');
  await firstToggle.click();

  const secondToggle = await iframe.waitForXPath('//*[contains(@class,"dropdown-content")]//*[contains(@class,"toggle collapsed")]');
  await secondToggle.click();
};


const SUITES = [
  baisy.suite('Components/TreeSelect', 'common'),
  baisy.suite('Components/TreeSelect', 'common', 'open')
    .addRootHeight(500)
    .setEnhancer(async (iframe) => {
      const selectTrigger = await iframe.waitForXPath('(//*[contains(@class,"dropdown-trigger")])[2]');

      await selectTrigger.click();

      const firstToggle = await iframe.waitForXPath('//*[contains(@class,"dropdown-content")]//*[contains(@class,"toggle collapsed")]');
      await firstToggle.click();
    }),

  baisy.suite('Components/TreeSelect', 'common', 'select item')
    .addRootHeight(500)
    .setEnhancer(async (iframe) => {
      await expandAllTree(iframe);

      const lastCheckbox = await iframe.waitForXPath('//*[contains(@class,"dropdown-content")]//*[contains(text(),"Search me too 5")]');
      await lastCheckbox.click();
    }),

  baisy.suite('Components/TreeSelect', 'common', 'select all')
    .addRootHeight(500)
    .setEnhancer(async (iframe) => {
      await expandAllTree(iframe);

      const firstCheckbox = await iframe.waitForXPath('//*[contains(@class,"dropdown-content")]//*[contains(text(),"Search me")]');
      await firstCheckbox.click();
    }),

  baisy.suite('Components/TreeSelect', 'common', 'unselect item')
    .addRootHeight(500)
    .setEnhancer(async (iframe) => {
      await expandAllTree(iframe);

      const firstCheckbox = await iframe.waitForXPath('//*[contains(@class,"dropdown-content")]//*[contains(text(),"Search me")]');
      await firstCheckbox.click();

      const innerCheckbox = await iframe.waitForXPath('//*[contains(@class,"dropdown-content")]//*[contains(text(),"No one can get me")]');
      await innerCheckbox.click();
    }),

  baisy.suite('Components/TreeSelect', 'common', 'remove item')
    .addRootHeight(500)
    .setEnhancer(async (iframe) => {
      await expandAllTree(iframe);

      const removeButton = await iframe.waitForXPath('//*[contains(@class,"tag-item")]//button');
      await removeButton.click();
    }),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

