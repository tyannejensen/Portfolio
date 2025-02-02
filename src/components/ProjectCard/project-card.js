import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  alt,
  redirectUrl,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <section className="proj-imgbx">
        <img src={imgUrl} alt={alt} />
        <section className="proj-txtx">
          <h4>{title}</h4>
          <h5>{description}</h5>
          <div className="social-icon">
            <a
              href="https://github.com/tyannejensen"
              target="_blank"
              rel="noreferrer"
            >
              <i className="white fa-brands fa-github-alt"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/tyanne-jensen-31206a229/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="white fa-solid fa-globe"></i>
            </a>
          </div>
        </section>
      </section>
    </Col>
  );
};
