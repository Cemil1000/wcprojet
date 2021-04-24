import { FaQuoteLeft } from "react-icons/fa";
import { Slide } from "react-slideshow-image";

export default function Section7() {
  const allCardsSlide = [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?",
      img: <img src="img/client-logo/clients-1.jpg" alt="profil d'une femme" />,
      titre: "Matt Cutts",
      NomDuDomaine: "CEO , Company Name",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?",
      img: <img src="img/client-logo/clients-2.jpg" alt="profil d'un homme" />,
      titre: "Elon Musk",
      NomDuDomaine: "CEO , Company Name",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?",
      img: <img src="img/client-logo/clients-1.jpg" alt="profil d'une femme" />,
      titre: "Jonathon Ive",
      NomDuDomaine: "CEO , Company Name",
    },
  ];

  const cardsSlide = allCardsSlide.map((elem) => {
    return (
      <>
        <div className="each-slide">
          <FaQuoteLeft size={"40"} className="iconQuote" />
          <div className="description">
            <p>{elem.description}</p>
          </div>
          <div className="imgProfil">{elem.img}</div>
          <div className="textProfil">
            <h4>{elem.titre}</h4>
            <span>{elem.NomDuDomaine}</span>
          </div>
        </div>
      </>
    );
  });

  const proprietes = {
    duration: 50000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
    onChange: true,
    
  };
  return (
    <>
    
      <section className="section7">
         <div id="section7" className="container">
           <div className="allSlide ">
          <Slide {...proprietes}>
            {cardsSlide}

          </Slide>
        </div>
        
      </div>
      </section>
    
    </>
  );
}
