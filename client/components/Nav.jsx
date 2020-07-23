import React from 'react';
import { HashRouter as NavLink, Link } from 'react-router-dom';



class Nav extends React.Component {

    
    render() {
        return (
            <div className="navBackground fixed">
                <div className="rightNav fixed">
                <div className="rightLinks">ABOUT</div>
                <div className="contactNav">
                <div className="rightText">CONTACT:</div>
                <div className="rightIcons"><a href="tel:02041988333"><i className="fas fa-phone-alt fa-lg"></i></a></div>
                <div className="rightIcons"><a href="mailto:matthew@phearnoc.com"><i className="fas fa-envelope-open-text fa-lg"></i></a></div>
                
                </div>
                </div>
            </div>
        )
    }
    


}
export default Nav