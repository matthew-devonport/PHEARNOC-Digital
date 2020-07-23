import React from 'react';




class Team extends React.Component {

    render() {
        return (
<React.Fragment>
    <div className="greyBackground">
                <h1 className="subTitles">Meet the Team!</h1> 
                <div className="teamArea">               
                <div className="teamContent">
                <img src="./img/matthew-devonport.jpg" alt="React Icon" className="teamPic"></img>
                <p className="teamTitle">Matthew Devonport</p>
                <p className="teamInfo">Owner / Developer / Founder</p>
                <div className="teamIcons">
                <a href="https://www.facebook.com/MatthewDevonport" target="_blank"><i className="fab fa-facebook-square fa-lg facebookIcon"></i></a>
                <a href="https://www.instagram.com/matthew_devonport" target="_blank"><i className="fab fa-instagram instaIcon fa-lg"></i></a>
                <a href="https://www.linkedin.com/in/matthew-devonport" target="_blank"><i className="fab fa-linkedin linkedIcon fa-lg"></i></a>
                </div>  
                </div>
                <div className="teamContent">
                <img src="./img/lyondhur-picciarelli.jpg" alt="Shopping Icon" className="teamPic"></img>   
                <p className="teamTitle">Lyondhur Picciarelli</p>
                <p className="teamInfo">Design &amp; Systems Adviser</p>
                <div className="teamIcons">
                <a href="https://www.facebook.com/lyondhur" target="_blank"><i className="fab fa-facebook-square fa-lg facebookIcon"></i></a>
                <a href="https://www.instagram.com/lyondhur" target="_blank"><i className="fab fa-instagram instaIcon fa-lg"></i></a>
                <a href="https://www.linkedin.com/in/lyondhur" target="_blank"><i className="fab fa-linkedin linkedIcon fa-lg"></i></a>
                </div>         
                </div> 
            </div>
            </div>
            </React.Fragment>
        )
    }
    


}
export default Team