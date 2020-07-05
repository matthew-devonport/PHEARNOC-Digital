import React from 'react';




class Team extends React.Component {

    render() {
        return (
<React.Fragment>
    <div className="greyBackground">
                <h1>Meet the Team!</h1> 
                <div className="teamArea">               
                <div className="teamContent">
                <img src="./img/matthew-devonport.jpg" alt="React Icon" className="teamPic"></img>
                <p className="teamTitle">Matthew Devonport</p>
                <p className="teamInfo">Owner / Developer / Founder</p>
                <div className="teamIcons">
                <i className="fab fa-facebook-square fa-lg facebookIcon"></i>
                <i className="fab fa-instagram instaIcon fa-lg"></i>
                <i className="fab fa-linkedin linkedIcon fa-lg"></i>
                </div>  
                </div>
                <div className="teamContent">
                <img src="./img/lyondhur-picciarelli.jpg" alt="Shopping Icon" className="teamPic"></img>   
                <p className="teamTitle">Lyondhur Picciarelli</p>
                <p className="teamInfo">Design &amp; Systems Adviser</p>
                <div className="teamIcons">
                <i className="fab fa-facebook-square fa-lg facebookIcon"></i>
                <i className="fab fa-instagram instaIcon fa-lg"></i>
                <i className="fab fa-linkedin linkedIcon fa-lg"></i>
                </div>         
                </div> 
            </div>
            </div>
            </React.Fragment>
        )
    }
    


}
export default Team