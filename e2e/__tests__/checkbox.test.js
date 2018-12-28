import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Checkbox', 'common'),
  baisy.suite('Components/CheckboxField', 'common'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});
