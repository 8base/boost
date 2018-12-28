import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Card', 'common'),
  baisy.suite('Components/Card', 'with custom paddings'),
  baisy.suite('Components/Card', 'with multiple sections'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

