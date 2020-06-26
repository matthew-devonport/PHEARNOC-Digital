import React from 'react'

class PhearnocInfo extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h2 className="popUpTitle">What does PHERANOC Digital actually offer to my business or project?</h2>
                <div className="popUpBorderBox">
                <p className="centerText popUpBold popUpTopTitle">We build websites that connects your business with your customers.</p>    
                <img src="./img/websites.png" alt="Websites Pictures" className="websitePic"></img>
                <p className="popUpText">
                How we shape this is by discussing with you what you offer to your customers, how you connect with them and what services or products you provide to them.<br /><br />
                <strong>These websites we create are either:</strong><br /><br />
                <ul>
                <li>Custom built.</li><br />
                <li>Built using a template to your liking.</li><br />
                <li>Shaped similar to a website that is currently live.</li><br />
                </ul><br />
                <strong>Your website will always be:</strong><br /><br />
                <ul>
                <li>Easy to read and navigate.</li><br />                    
                <li>Responsive on desktops/laptops/tablets/phones.</li><br />  
                </ul>
                How this will look and function depends on the size and budget of your project/business.<br/>
                <p className="centerText popUpBold">It doesn't stop there!</p>
                <br />     
                Importantly, what we offer isn't just building a website for your business. We want to guide our customers through the complexity of the digital world.<br /><br />
                We understand the importance of having a digital presence/trading abilities in current times and also how rapidly changing the digital and real world envrionments are.<br /><br />
                Making sure that our customers and their businesses are opertaing online at their maximum ability is our main service and objective.
                <br />       
                We make the processes as simple and as easy as possible to make sure you and your business is not left in the dark.<br /><br />
                <p className="centerText popUpLargerText">This gives you peace of mind that you are outsourcing your business to your customers digitally in the most effective way possible.</p>
                <br /><br />       
                <strong>The ways we do this are:</strong><br /><br />
                <ul>                  
                <li>Helping with problem solving when you hit road blocks.</li><br />                   
                <li>Linking current available videos or creating easy to access videos showing step by step how to achieve the questions you have on any uncertainties.</li><br />    
                <li>Keeping in regular contact to make sure that you're happy with how your business is running digitally.</li><br />
                </ul>
                <p className="centerText popUpBold">Sounds great! I'm interested! What's the next step?</p>
                <p className="centerText">Get in touch with us! Click one of the options below and give us a quick rundown on what your business or idea is!</p>    
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

export default PhearnocInfo




