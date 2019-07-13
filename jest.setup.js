import * as emotion from 'emotion';
import { createSerializer } from 'jest-emotion';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import enzymeToJson from 'enzyme-to-json';
import { BoostProvider } from './src';

configure({ adapter: new Adapter() });

// make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.enzymeToJson = enzymeToJson;
global.BoostProvider = BoostProvider;

expect.addSnapshotSerializer(createSerializer(emotion));
