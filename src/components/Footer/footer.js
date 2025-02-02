import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/tyanne-jensen-31206a229/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="white fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="https://medium.com/@vibewithme1123"
                target="_blank"
                rel="noreferrer"
              >
                <i className="white fa-brands fa-medium"></i>
              </a>
              <a
                href="https://github.com/tyannejensen"
                target="_blank"
                rel="noreferrer"
              >
                <i className="white fa-brands fa-github-alt"></i>
              </a>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
