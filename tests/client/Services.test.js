import React from 'react'
import { shallow } from 'enzyme'

import Services from '../../client/components/Services'

describe('<Services /> Component', () => {
    let wrapper, instance
      wrapper = shallow(<Services />)
      instance = wrapper.instance()
       
      test('Clicking learnMore calls popup', () => {
        expect.assertions(1)
        let button = wrapper.find('#learnMore')
        button.simulate('click')
        expect(instance.state.popupIsShowing).toBeTruthy()
      })  
})