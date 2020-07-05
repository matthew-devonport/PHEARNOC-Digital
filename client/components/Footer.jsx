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
                            <a>0204198333</a>
                            <a>matthew@phearnoc.com</a>
                        </div>
                        <div className="socialMedia">
                            <div className="mediaTitle">SOCIAL MEDIA</div>
                            <div className="mediaLinks">
                                <i className="fab fa-facebook-square fa-lg facebookIcon footerMedia"></i>
                                <i className="fab fa-instagram instaIcon fa-lg footerMedia"></i>
                                <i className="fab fa-linkedin linkedIcon fa-lg footerMedia"></i>
                            </div>
                        </div>
                    </div>
                    <div className="copyrightText">
                        Copyright &copy; 2020&nbsp;<p className="brand">PHEARNOC Digital.</p>&nbsp;All rights reserved.<br />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Footer