import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Table', 'with data'),
  baisy.suite('Components/Table', 'with loader'),
  baisy.suite('Components/Table', 'without data'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

