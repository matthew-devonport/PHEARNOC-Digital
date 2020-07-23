import React from 'react';




class Customers extends React.Component {

    render() {
        return (
            <React.Fragment>
            <h1 className="subTitles">Here are some of our clients!</h1>
            <div className="homeArea"> 
            <a href="http://www.flashgasandplumbing.co.nz" target="_blank"><img src="./img/flashgas.png" alt="flashgas logo" className="customerLogo"></img></a>
            <a href="http://www.deathless-studio.com" target="_blank"><img src="./img/deathless.png" alt="deathless logo" className="customerLogo"></img></a>
            </div>
            </React.Fragment>
        )
    }
    


}
export default Customers