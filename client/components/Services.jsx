import React from 'react';




class Services extends React.Component {

    render() {
        return (
<React.Fragment>
                <h1>What services does Phearnoc Digital offer?</h1> 
                <div className="servicesArea">               
                <div className="servicesContent">
                <img src="./img/react-icon.png" alt="React Icon" className="icons"></img>
                <p className="centerText">Code a website using React</p>
                <p className="servicesInfo">We build responsive desktop/mobile websites using React</p>
                </div>
                <div className="servicesContent">
                <img src="./img/shopping-icon.png" alt="Shopping Icon" className="icons"></img>   
                <p className="centerText">Build an online shop</p>
                <p className="servicesInfo">We can create a responsive desktop/mobile shop using Shopify</p>
                </div> 
                <div className="servicesContent">
                <img src="./img/contract-icon.png" alt="Contract Icon" className="icons"></img>     
                <p className="centerText">Contract us to code</p>
                <p className="servicesInfo">Need your website design coded? We can do it!</p>
                </div>
                <div className="servicesContent">
                <img src="./img/maintain-icon.png" alt="Maintain Icon" className="icons"></img>     
                <p className="centerText">Maintain your website</p>
                <p className="servicesInfo">Eliminate stress as we keep your website up to date with content</p>
                </div>
                <div className="servicesContent">
                <img src="./img/customer-icon.png" alt="Customer Icon" className="icons"></img>     
                <p className="centerText">Great customer support</p>
                <p className="servicesInfo">Clear communication and support means great peace of mind</p>
                </div>
            </div>
            </React.Fragment>
        )
    }
    


}
export default Services