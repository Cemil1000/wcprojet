import {IoLocationSharp, IoCall, IoPersonCircleSharp}from 'react-icons/Io5'
import {ImFacebook, ImDribbble, ImInstagram} from "react-icons/im";
import {IoLogoTwitter} from "react-icons/Io";
import {TiSocialGooglePlus} from "react-icons/ti";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {Component} from 'react';


class Section9 extends Component {
    state = {  
        userName:"",
        classNameElement:"",
        userEmail:"",
        subject:"",
        message:"",
        btn: <input onClick={(e)=> this.check(e)}  type="submit" id="contact-submit" className={"btnForm btn-transparent"} value="Submit"/>
    }
      
    check(e) {
        const { userName, userEmail, subject, message} = this.state
            e.preventDefault()
            if( userName === "" || userEmail === "" || subject === "" || message === "" ){
               this.setState({classNameElement:"Error"} )
            }
            else{
                this.setState({classNameElement:"Ok", btn:<input type="submit" id="contact-submit" className={"btnFormSending btn-transparent"} value="Sending..." disabled />} )
            }
        }

    render(){
        const { userName, userEmail, subject, message, classNameElement, btn} = this.state
        const services =[
            {
                icon: <IoLocationSharp size={"50"} className="icon-Section2"/>,
                titre: "Our Location",
                description: <ul>
                                <li>14/05, Stockhome</li>
                                <li>Victori Palace , United States</li>
                            </ul>
            },
            {
                icon: <IoCall size={"50"} className="icon-Section2"/>,
                titre: "Call Us",
                description: <ul>
                                <li>Office: (03) 9283 2617</li>
                                <li>Fax: +61 3827 3590</li>
                            </ul>
            },
            {
                icon: <IoPersonCircleSharp size={"50"} className="icon-Section2"/>,
                titre: "We are social",
                description: <ul className="logos">
                                <li><a href=""><ImFacebook size={"15"} className="logo"/></a></li>
                                <li><a href=""><IoLogoTwitter size={"15"} className="logo"/></a></li>
                                <li><a href=""><TiSocialGooglePlus size={"20"} className="logo"/></a></li>
                                <li><a href=""><ImDribbble size={"15"} className="logo"/></a></li>
                                <li><a href=""><ImInstagram size={"15"} className="logo"/></a></li>
                            </ul>
            }
        ]
    
        const service = services.map((elem, index)=>{
            console.log(elem);
            return(
                <>
                    <div key={"cardS9 "+ index} className="card">
                        <div className="card-body">
                            <p>{elem.icon}</p>
                            <h3>{elem.titre}</h3>
                            {elem.description}
                        </div>
                    </div>
                </> 
            )
        })
    
        return (
            <>
                <section id="section9">
    
                    <div id="titre-general">
                        <h4>DROP US A NOTE</h4>
                        <h2>Contact Us.</h2>
                        <span></span>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                        reiciendis quasi itaque, obcaecati atque sit!
                        </p>
                    </div>
                    
                    <div className="allInfo container">
                        <div className="divLeft-map">
                            <div className="map">
                            
                                <Map google={this.props.google} zoom={14}>
     
                                    <Marker onClick={this.onMarkerClick}
                                    name={'Current location'} />
    
                                    <InfoWindow onClose={this.onInfoWindowClose}>
                                   
                                    </InfoWindow>
                                </Map> 
                                
                            </div>
                        </div>
        
                        <div className="divRight-form">
                            <form className="contact-form" method="post" action="sendmail.php" role="form">				
                                <div>
                                    <input value={userName} onChange={(e)=>{this.setState({userName: e.target.value})}} type="text" placeholder="Your Name" className={"form-control "+classNameElement} name="name" id="name"/>
                                </div>
                                <div>
                                    <input value={userEmail} onChange={(e)=>{this.setState({userEmail: e.target.value})}} type="email" placeholder="Your Email" className={"form-control "+classNameElement} name="email" id="email"/>
                                </div>
                                <div>
                                    <input value={subject} onChange={(e)=>{this.setState({subject: e.target.value})}} type="text" placeholder="Subject" className={"form-control "+classNameElement} name="subject" id="subject"/>
                                </div>
                                <div>
                                    <textarea value={message} onChange={(e)=>{this.setState({message: e.target.value})}} rows="6" placeholder="Message" className={"form-control "+classNameElement} name="message" id="message"></textarea>	
                                </div>     
                                <div id="cf-submit">
                                    {btn}
                                </div>						         
                            </form> 
                        </div>
    
                    </div>
    
                    <div className="container cards-Section9">
                        {service}
                    </div>
                    
                </section>
            </>
        )
    }
    
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAt8A33yjU75xDVn2DEJrZssSA2yr_JMEc")
  })(Section9)