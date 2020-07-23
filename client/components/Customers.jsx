import React from 'react';




class Customers extends React.Component {

    render() {
        return (
            <React.Fragment>
            <h1 className="subTitles">Here are some of our clients!</h1>
            <div className="homeArea"> 
                <img src="./img/flashgas.png" alt="flashgas logo" className="customerLogo"></img>
                <img src="./img/deathless.png" alt="deathless logo" className="customerLogo"></img>
            </div>
            </React.Fragment>
        )
    }
    


}
export default Customers