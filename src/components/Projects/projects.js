import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/project-card.js";
// import colorSharp2 from "../../assets/img/boo/color-sharp2.png";
import projImg1 from "../../assets/img/colorfulBubble.jpeg";
import projImg2 from "../../assets/img/colorfulBubble.jpeg";
import projImg3 from "../../assets/img/colorfulBubble.jpeg";
// import projImg4 from "../../assets/img/colorfulBubble.jpeg";
// import projImg5 from "../../assets/img/colorfulBubble.jpeg";
// import projImg6 from "../../assets/img/colorfulBubble.jpeg";
import TrackVisibility from "react-on-screen";
import "./projects.css";
import "animate.css";

export const Projects = () => {
  const portfolio = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      alt: "describe here",
      imgLink:
        "hhttps://github.com/skylark-shae/Wandering-Words/blob/main/README.md",
      redirectUrl: "https://google.com",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      alt: "describe here",
      imgLink:
        "hhttps://github.com/skylark-shae/Wandering-Words/blob/main/README.md",
      redirectUrl: "https://yahoo.com",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      alt: "describe here",
      imgLink:
        "hhttps://github.com/skylark-shae/Wandering-Words/blob/main/README.md",
      redirectUrl: "https://linkedin.com",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      alt: "describe here",
      imgLink:
        "hhttps://github.com/skylark-shae/Wandering-Words/blob/main/README.md",
      redirectUrl: "https://facebook.com",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      alt: "describe here",
      imgLink:
        "hhttps://github.com/skylark-shae/Wandering-Words/blob/main/README.md",
      redirectUrl: "https://instagram.com",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      alt: "describe here",
      imgLink:
        "hhttps://github.com/skylark-shae/Wandering-Words/blob/main/README.md",
      redirectUrl: "https://twitter.com",
    },
  ];

  return (
    <section className="project" id="portfolio">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Portfolio</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Row>
                    {portfolio.map((portfolio, index) => {
                      return <ProjectCard key={index} {...portfolio} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
