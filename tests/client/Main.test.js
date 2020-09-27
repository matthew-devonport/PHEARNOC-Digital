import React from 'react'
import { shallow, render, mount } from 'enzyme'
import { MemoryRouter } from 'react-router';

import Main from '../../client/components/Main'


describe('<Main /> Component:', () => {
    const wrapper = mount(<MemoryRouter><Main /></MemoryRouter>);

})    