import React from 'react'



class Header extends React.Component {



    render() {
        return (
            <React.Fragment>             
                <div id="header">
                <img src="./img/logo.png" alt="Main Logo" className="mainLogo"></img>
                <div className="slogan">FEAR NOT! LET US BE YOUR DIGITAL PARTNER</div>
                <img src="./img/eyes.png" alt="React Icon" className="eyes"></img>
                <img src="./img/claw.png" alt="React Icon" className="claw"></img>
                </div>
            </React.Fragment>
        )
    }
}

export default Header