import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Form', 'common'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

