import React from 'react'
import { shallow, render, mount } from 'enzyme'
import { MemoryRouter } from 'react-router';

import AboutNav from '../../client/components/AboutNav'


describe('<AboutNav /> Component:', () => {
    const wrapper = mount(<MemoryRouter><AboutNav /></MemoryRouter>);


    test('Includes link to Home component', () => {
        expect(wrapper.find('Link').props().to).toBe('/');
    });
})    