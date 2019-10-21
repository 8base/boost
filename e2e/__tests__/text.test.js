import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Text', 'common'),
  baisy.suite('Components/Text', 'with kind modifiers'),
  baisy.suite('Components/Text', 'with align modifiers'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

