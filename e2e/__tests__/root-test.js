import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Avatar', 'common'),
  baisy.suite('Components/Button', 'common'),
  baisy.suite('Components/ButtonGroup', 'common'),
  baisy.suite('Components/Breadcrumbs', 'common'),

  baisy.suite('Components/Card', 'common'),
  baisy.suite('Components/Card', 'with custom paddings'),
  baisy.suite('Components/Card', 'with multiple sections'),

  baisy.suite('Components/Checkbox', 'common'),
  baisy.suite('Components/CheckboxField', 'common'),

  baisy.suite('Components/Code', 'common'),
  baisy.suite('Components/Code', 'with custom height'),

  baisy.suite('Components/DateInput', 'common'),
  baisy.suite('Components/DateInput', 'common')
    .setStateName('open date')
    .setHeight(400)
    .setEnhancer(async (iframe) => {
      await (await iframe.waitForXPath('//input')).click();
    }),
  baisy.suite('Components/DateInput', 'common')
    .setStateName('open datetime')
    .setHeight(500)
    .setEnhancer(async (iframe) => {
      await (await iframe.waitForXPath('(//input)[2]')).click();
    }),
  baisy.suite('Components/DateInputField', 'common'),

  baisy.suite('Components/Dropdown', 'common')
    .addHeight(50),
  baisy.suite('Components/Dropdown', 'with pin')
    .addHeight(50),,
  baisy.suite('Components/Dropdown', 'with stretch')
    .addHeight(50),,

  baisy.suite('Components/FlexLayout', 'with custom gap'),
  baisy.suite('Components/FlexLayout', 'with custom offset'),

  baisy.suite('Components/Form', 'common'),

  baisy.suite('Components/Menu', 'common'),
  baisy.suite('Components/Progress', 'common'),
  baisy.suite('Components/Tag', 'common'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 10000);
});

