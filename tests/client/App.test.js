import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter } from 'react-router';

import App from '../../client/components/App'
import Home from '../../client/components/Home'
import AboutUs from '../../client/components/AboutUs'

App.prototype.componentDidMount = () => { }
Home.prototype.componentDidMount = () => { }
AboutUs.prototype.componentDidMount = () => { }

Enzyme.configure({ adapter: new Adapter() })

describe('<App /> Component:', () => {

  test('Test runner is working', () => {
    expect(true).toBeTruthy()
  })

  test('Valid path should direct to Home', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  })

  test('Valid path should direct to AboutUs', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/about']}>
        <AboutUs />
      </MemoryRouter>
    );
    expect(wrapper.find(AboutUs)).toHaveLength(1);
  });
})

