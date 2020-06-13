import React from 'react'
import Services from './Services'
import Team from './Team'


class Main extends React.Component {



    render() {
        return (
            <React.Fragment>
                <div id="main">
                    <Services />
                    <Team />
                </div>

            </React.Fragment>
        )
    }
}

export default Main