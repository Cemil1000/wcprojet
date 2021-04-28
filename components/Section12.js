import {IoMdCheckboxOutline}from 'react-icons/Io'

export default function Section12() {
    const icon = <IoMdCheckboxOutline size={"14"} className="icon" />
    return (
        <>
            <section id="section12" className="separation">
                <div className="container check">
                    <div className="image">
                        <img src="./img/about/about-1.jpg" alt="Un homme sur son ordinateur"/>
                    </div>
                    <div className="section12-body">
                        <h2>We care about our work</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolorem, saepe ab, optio obcaecati id asperiores. Ab ullam qui architecto at eos distinctio debitis, libero reprehenderit excepturi rem ut odit est nam magni ratione necessitatibus, quod eaque, eius minima tempora deleniti illum aliquam! Perferendis optio dolorum blanditiis sapiente aperiam quaerat.</p>
                        <div>
                            <div>
                                <ul>
                                    <li>{icon} Creative Designers</li>
                                    <li>{icon} Genius Developers</li>
                                    <li>{icon} Growth Hackers</li>
                                    <li>{icon} Marketing Masterminds</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>{icon} Growth Hackers</li>
                                    <li>{icon} Genius Developers</li>
                                    <li>{icon} Marketing Masterminds</li>
                                    <li>{icon} Creative Designers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}