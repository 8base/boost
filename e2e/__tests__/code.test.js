import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Code', 'common'),
  baisy.suite('Components/Code', 'with custom height'),
  baisy.suite('Components/Code', 'with copy button story'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

