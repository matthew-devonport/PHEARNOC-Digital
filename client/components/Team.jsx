import React from 'react';




class Team extends React.Component {

    render() {
        return (
<React.Fragment>
                <h1>Meet the Team!</h1> 
                <div className="teamArea">               
                <div className="teamContent">
                <img src="./img/matthew-devonport.jpg" alt="React Icon" className="teamPic"></img>
                <p className="teamTitle">Matthew Devonport</p>
                <p className="teamInfo">Owner / Developer / Founder</p>
                <p className="teamBio">Matthew has a passion for building applications. With 8 years experience in the tech and customer
                    service industry, he strives to deliver 
                </p>
                <div className="teamIcons">
                <i class="fab fa-facebook-square fa-lg facebookIcon"></i>
                <i class="fab fa-instagram instaIcon fa-lg"></i>
                <i class="fab fa-linkedin linkedIcon fa-lg"></i>
                </div>  
                </div>
                <div className="teamContent">
                <img src="./img/lyondhur-picciarelli.jpg" alt="Shopping Icon" className="teamPic"></img>   
                <p className="teamTitle">Lyondhur Picciarelli</p>
                <p className="teamInfo">Design &amp; Systems Adviser</p>
                <p className="teamBio">Matthew has a passion for building applications. With 8 years experience in the tech and customer
                    service industry, he strives to deliver 
                </p>
                <div className="teamIcons">
                <i class="fab fa-facebook-square fa-lg facebookIcon"></i>
                <i class="fab fa-instagram instaIcon fa-lg"></i>
                <i class="fab fa-linkedin linkedIcon fa-lg"></i>
                </div>         
                </div> 
            </div>
            </React.Fragment>
        )
    }
    


}
export default Team