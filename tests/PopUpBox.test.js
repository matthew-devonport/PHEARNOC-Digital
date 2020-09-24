import React from 'react'
import { shallow } from 'enzyme'

import PopUpBox from '../client/components/PopUpBox'


  describe('<PopUpBox /> Component', () => {
    let wrapper, togglePopup
      togglePopup = jest.fn()
      wrapper = shallow(<PopUpBox togglePopup={togglePopup} content={'Test Text'} />)
  

})