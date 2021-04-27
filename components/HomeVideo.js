import { FaPlayCircle } from "react-icons/fa";
import { useState } from "react";

export default function HomeVideo(props) {
  const [contenuVideo, setContenuVideo] = useState("affiche-imgIconVideo");

  function activatePlay() {
    setContenuVideo("supp-imgIconVideo");
  }

  return (
    <>
      <section id="allVideo">
        <div className="grid-container container">
          <div className="video">
            <FaPlayCircle
              onClick={activatePlay}
              size={"80"}
              className={"icon-homeVideo " + contenuVideo}
            />

            <iframe
              width="572"
              height="360"
              src="https://www.youtube.com/embed/g3-VxLQO7do"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            >
            </iframe>
            <img
              className={"imgVideo "+ contenuVideo}
              width="572"
              height="360"
              src="img/slider/video-player-thumb.jpg"
              alt="image d'un homme qui parle"
            />
          </div>

          <div className="videoText">
            <h2>We love to make brands grow</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quo
              dolor est incidunt suscipit minima, alias numquam voluptatum rerum
              porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Labore at laboriosam unde repellat id expedita quae quisquam
              libero officia consequatur.
            </p>
            <ul className="ulVideo">
              <a href="https://themefisher.com/" target="_blank">
                Download More
              </a>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
