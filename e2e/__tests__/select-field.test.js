import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/SelectField', 'common'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

