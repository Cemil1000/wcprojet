import {IoMdCopy}from 'react-icons/Io'
import {IoAlarmOutline, IoBookOutline}from 'react-icons/Io5'

export default function Section2() {

    const talent =[
        {
            icon: <IoMdCopy size={"40"} className="icon-Section2"/>,
            title: 'WordPress Theme',
            description: 'Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.'
        },
        {
            icon: <IoAlarmOutline size={"40"} className="icon-Section2"/>,
            title: 'Responsive Design',
            description: 'Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.'
        },
        {
            icon: <IoBookOutline size={"40"} className="icon-Section2"/>,
            title: 'Media & Advertisement',
            description: 'Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.'
        }
    ]
    
    const list = talent.map(elem=>{
        return(
            <>
                <div className="card ">
                    <p>{elem.icon}</p>
                    <h3>{elem.title}</h3>
                    <p>{elem.description}</p>
                </div>
            </> 
        )
    })
    
    return (
        <>
            <section id="section2">
                <div className="container cards-Section2">
                    {list}
                </div>

                <div className="about">
                    <div className="grid-container">
                        <div className="imgCreativity">
                            <img
                                src="img/about/about-1.jpg"
                                alt="image d'un homme sur son ordinateur"
                            />
                        </div>
                        <div className="textCreativity">
                            <h2>Creativity is in our blood</h2>
                            <p>
                                Curabitur felis nibh, imperdiet eu erat non, luctus cursus
                                lectus. Donec maximus diam leo, sed fringilla nisl auctor eget.
                                Donec dictum neque est, ac faucibus ex blandit a Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit. Recusandae quo
                                minima ab aperiam molestiae natus repellendus neque culpa iure,
                                nemo veritatis explicabo facilis, officia, saepe! Et corrupti
                                odit, non deserunt.
                            </p>
                        </div>
                        <div className="textBox">
                            <h2>We think out of the Box</h2>
                            <p>
                                Curabitur felis nibh, imperdiet eu erat non, luctus cursus
                                lectus. Donec maximus diam leo, sed fringilla nisl auctor eget.
                                Donec dictum neque est, ac faucibus ex blandit a Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit. Recusandae quo
                                minima ab aperiam molestiae natus repellendus neque culpa iure,
                                nemo veritatis explicabo facilis, officia, saepe! Et corrupti
                                odit, non deserunt.
                            </p>
                        </div>
                        <div className="ImgBox aboutSpace">
                            <img
                                src="img/about/about-2.jpg"
                                alt="image d'un homme qui réfléchit"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

