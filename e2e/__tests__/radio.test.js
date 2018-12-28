import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/RadioGroupField', 'default'),
  baisy.suite('Components/RadioGroupField', 'with error'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

