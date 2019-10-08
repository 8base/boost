import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/NoData', 'default story'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

