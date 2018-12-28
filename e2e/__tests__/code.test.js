import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Code', 'common'),
  baisy.suite('Components/Code', 'with custom height'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

