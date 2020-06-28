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
                    <Team />
                    </div>
                    <Footer />
            </React.Fragment>

        )
    }
}


export default AboutUs