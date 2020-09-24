import React from 'react'
import { shallow } from 'enzyme'

import Services from '../../client/components/Services'

describe('<Services /> Component', () => {
    let wrapper, instance
      wrapper = shallow(<Services />)
      instance = wrapper.instance()
})