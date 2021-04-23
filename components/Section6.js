export default function Section6() {
    const team =[
        {
            img: "img/team/member-1.jpg",
            nom: "Shawshank Redemption",
            role: "Head Of Marketing",
            descprition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio."
        },
        {
            img: "img/team/member-2.jpg",
            nom: "Luis Anthon",
            role: "Web Developer",
            descprition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio."
        },
        {
            img: "img/team/member-3.jpg",
            nom: "Jonathon Andrew",
            role: "Head Of Management",
            descprition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio."
        },
        {
            img: "img/team/member-4.jpg",
            nom: "Michael Jonson",
            role: "Head Of Management",
            descprition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio."
        }
    ]

    const personne = team.map(elem=>{
        return(
            <>
                <div className="card ">
                    <img src={elem.img} alt="Portrait photo"/>
                    <div className="card-body">
                        <h3>{elem.nom}</h3>
                        <span>{elem.role}</span>
                        <p>{elem.descprition}</p>
                        <ul>
                            
                        </ul>
                    </div>
                </div>
            </> 
        )
    })
    
    return (
        <>
            <section id="section5">
                <div id="titre-general">
                    <h4>Easy pricing</h4>
                    <h2>Princing.</h2>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque, obcaecati atque sit!</p>
                </div>
                <div className="container cards-Section5">
                    <div className="card">
                        <div>
                            <img src="./img/about/about-1.jpg" alt="Portrait photo"/>
                        </div>
                        
                        <div className="card-body">
                            <ul>
                                <li>1GB Disk Space</li>
                                <li>10 Email Account</li>
                                <li>Script Installer</li>
                                <li>1 GB Storage</li>
                                <li>10 GB Bandwidth</li>
                                <li>24/7 Tech Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}