import {AiOutlineSearch} from 'react-icons/ai'

export default function Section4() {

  const allCards = [
    {
      img: <img src="img/portfolio/portfolio-1.jpg" alt="" />,
      rootImg: "images/portfolio/portfolio-5.jpg",
      titreLien: "#",
      titre:"AirBnB Postcard",
    },
    {
      img: <img src="img/portfolio/portfolio-2.jpg" alt="" />,
      rootImg: "images/portfolio/portfolio-5.jpg",
      titreLien: "#",
      titre:"AirBnB Postcard",
    },
    {
      img: <img src="img/portfolio/portfolio-3.jpg" alt="" />,
      rootImg: "images/portfolio/portfolio-5.jpg",
      titreLien: "#",
      titre:"AirBnB Postcard",
    },
    {
      img: <img src="img/portfolio/portfolio-4.jpg" alt="" />,
      rootImg: "images/portfolio/portfolio-5.jpg",
      titreLien: "#",
      titre:"AirBnB Postcard",
    },
    {
      img: <img src="img/portfolio/portfolio-5.jpg" alt="" />,
      rootImg: "images/portfolio/portfolio-5.jpg",
      titreLien: "#",
      titre:"AirBnB Postcard",
    },
    {
      img: <img src="img/portfolio/portfolio-1.jpg" alt="" />,
      rootImg: "images/portfolio/portfolio-5.jpg",
      titreLien: "#",
      titre:"AirBnB Postcard",
    },
  
  ]
  
  const cardsList = allCards.map((elem, index) => {
    return (
      <>
        <div key={"cardS4"+index} className="cardPortfolio" >
          {elem.img}
          <div className="caption">
            <a className="search-icon" href={elem.rootImg} data-lightbox="image-1">
            <AiOutlineSearch size={"35"} />
            </a>
            <h4><a href={elem.titreLien}>{elem.titre}</a></h4>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <section id="section4">
        <div id="titre-general">
          <h4>RECENT WORK</h4>
          <h2>WORK SHOWCASE.</h2>
          <span></span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            reiciendis quasi itaque, obcaecati atque sit!
          </p>
        </div>

        <div className="portfolio-filter">
          <button type="button" data-filter="all" className="mixitup-control-active">All </button>
          <button type="button" data-filter="all" className="mixitup-control-active">PHOTOGRAPHY </button>
          <button type="button" data-filter="all" className="mixitup-control-active">IOS APP</button>
          <button type="button" data-filter="all" className="mixitup-control-active">DEVELOPMENT </button>
          <button type="button" data-filter="all" className="mixitup-control-active">DESIGN </button>
        </div>

        <div className="allCards">
          {cardsList}
        </div>
      </section>
    </>
  );
}
