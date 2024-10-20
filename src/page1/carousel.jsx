import React from "react";
import Carousel from "react-bootstrap/Carousel";
import yard from "../pics/yard.webp";
import yard2 from "../pics/yard2.webp";
import yard3 from "../pics/yard3.webp";
import yard4 from "../pics/yard4.webp";
import yard5 from "../pics/yard5.webp";
import yard6 from "../pics/yard6.webp";
import yard7 from "../pics/yard72.jpg";
import yard78 from "../pics/yard78.jpg";
function UncontrolledExample() {
  return (
    <div className="ccr">
      <Carousel>
      <Carousel.Item>
          <div style={{ position: "relative", display: "flex" }}>
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "150px",
                color: "black",
              }}
            >
              <h1>
                Your style, Your
                <br />
                Space ,Your
                <br />
                Summer
              </h1>
              <p>
              Explore a range of items to
                <br />
               Complete your home's look.
              </p>

              <button className="bbb333">shop now </button>
            </div>
            <img className="img333" src="	https://i.ebayimg.com/00/s/NDEzWDE2MDA=/z/SaAAAOSwI7Vmh~WR/$_57.JPG" alt="" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgposition">
            <div className="color">
              <h2>
                Dream homes,
                <br />
                convenient prices
              </h2>
              <p>Shop affordable home products you’ve always wanted.</p>
              <button className="bbb">Explore offers</button>
            </div>
            <img className="img33" src={yard} alt="" />
            <img className="img33" src={yard2} alt="" />
            <img className="img33" src={yard3} alt="" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ position: "relative", display: "flex" }}>
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "150px",
                color: "white",
              }}
            >
              <h1>
                Summer fun begins
                <br />
                off-road
              </h1>
              <p>
                Upgrade your ATV or UTV with the
                <br />
                right parts and accessories
              </p>

              <button className="bbb33">Find your parts</button>
            </div>
            <img className="img333" src="https://i.ebayimg.com/00/s/NDEzWDE2MDA=/z/ZrEAAOSwxGJmcYwL/$_57.JPG" alt="" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgposition">
            <div className="color2">
              <h2>
                Everything you need
                <br />
                for your vehicle
              </h2>
              <p>Get parts and accessories for your next adventure.</p>
              <button className="bbb3">Shop now</button>
            </div>
            <img className="img33" src={yard4} alt="" />
            <img className="img33" src={yard5} alt="" />
            <img className="img33" src={yard6} alt="" />
          </div>
        </Carousel.Item>
      
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
