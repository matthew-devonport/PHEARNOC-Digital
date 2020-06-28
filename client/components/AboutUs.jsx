import React from 'react'

import Header from './Header'
import Team from './Team'
import Nav from './Nav'
import Footer from './Footer'


class AboutUs extends React.Component {


    render() {
        return (
            <React.Fragment>
                <Nav />
                <Header />
                <div id="aboutUs">
                    <h1>Who are PHEARNOC Digital and what do we do?</h1>
                    <img src="./img/logo.png" alt="Main Logo" className="popUpLogo centerImg"></img>
                    <div className="aboutArea">
                    <div className="centerText popUpBold">PHEARNOC Digital builds responsive websites for small/medium sizes businesses while nurturing these businesses through IT related problems.<br />
                    This allows businesses to feel safe, guided and have a strong online presense to maximise their trading potenial.</div>
                    <div>Our businesses is built on having strong integrial values. This is based on having excellent communication with customers, delivering professional products to them and finding solutions to problems that
                    are presented to ourselves and our clients.
                    We want to build long lasting relationships with our clients and gain their trust by delivering on promises made in a timely manner.
                    </div>
                    </div>
                    <Team />
                </div>
                <Footer />
            </React.Fragment>

        )
    }
}


export default AboutUs