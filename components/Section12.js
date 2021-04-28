import { Slide } from "react-slideshow-image";

export default function Section12() {
  const allCardsSlide = [
    {
      img: <img src="img/client-logo/logo1.png" alt="logo" />,
    },
    {
      img: <img src="img/client-logo/logo-2.png" alt="logo" />,
    },
    {
      img: <img src="img/client-logo/logo-3.png" alt="logo" />,
    },
    {
      img: <img src="img/client-logo/logo-4.png" alt="logo" />,
    },
    {
      img: <img src="img/client-logo/logo-5.png" alt="logo" />,
    },
  ];

  const cardsSlide = allCardsSlide.map((elem, index) => {
    return (
      <>
        <div key={"cardS7" + index} className="each-slide">
          <div className="imgProfil">{elem.img}</div>
        </div>
      </>
    );
  });

  const proprietes = {
    duration: 3000,
    transitionDuration: 500,
    onChange: true,
    infinite: true,
    indicators: false,
    arrows: false,
  };

  return (
    <>
      <section className="section12">
        <div id="section12" className="container">
          <div className="allSlide">
            <Slide {...proprietes}>{cardsSlide}</Slide>
          </div>
        </div>
      </section>
    </>
  );
}

