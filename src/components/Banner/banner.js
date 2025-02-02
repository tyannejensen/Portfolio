import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import headerImg from "../../assets/img/boo/namaste.png";
import TrackVisibility from "react-on-screen";
import "./banner.css";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    let ticker = setInterval(() => {
      tick();
    }, delta);

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    return () => {
      clearInterval(ticker);
    };
  }, [delta, isDeleting, loopNum, text]);

  return (
    <section className="banner" id="about-me">
      <Container>
        <Row className="align-items">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <section
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="hidden">About Me</span>
                  <h1>
                    {`Hi! I'm Ty. 
                    `}
                  </h1>
                  <p>
                    Aspiring Software Engineer with a passion for front-end
                    development. Strong foundation in graphic design and a love
                    from solving problems. My journey into development is fueled
                    by my passion for learning and my drive to combine logic and
                    creativity. Though I am new to coding, my background in math
                    and business gives me a unique perspective on crafting
                    solutions that are both visually appealing and practical. I
                    am excited to grow my skills and bring innovative ideas to
                    live.
                  </p>
                  <h2 className="typed-text">
                    <span className="wrap">
                      {" "}
                      {text}
                      <span className="cursor">|</span>
                    </span>
                  </h2>
                  <span
                    className="txt-rotate"
                    data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                  ></span>
                  <a className="banner" href="#connect">
                    Let’s Connect <span style={{ marginLeft: "5px" }}></span>
                    <ArrowRight size={20} />
                  </a>
                </section>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    className="header-image"
                    src={headerImg}
                    alt="Header Img"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
