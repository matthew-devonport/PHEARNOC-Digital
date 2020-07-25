import React from 'react'

import Header from './Header'
import Team from './Team'
import AboutNav from './AboutNav'
import Footer from './Footer'


class AboutUs extends React.Component {


    render() {
        return (
            <React.Fragment>
                <AboutNav />
                <Header />
                <div id="aboutUs">
                    <h1 className="aboutTitle">Who are PHEARNOC Digital and what do we do?</h1>
                    <div id="aboutArea">
                    <div className="aboutUsInfo">
                    <p className="aboutUsBold centerText">PHEARNOC Digital builds responsive websites for small/medium sizes businesses while nurturing these businesses through IT related problems.</p><br />
                    <p className="centerText">This allows businesses to feel safe and guided while having a strong online presense to maximise their trading potential.</p><br /><br />
                    <p>Our businesses is built on having strong integrial values. This is based on having excellent communication with customers, delivering professional products to them and finding solutions to problems that
                    are presented to ourselves and our clients.
                    We want to build long lasting relationships with our clients and gain their trust by delivering on promises made in a timely manner.
                    </p>
                    </div>
                    <div className="logoFlex">
                    <img src="./img/logo-black.png" alt="Main Logo" className="aboutUsLogo"></img>
                    </div>
                    </div>
                    <div className="contactUs">
               <p className="centerText popUpBold">Sounds great! I'm interested! What's the next step?</p>
                <p className="centerText inTouch">Get in touch with us! Click one of the options below and give us a quick rundown on what project you're working on and how we can help!</p>    
               <div className="contactFlex">
                <div className="contactColumn">
               <img src="./img/phone.png" alt="React Icon" className="phoneLogo centerImg"></img>  
               <a className="centerText">Phone Us</a>
               </div>
               <div className="contactColumn">  
               <img src="./img/email.png" alt="React Icon" className="emailLogo centerImg"></img>
               <a className="centerText">Email Us</a>
               </div>
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