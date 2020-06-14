import React from 'react';




class Team extends React.Component {

    render() {
        return (
<React.Fragment>
                <h1>Meet the Team!</h1> 
                <div className="servicesArea">               
                <div className="servicesContent">
                <img src="./img/matthew-devonport.jpg" alt="React Icon" className="teamPic"></img>
                <p className="centerText">Matthew Devonport</p>
                <p className="servicesInfo">Here is some text</p>
                </div>
                <div className="servicesContent">
                <img src="./img/lyondhur-picciarelli.jpg" alt="Shopping Icon" className="teamPic"></img>   
                <p className="centerText">Lyondhur Picciarelli</p>
                <p className="servicesInfo">Here is some text</p>
                </div> 
            </div>
            </React.Fragment>
        )
    }
    


}
export default Team