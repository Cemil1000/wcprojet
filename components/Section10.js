import { useState } from "react";

export default function Section10(props) {
    const [contenuActive, setContenuActive] = useState("");
    const [contenuActive2, setContenuActive2] = useState("");
    const [contenuActive3, setContenuActive3] = useState("");

    function linkActive() {
        setContenuActive("active");
        setContenuActive2("");
        setContenuActive3("");
        

    }
    function linkActive2() {
        setContenuActive2("active");
        setContenuActive("");
        setContenuActive3("");
    }
    function linkActive3() {
        setContenuActive3("active");
        setContenuActive("");
        setContenuActive2("");
    }

    function btn1() {
        return(
            <>
            <div className="textLeft">
              <h2>We Create Designs and technology</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat voluptate molestias, quaerat quo natus dolor harum
                voluptatibus modi dicta ducimus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                quae officia earum dolore est quaerat cupiditate voluptatibus
                id, magni alias veniam voluptate, libero explicabo, distinctio
                atque!
              </p>
            </div>
            <div className="imgRight">
              <img
                src="img/company/company-image.jpg"
                alt="homme qui écrit sur un tableau"
              />
            </div>
          </>
        );
    }
    function btn2() {
        return(
            <>
            <div className="textLeft">
              <h2>aaaaaaaaaaaaaa</h2>
              <p>
                imus.
              </p>
              <p>
                Lorem ipsum dolor szeffeeftinctio
                atque!
              </p>
            </div>
            <div className="imgRight">
              <img
                src="img/company/company-image.jpg"
                alt="homme qui écrit sur un tableau"
              />
            </div>
          </>
        );
    }
    function btn3() {
        return(
            <>
            <div className="textLeft">
              <h2>aaezfezfezfezfa</h2>
              <p>
                imus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, cabo, distinctio
                atque!
              </p>
            </div>
            <div className="imgRight">
              <img
                src="img/company/company-image.jpg"
                alt="homme qui écrit sur un tableau"
              />
            </div>
          </>
        );
    }

    function allIF() {
        if (onClick === linkActive) {
            {btn1}
        }
        else if (onClick === linkActive2 ) {
            {btn2}
        }
        else if (onClick === linkActive3 ) {
            {btn3}
        }
    }

  return (
    <>
      <section id="section10">
        <div id="titre-general">
          <h4>LITTLE MORE BRIEF</h4>
          <h2>About Us.</h2>
          <span></span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            reiciendis quasi itaque, obcaecati atque sit!
          </p>
        </div>

        <div className="company container">
          <ul>
            <li> <a href="#"  onClick={linkActive} className={"link " + contenuActive}>Our Philosophy</a> </li>
            <li> <a href="#" onClick={linkActive2} className={"link " + contenuActive2}>Mission</a> </li>
            <li> <a href="#" onClick={linkActive3} className={"link " + contenuActive3}>Vision</a> </li>
          </ul>

          <div className="row">
             {/* {allIF} */}
             <div className="textLeft">
              <h2>We Create Designs and technology</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat voluptate molestias, quaerat quo natus dolor harum
                voluptatibus modi dicta ducimus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                quae officia earum dolore est quaerat cupiditate voluptatibus
                id, magni alias veniam voluptate, libero explicabo, distinctio
                atque!
              </p>
            </div>
            <div className="imgRight">
              <img
                src="img/company/company-image.jpg"
                alt="homme qui écrit sur un tableau"
              />
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
