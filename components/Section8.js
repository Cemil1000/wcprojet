const allCards = [
  {
    img: <img src="img/blog/post-1.jpg" alt="Femme qui travail" />,
    title_link: <a href="#">Ten things about Business</a>,
    description:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptatem accusantium dolorum, maxime eos blanditiis sint enim necessitatibus placeat dolor.",
    liLeft_link: <a href="#">Jonathon Ive</a>,
    liRight_spanDate: "15th December 2017",
    btnArticle_link: <a href="#">Read more</a>,
  },
  {
    img: (
      <img src="img/blog/post-2.jpg" alt="Team de 2 qui travail sur un Pc" />
    ),
    title_link: <a href="#">Something I need to tell you</a>,
    description:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptatem accusantium dolorum, maxime eos blanditiis sint enim necessitatibus placeat dolor.",
    liLeft_link: <a href="#">Jonathon Ive</a>,
    liRight_spanDate: "15th December 2017",
    btnArticle_link: <a href="#">Read more</a>,
  },
  {
    img: <img src="img/blog/post-3.jpg" alt="Team de 2 qui travail" />,
    title_link: <a href="#">Are you doing the Right Way?</a>,
    description:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptatem accusantium dolorum, maxime eos blanditiis sint enim necessitatibus placeat dolor.",
    liLeft_link: <a href="#">Jonathon Ive</a>,
    liRight_spanDate: "15th December 2017",
    btnArticle_link: <a href="#">Read more</a>
  }
];

const cardsList = allCards.map((elem) => {
  return (
    <>  
        <article className={"card "}>
          {elem.img}
          <h3>{elem.title_link}</h3>

          <ul>
            <li className={"liLeft "}>
              <span>By </span>
              {elem.liLeft_link}
            </li>
            <li className={"liRight "}>
              <span>By </span>
              {elem.liRight_spanDate}
            </li>
          </ul>

          <p>{elem.description}</p>

          <div className={"btnArticle "}>{elem.btnArticle_link}</div>
        </article>
    </>
  );
});

export default function Section8() {
  return (
    <>
      <section id="section8">
        <div id="titre-general">
          <h4>OUR UNTOLD STORY</h4>
          <h2>Blog.</h2>
          <span></span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            reiciendis quasi itaque, obcaecati atque sit!
          </p>
        </div>

        <div className="blog container">
          <div className="cardsArticle">
            {cardsList}
            </div>
        </div>
      </section>
    </>
  );
}
