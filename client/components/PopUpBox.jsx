import React from "react"

class PopUpBox extends React.Component {
  render() {
    let { togglePopup, content} = this.props
    return (
      <React.Fragment>
        <div id='popup-overlay-services'>
            <div id='popup-content'>
            {content}
            </div>
            <a id='popup-close-services' onClick={togglePopup}>
              &times;
            </a>
        </div>
      </React.Fragment>
    )
  }
}

export default PopUpBox