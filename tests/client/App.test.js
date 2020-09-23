import React from 'react'
import Enzyme, {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter } from 'react-router';

import App from '../../client/components/App'
import Home from '../../client/components/Home'
App.prototype.componentDidMount = () => {}
Home.prototype.componentDidMount = () => {}

Enzyme.configure({adapter: new Adapter()})

test('test runner is working', () => {
  expect(true).toBeTruthy()
})

test('valid path should direct to Home', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Home)).toHaveLength(1);
});




