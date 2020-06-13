import React from 'react'
import { HashRouter as NavLink, Link } from 'react-router-dom';

class Footer extends React.Component {



    render() {
        return (
            <React.Fragment>
                <div id='footer'>
                    <footer>
                        <div className="leftFooter">
                       </div>
                       <ul className="footer-nav">
                        </ul>
                        <p className="copyrightText">
                            Copyright &copy; Flash Gas and Plumbing. All rights reserved.<br />
                            <a href="https://github.com/matthew-devonport" target="_blank" className="matty">Website Design &amp; Build by Matthew Devonport</a>
                        </p>
                    </footer>
                </div>

            </React.Fragment>
        )
    }
}


export default Footer