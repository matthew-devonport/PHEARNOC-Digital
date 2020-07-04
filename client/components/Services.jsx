import React from 'react';

import PopUpBox from './PopUpBox'
import PhearnocInfo from './PhearnocInfo'
import ContractUs from './ContractUs';


class Services extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            popupIsShowing: false
        }
    }

    popupContent = ''

    togglePopup = () => {
        this.setState({
            popupIsShowing: !this.state.popupIsShowing
        })
    }

    setPopup = (content) => {
        this.togglePopup(),
            this.popupContent = content
    }


    render() {
        return (
            <React.Fragment>
                <h1>What services does Phearnoc Digital offer?</h1>
                <div className="servicesArea">
                    <div className="servicesContent">
                        <img src="./img/react-icon.png" alt="React Icon" className="icons"></img>
                        <p className="centerText">What is the core of our business?</p>
                        <p className="servicesInfo">What services does PHEARNOC Digital offer to your business?</p>
                        <p onClick={() => this.setPopup(this.phearnocServices)} className="learnMore">Learn More</p>
                    </div>
                    <div className="servicesContent">
                        <img src="./img/contract-icon.png" alt="Contract Icon" className="icons"></img>
                        <p className="centerText">Contract us to code</p>
                        <p className="servicesInfo">Need your website design coded? We can do it!</p>
                        <p onClick={() => this.setPopup(this.contractUs)} className="learnMore">Learn More</p>
                    </div>
                    <div className="servicesContent">
                        <img src="./img/checklist-icon.png" alt="Maintain Icon" className="icons"></img>
                        <p className="centerText">Service Plan</p>
                        <p className="servicesInfo">Great benefits for you business at a low monthly rate.</p>
                        <p className="learnMore">Coming Soon!</p>
                    </div>
                    {/* <div className="servicesContent">
                        <img src="./img/customer-icon.png" alt="Customer Icon" className="icons"></img>
                        <p className="centerText">Excellent customer support</p>
                        <p className="servicesInfo">Clear communication and support means great peace of mind</p>
                        <p className="learnMore">Learn More</p>
                    </div> */}
                </div>
                {this.state.popupIsShowing && <PopUpBox content={this.popupContent} togglePopup={this.togglePopup}
                />}
        
            </React.Fragment>
        )
    }
    phearnocServices = (
        <div>
            <img src="./img/logo.png" alt="Main Logo" className="popUpLogo centerImg"></img>
            <PhearnocInfo />
        </div>
    )

    contractUs = (
        <div>
            <img src="./img/logo.png" alt="Main Logo" className="popUpLogo centerImg"></img>
            <ContractUs />
        </div>
    )    

}
export default Services