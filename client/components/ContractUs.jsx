import React from 'react'

class ContractUs extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h2 className="popUpTitle">Can I contract PHERANOC Digital for a project?</h2>
                <div className="popUpBorderBox">
                <p className="centerText popUpBold popUpTopTitle">Need a React Developer? We're perfect!</p>    
                <img src="./img/coding.jpg" alt="Contract Coding" className="websitePic"></img>
                <p className="popUpText">
                There could be a number of reasons why you need a react developer to help you with your project.<br /><br />
                <strong>For example:</strong><br /><br />
                <ul>
                <li>You're a graphic designer that has a client who is looking for a website to be built and deployed</li><br />
                <li>Have you created a website template that needs to be coded? We can build it!</li><br />
                <li>Are you also a developer or a business that has client overflow? Hire us to help manage that overflow!</li><br />
                </ul>
                <p className="centerText popUpBold"> If there's a fit for us in your project. We would love to help.</p>
                <br />     
                We understand that projects scale in size, workload and timeframes. We are happy to negotiate on price or value for our services.<br /><br />     
                <strong>This is dependant on:</strong><br /><br />
                <ul>                  
                <li>What or how much work is required in regards to the projects budget.</li><br />                   
                <li>Urgency on when the work needs to be completed.</li><br />    
                </ul>
                <p className="popUpLargerText centerText">Our business gives you control on scope and budget. We fit to your needs. We are more than happy to discuss and negotiate our services.</p>    
               <p className="centerText popUpBold">Sounds great! I'm interested! What's the next step?</p>
                <p className="centerText">Get in touch with us! Click one of the options below and give us a quick rundown on what project you're working on and how we can help!</p>    
                </p>
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
            </React.Fragment>
        )
    }
}

export default ContractUs