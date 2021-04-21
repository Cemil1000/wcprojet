export default function HomeVideo() {
  return (
    <>
      <section id="allVideo">
        <div className="grid-container container">
          
          <div>
            <iframe
              width="572"
              height="360"
              src="https://www.youtube.com/embed/g3-VxLQO7do"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
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
            <a href="https://themefisher.com/" target="_blank">Download More</a>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
