import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import { MemoryRouter } from 'react-router';

import Nav from '../../client/components/Nav'



describe('<Nav /> Component:', () => {

    test('Includes link to AboutUs component', () => {                                       
        const wrapper = mount(<MemoryRouter><Nav /></MemoryRouter>);                                                              
        expect(wrapper.find('Link').props().to).toBe('/about');                   
      });
})    