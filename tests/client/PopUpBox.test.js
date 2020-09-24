import React from 'react'
import { shallow } from 'enzyme'

import PopUpBox from '../../client/components/PopUpBox'


  describe('<PopUpBox /> Component', () => {
    let wrapper, togglePopup
      togglePopup = jest.fn()
      wrapper = shallow(<PopUpBox togglePopup={togglePopup} content={'Test Text'} />)
  

      test('Content is displayed in the right place', () => {
        expect.assertions(1)
        let content = wrapper.find('#popup-content')
        expect(content.text()).toBe('Test Text')
      })

      test('Popup toggle triggered when close button pressed', () => {
        expect.assertions(1)
        let button = wrapper.find('#popup-close-services')
        button.simulate('click')
        expect(togglePopup).toHaveBeenCalled()
      })
})