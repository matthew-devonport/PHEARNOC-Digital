import React from 'react';




class Customers extends React.Component {

    render() {
        return (
            <React.Fragment>
            <h1 className="subTitles">Here are some of our clients!</h1>
            <div className="homeArea"> 
            <a href="http://www.flashgasandplumbing.co.nz" target="_blank"><img src="./img/flashgas.png" alt="flashgas logo" className="customerLogo"></img></a>
            <a href="http://www.deathless-studio.com" target="_blank"><img src="./img/deathless.png" alt="deathless logo" className="customerLogo"></img></a>
            <a href="http://www.housecoffee.co.nz" target="_blank"><img src="./img/hc-logo.png" alt="house coffee logo" className="customerLogo"></img></a>
            <a href="http://www.soulmedicine.co.nz" target="_blank"><img src="./img/sm-logo.png" alt="soul medicine logo" className="customerLogo"></img></a>
            <a href="http://www.katipocoffee.co.nz" target="_blank"><img src="./img/kc-logo.png" alt="katipo coffee logo" className="customerLogo katipoLogo"></img></a>
            </div>
            </React.Fragment>
        )
    }

}
export default Customers