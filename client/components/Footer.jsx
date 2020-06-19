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
                            Copyright &copy; 2020 PHEARNOC Digital. All rights reserved.<br />
                        </p>
                    </footer>
                </div>

            </React.Fragment>
        )
    }
}


export default Footer