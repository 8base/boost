import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/RadioGroupField', 'default story'),
  baisy.suite('Components/RadioGroupField', 'button'),
  baisy.suite('Components/RadioGroupField', 'disabled story'),
  baisy.suite('Components/RadioGroupField', 'with error'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

