import React from 'react'
import { HashRouter as NavLink, Link } from 'react-router-dom';

class Footer extends React.Component {



    render() {
        return (
            <React.Fragment>
                <div id='footer'>
                    <div className="footerFlex">
                        <div className="leftFooter">
                            <div className="contactTitle">CONTACT US</div>
                            <div id="contactLinks"></div>
                            <a href="tel:02041988333" className="contact">02041988333</a>
                            <a href="mailto:matthew@phearnoc.com" className="contact">matthew@phearnoc.com</a>
                        </div>
                        <div className="socialMedia">
                            <div className="mediaTitle">SOCIAL MEDIA</div>
                            <div className="mediaLinks">
                            <a href="https://www.facebook.com/PHEARNOC" target="_blank" className="footerMedia"><i className="fab fa-facebook-square fa-lg facebookIcon"></i></a>
                            <a href="https://www.instagram.com/phearnoc" target="_blank" className="footerMedia"><i className="fab fa-instagram instaIcon fa-lg"></i></a>
                            <a href="https://www.linkedin.com/company/phearnoc-digital" target="_blank" className="footerMedia"><i className="fab fa-linkedin linkedIcon fa-lg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="footerImg"><img src="./img/eyes.png" alt="Eyes" className="footerEyes"></img></div>
                    <div className="copyrightText">
                        Copyright &copy; 2020&nbsp;<p className="brand">PHEARNOC Digital</p>. All rights reserved.<br />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Footer