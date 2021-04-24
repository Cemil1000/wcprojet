import {IoLocationSharp, IoCall, IoPersonCircleSharp}from 'react-icons/Io5'
import { ImFacebook, ImDribbble, ImInstagram} from "react-icons/im";
import { IoLogoTwitter } from "react-icons/Io";
import { TiSocialGooglePlus } from "react-icons/ti";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export default function Section9() {
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

    const service = services.map(elem=>{
        console.log(elem);
        return(
            <>
                <div className="card">
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
                            {/* En construction */}
                            {/* 
                            <Map google={this.props.google} zoom={14}>
 
                                <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />

                                <InfoWindow onClose={this.onInfoWindowClose}>
                                <div>
                                    <h1>{this.state.selectedPlace.name}</h1>
                                </div>
                                </InfoWindow>
                            </Map> 
                            */}
                        </div>
                    </div>
    
                    <div className="divRight-form">
                        <form className="contact-form" method="post" action="sendmail.php" role="form">				
                            <div>
                                <input type="text" placeholder="Your Name" className="form-control" name="name" id="name"/>
                            </div>
                    
                            <div>
                                <input type="email" placeholder="Your Email" className="form-control" name="email" id="email"/>
                            </div>
                    
                            <div>
                                <input type="text" placeholder="Subject" className="form-control" name="subject" id="subject"/>
                            </div>
                    
                            <div>
                                <textarea rows="6" placeholder="Message" className="form-control" name="message" id="message"></textarea>	
                            </div>
                    
                            <div id="cf-submit">
                                <input type="submit" id="contact-submit" className="btnForm btn-transparent" value="Submit"/>
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

// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyBSTp0rzS8vmKcPCLGFedrG8tK1Q-bvgec")
//   })(MapContainer)