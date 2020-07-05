import React from 'react'



class Header extends React.Component {



    render() {
        return (
            <React.Fragment>
                <div id="header">
                    <div className="headerFlex">
                        <div><img src="./img/logo.png" alt="Main Logo" className="mainLogo"></img></div>
                    <div className="slogan">FEAR NOT!<br />WE WILL BE YOUR DIGITAL PARTNER</div>
                    </div>
                    <img src="./img/eyes.gif" alt="React Icon" className="eyes"></img>
                    <img src="./img/claw.png" alt="React Icon" className="claw"></img>
                </div>
            </React.Fragment>
        )
    }
}

export default Header