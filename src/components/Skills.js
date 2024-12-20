import meter1 from "../assets/img/react.png";
import meter2 from "../assets/img/backend.png";
import meter3 from "../assets/img/bootstrap.png";
import meter4 from "../assets/img/api2.jpg";
import meter5 from "../assets/img/mongo2.png";
import meter6 from "../assets/img/prog2.jpg";
import meter7 from "../assets/img/github.jpg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I am skilled in creating dynamic, user-centric web applications with expertise in Web Development, React, and UI/UX Design,<br></br> blending creativity with technical precision.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image"
                                style={{
                                  width: "150px",  /* Smaller width */
                                  height: "150px", /* Smaller height */
                                  borderRadius: "50%",
                                  objectFit: "cover",
                                }} />
                                <h5>Frontend Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image"
                                style={{
                                  width: "150px",  /* Smaller width */
                                  height: "150px", /* Smaller height */
                                  borderRadius: "50%",
                                  objectFit: "cover",
                                }} />
                                <h5>Backend Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image"
                                style={{
                                  width: "150px",  /* Smaller width */
                                  height: "150px", /* Smaller height */
                                  borderRadius: "50%",
                                  objectFit: "cover",
                                }} />
                                <h5>Database</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image"
                                style={{
                                  width: "150px",  /* Smaller width */
                                  height: "150px", /* Smaller height */
                                  borderRadius: "50%",
                                  objectFit: "cover",
                                }} />
                                <h5>Designing Purpose</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image"
                                style={{
                                  width: "150px",  /* Smaller width */
                                  height: "150px", /* Smaller height */
                                  borderRadius: "50%",
                                  objectFit: "cover",
                                }} />
                                <h5>RestApi</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image"
                                style={{
                                  width: "150px",  /* Smaller width */
                                  height: "150px", /* Smaller height */
                                  borderRadius: "50%",
                                  objectFit: "cover",
                                }} />
                                <h5>Programming Languages</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image"
                                style={{
                                  width: "150px",  /* Smaller width */
                                  height: "150px", /* Smaller height */
                                  borderRadius: "50%",
                                  objectFit: "cover",
                                }} />
                                <h5>Others</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
