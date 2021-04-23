import {IoLocationSharp, IoCall, IoPersonCircleSharp}from 'react-icons/Io5'
import { ImFacebook, ImDribbble, ImInstagram} from "react-icons/im";
import { IoLogoTwitter } from "react-icons/Io";
import { TiSocialGooglePlus } from "react-icons/ti";

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
                <div className="container cards-Section9">
                    {service}
                </div>
            </section>
        </>
    )
}