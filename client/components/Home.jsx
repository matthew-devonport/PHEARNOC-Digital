import React from 'react'

import Header from './Header'
import Main from './Main'
import Nav from './Nav'


class Home extends React.Component {


    render() {
        return (
            <React.Fragment>
                <Nav />
                    <Header />
                    <Main />
            </React.Fragment>

        )
    }
}


export default Home