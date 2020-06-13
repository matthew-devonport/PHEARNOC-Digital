import React from 'react'
import Services from './Services'
import Team from './Team'
import Customers from './Customers'


class Main extends React.Component {



    render() {
        return (
            <React.Fragment>
                <div id="main">
                    <Services />
                    <Team />
                    <Customers />
                </div>

            </React.Fragment>
        )
    }
}

export default Main