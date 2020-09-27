import React from 'react'
import { shallow, render, mount } from 'enzyme'
import { MemoryRouter } from 'react-router';

import Nav from '../../client/components/Nav'


describe('<Nav /> Component:', () => {
    const wrapper = mount(<MemoryRouter><Nav /></MemoryRouter>);


    test('Includes link to AboutUs component', () => {
        expect(wrapper.find('Link').props().to).toBe('/about');
    });
})    