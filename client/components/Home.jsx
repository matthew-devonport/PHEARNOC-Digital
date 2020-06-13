import React from 'react'

import Header from './Header'
import Main from './Main'
import Nav from './Nav'
import Footer from './Footer'


class Home extends React.Component {


    render() {
        return (
            <React.Fragment>
                <Nav />
                    <Header />
                    <Main />
                    <Footer />
            </React.Fragment>

        )
    }
}


export default Home