import React from 'react';
import { HashRouter as NavLink, Link } from 'react-router-dom';



class Nav extends React.Component {

    
    render() {
        return (
            <div className="navBackground fixed">
                <div className="leftNav fixed">
                    <div className="leftLinks">HOME</div>
                </div>
                <div className="rightNav fixed">
                <div className="rightLinks">ABOUT</div>
                <div className="rightText">CONTACT:</div>
                <div className="rightLinks">PHONE</div>
                <div className="rightLinks">EMAIL</div>
                </div>
            </div>
        )
    }
    


}
export default Nav